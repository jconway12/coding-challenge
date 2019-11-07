import React from 'react';
import {getItems} from '../../actions/item_actions';
import {connect} from 'react-redux';
import {getSeasons} from '../../actions/season_actions';
import {getSeasonTags} from '../../actions/season_tag_actions';
import {Link} from 'react-router-dom';
import SeasonShow from '../seasons/season_show';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {season: null}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(season) {
        return e => {
            this.setState({season: season});
        }
    }

    componentDidMount() {
        this.props.getItems();
        this.props.getSeasons();
    }

    render() {
        const items = this.props.items || [];
        const seasons = this.props.seasons || [];
        const show = this.state.season ? <SeasonShow season={this.state.season} items={items} /> : null;

        return (
            <>
            <div className="items-list">
                <ul>
                    <h2>Your Clothing: </h2>
                    <Link to="/item/new">Add New Item</Link>
                    {items.map((item, idx) => {
                        return <div className="item" key={idx}>
                            <h3>{item.title}</h3>
                            <p>Style: {item.style}, Color: {item.color}</p>
                        </div>
                    })}
                </ul>
            </div>
            <div className="buttons">
            {seasons.map((season, idx) => {
               return <input key={idx} type="submit" value={`See ${season.season} Clothes`} onClick={this.handleClick(season)} />
            })} 
            </div>
            {show}
            </>
        )
    }
}

const msp = state => {
    const items = Object.values(state.items);
    const seasons = Object.values(state.seasons);

    return {
        items, seasons
    }
}

const mdp = dispatch => {
    return {
        getItems: () => {dispatch(getItems())},
        getSeasons: () => {dispatch(getSeasons())},
        getSeasonTags: () => { dispatch(getSeasonTags()) },
    }
}

export default connect(msp, mdp)(Homepage);
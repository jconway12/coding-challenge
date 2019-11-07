import React from 'react';
import {getItems} from '../../actions/item_actions';
import {connect} from 'react-redux';

class Homepage extends React.Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const items = this.props.items || [];
        return (
            <div className="items-list">
                <ul>
                    <h2>Your Clothing: </h2>
                    {items.map((item, idx) => {
                        return <div className="item" key={idx}>
                            <h3>{item.title}</h3>
                            <p>Style: {item.style}, Color: {item.color}</p>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}

const msp = state => {
    const items = Object.values(state.items);
    return {
        items
    }
}

const mdp = dispatch => {
    return {
        getItems: () => {dispatch(getItems())}
    }
}

export default connect(msp, mdp)(Homepage);
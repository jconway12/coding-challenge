import React from 'react';
import { getItems } from '../../actions/item_actions';
import { connect } from 'react-redux';
import { getSeasons } from '../../actions/season_actions';
import { getSeasonTags } from '../../actions/season_tag_actions';

class SeasonShow extends React.Component {
    render() {
        const items = this.props.items || [];
        const season = this.props.season;
        const inSeasonItems = [];
        for(let i = 0; i < items.length; i++) {
            if (items[i].seasons.includes(season.id)) {
                inSeasonItems.push(items[i]);
            }
        }
        
        return (
            <div>
                <h3>{season.season} clothes</h3>
                <ul>
                    {inSeasonItems.map((item, idx) => {
                        return <li key={idx}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default SeasonShow;

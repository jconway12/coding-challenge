import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './homepage/homepage';
import SeasonShow from '../components/seasons/season_show';
import NewItem from '../components/items/new_item_form';

const App = (props) => {
    return (
        <div>
            <h1>Welcome to GarbGuess</h1>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/item/new" component={NewItem} />
        </div>
    )
}

export default App;
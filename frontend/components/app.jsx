import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './homepage/homepage';
import SeasonShow from '../components/seasons/season_show';

const App = (props) => {
    return (
        <div>
            <h1>Welcome to GarbGuess</h1>
            <Route path="/" component={Homepage}/>
        </div>
    )
}

export default App;
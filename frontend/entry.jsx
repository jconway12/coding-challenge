import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {getSeasons} from './actions/season_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getSeasons = getSeasons;

    ReactDOM.render(<Root store={store}/>, root);
})
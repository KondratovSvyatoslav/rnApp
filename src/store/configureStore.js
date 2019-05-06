import { createStore, combineReducers } from 'redux';

import citiesReducer from './reducers/citiesReducer';

const rootReducer = combineReducers({
    citiesReducer: citiesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;

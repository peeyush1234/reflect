import { combineReducers } from 'redux';
import * as reflectionsReducer from './reflections';

export default combineReducers(Object.assign(
    reflectionsReducer,
));
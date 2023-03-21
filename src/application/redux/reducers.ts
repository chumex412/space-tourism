import { combineReducers } from '@reduxjs/toolkit';
import navLinksReducer from './nav-bar/slice';
import travelLogReducer from './travel-log/slice';

const rootReducers = combineReducers({
	navLink: navLinksReducer,
	'travel-log': travelLogReducer
});

export default rootReducers;

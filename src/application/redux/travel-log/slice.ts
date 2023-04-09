import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LogObjType, DataName, DataCount } from '../../domain/entity/travel-log';
import { createTravelLogState } from '../../domain/model/travel-log';

const initialState = createTravelLogState();

const travelLogSlice = createSlice({
	name: 'travel-log',
	initialState,
	reducers: {
		addDestinations(state, action: PayloadAction<LogObjType[]>) {
			state.destinations.data = action.payload;
		},
		updateCurrentName(state, action: PayloadAction<DataName>) {
			state.destinations.current = action.payload.name;
		},
		addCrew(state, action: PayloadAction<LogObjType[]>) {
			state.crew.data = action.payload;
		},
		updateCrewIndex(state, action: PayloadAction<DataCount>) {
			state.crew.index = action.payload.index;
		},
		addTechnology(state, action: PayloadAction<LogObjType[]>) {
			state.technology.data = action.payload;
		},
		updateTechnologyIndex(state, action: PayloadAction<DataCount>) {
			state.technology.index = action.payload.index;
		}
	}
});

export const { addDestinations, updateCurrentName, addCrew, updateCrewIndex, addTechnology, updateTechnologyIndex } =
	travelLogSlice.actions;

export default travelLogSlice.reducer;

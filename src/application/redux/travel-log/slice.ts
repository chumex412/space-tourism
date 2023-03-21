import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	Crew,
	Destination,
	TravelLogDataType,
	LogArrayType,
	TechItem,
	LogObjType
} from '../../domain/entity/travel-log';

type TravelLogState = {
	destinations: LogObjType[];
	crew: DataState;
	technology: DataState;
};

type DataState = { data: LogArrayType; count: number };

const initialState: TravelLogState = {
	destinations: [],
	crew: { data: [], count: 0 },
	technology: { data: [], count: 0 }
};

const travelLogSlice = createSlice({
	name: 'travel-log',
	initialState,
	reducers: {
		addDestinations(state, action: PayloadAction<LogObjType[]>) {
			state.destinations = action.payload;
		},
		addCrew(state, action: PayloadAction<Crew[]>) {
			state.crew.data = action.payload;
		},
		addTechnology(state, action: PayloadAction<TechItem[]>) {
			state.technology.data = action.payload;
		}
	}
});

export const { addDestinations, addCrew, addTechnology } = travelLogSlice.actions;

export default travelLogSlice.reducer;

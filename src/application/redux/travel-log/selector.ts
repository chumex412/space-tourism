import { AppState } from '../store';

export const getDestinations = (state: AppState) => state['travel-log'].destinations.data;

export const getCurrentName = (state: AppState) => state['travel-log'].destinations.current as string;

export const getCrew = (state: AppState) => state['travel-log'].crew.data;

export const getCrewCurrentIndex = (state: AppState) => state['travel-log'].crew.index as number;

export const getTechItems = (state: AppState) => state['travel-log'].technology.data;

export const getTechCurrentIndex = (state: AppState) => state['travel-log'].technology.index as number;

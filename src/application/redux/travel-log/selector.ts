import { AppState } from '../store';

export const getDestinations = (state: AppState) => state['travel-log'].destinations;

export const getCrew = (state: AppState) => state['travel-log'].crew.data;

export const getCrewCurrentIndex = (state: AppState) => state['travel-log'].crew.index;

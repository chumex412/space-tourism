import { AppState } from '../store';

export const getDestinations = (state: AppState) => state['travel-log'].destinations;

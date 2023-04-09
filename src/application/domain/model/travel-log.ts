import type { Destination, HashedType, TravelLogState } from '../entity/travel-log';

export const createTravelLogState = (): TravelLogState => ({
	destinations: { data: [], current: 'Moon' },
	crew: { data: [], index: 0 },
	technology: { data: [], index: 0 }
});

export const createDestination = (): Destination => ({
	name: '',
	images: { png: '', webp: '' },
	description: '',
	travel: '',
	distance: ''
});

export const getHashedVal = (val: string): HashedType => ({ hash: window.btoa(val) });

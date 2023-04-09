import type { Destination, Crew, TechItem } from '../domain/entity/travel-log';
import { DestinationNamesTypes } from '../domain/entity/destination';
import { getHashedVal } from '../domain/model/travel-log';

export const getDestinationNames = (list: Destination[]): DestinationNamesTypes[] => {
	const destinations = list.map((location, index) => ({ name: location.name, id: index + 1 }));

	return destinations;
};

export const getSingleDestination = (list: Destination[], name: string): Destination => {
	const destination = list.find((location) => location.name === name) as Destination;

	return destination;
};

export const changeCrew = (list: Crew[], currentIndex: number): Crew => {
	const singleCrew = list[currentIndex] as Crew;
	return singleCrew;
};

export const getTravelCount = (list: Crew[] | TechItem[], logData: string): string[] => {
	const travelCount = new Array(list.length).fill(logData).map((_, index) => {
		return getHashedVal(list[index].name).hash;
	}) as string[];

	return travelCount;
};

export const getSingleTech = (list: TechItem[], index: number): TechItem => {
	const item = list[index] as TechItem;

	return item;
};

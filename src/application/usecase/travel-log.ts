import { getTravelLog } from '../services/travel-log';
import type { Destination, Crew, TechItem } from '../domain/entity/travel-log';
import { DestinationNamesTypes } from '../domain/entity/destination';

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
		return window.btoa(list[index].name);
	}) as string[];

	return travelCount;
};

export const getSingleTech = (list: TechItem[], index: number): TechItem => {
	const item = list[index] as TechItem;

	return item;
};

/*export const increaseCrewcurrCount = (currCount: number): Crew => {
	const crew = getCrew() as Crew[];
	return crew[(currCount + 1) % crew.length];
};

export const decreaseCrewcurrCount = (currCount: number): Crew => {
	const crew = getCrew() as Crew[];
	return crew[currCount <= 0 ? crew.length - 1 : currCount - 1];
};

export const increaseTechItemcurrCount = (currCount: number): TechItem => {
	const items = getTechnology() as TechItem[];

	return items[(currCount + 1) % items.length];
};

export const decreaseTechItemcurrCount = (currCount: number): TechItem => {
	const items = getTechnology() as TechItem[];

	return items[currCount <= 0 ? items.length - 1 : currCount - 1];
};
*/

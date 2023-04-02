import { Destination } from './travel-log';

export type DestinationNamesTypes = {
	name: string;
	id: number;
};

export type TabsPropTypes = {
	tabs: DestinationNamesTypes[];
	showSingleDestination: (name: string) => void;
};

export type DestinationImgProps = {
	png?: string;
	webp?: string;
};

export type DestinationContentProps = {
	name: string;
	description: string;
	travel: string;
	distance: string;
};

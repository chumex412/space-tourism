export interface TravelLog {
	name: string;
	images: TravelLogImagesType;
}

export interface Destination extends TravelLog {
	description: string;
	distance: string;
	travel: string;
}

type TravelLogImagesType = {
	png?: string;
	webp?: string;
	portrait?: string;
	landscape?: string;
};

export interface Crew extends TravelLog {
	role: string;
	bio: string;
}

export interface TechItem extends TravelLog {
	description: string;
}

export type TravelLogDataType = {
	destinations: Destination[];
	crew: Crew[];
	technology: TechItem[];
};

export type LogArrayType = Destination[] | Crew[] | TechItem[];

export type LogObjType = Destination | Crew | TechItem;

export type LogPropType = 'destinations' | 'crew' | 'technology';

export type PageCaptionPropType = {
	text: string;
	count: number;
};

export type TravelLogIndicatorPropType = {
	active: boolean;
	index: number;
	onclick: (index: number) => void;
	pathname: string;
};

export type TravelTabsPropType = {
	active: boolean;
	onclick: (name: string) => void;
	name: string;
};

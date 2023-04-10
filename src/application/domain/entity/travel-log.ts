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

export type TravelLogState = {
	destinations: DataState;
	crew: DataState;
	technology: DataState;
};

type DataState = { data: LogObjType[]; index?: number; current?: string };

export type DataCount = { index: number };

export type DataName = { name: string };

export interface HashedType {
	hash: string;
}

export interface IndicatorStyleType {
	getClassNames: (baseStyle: string, activeStyles: string, inActiveStyle: string, active: boolean) => string;
}

export interface IndicatorContent {
	showContent: (index?: number) => string | null;
}

export interface TravelLogImageStyles {
	classNames: string;
}

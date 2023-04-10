// Component Props types
export type PageCaptionPropType = {
	text: string;
	count: number;
};

export type TravelLogIndicatorPropType = {
	index: number;
	onclick: (index: number) => void;
	styleIndicator?: string;
	content?: string | null;
};

export type TravelTabsPropType = {
	active: boolean;
	onclick: (name: string) => void;
	name: string;
};

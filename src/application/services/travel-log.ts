import jsondata from '../data/data.json';
import type {
	TravelLogDataType,
	Destination,
	Crew,
	TechItem,
	LogArrayType,
	LogPropType,
	LogObjType
} from '../domain/entity/travel-log';

const parseJSONData = (jsondata: TravelLogDataType) => {
	const data = jsondata;

	return data;
};

export const getTravelLog = (logProp: LogPropType): LogObjType[] => {
	const result = parseJSONData(jsondata);

	return result[logProp] as LogArrayType;
};

/*export const getDestinations = (): Destination[] => {
	const result = parseJSONData(jsondata);

	const destinations = result.destinations;

	return destinations;
};

export const getCrew = (): Crew[] => {
	const result = parseJSONData(jsondata);
	const crew = result.crew;

	return crew;
};

export const getTechnology = (): TechItem[] => {
	const result = parseJSONData(jsondata);
	const tech = result.technology;

	return tech;
};*/

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Destination } from '../domain/entity/travel-log';
import { AppState } from '../redux/store';
import { getDestinations } from '../redux/travel-log/selector';
import { addDestinations } from '../redux/travel-log/slice';

import { getTravelLog } from '../services/travel-log';
import { getDestinationNames, getSingleDestination } from '../usecase/travel-log';

const useTravelDestination = function () {
	const dispatch = useDispatch();

	useEffect(
		function () {
			dispatch(addDestinations(getTravelLog('destinations')));
		},
		[dispatch]
	);

	const destinations = useSelector((state: AppState) => getDestinations(state)) as Destination[];

	const showNames = () => {
		return getDestinationNames(destinations);
	};

	const showSingleDestination = (name: string) => {
		return getSingleDestination(destinations, name);
	};

	return { showSingleDestination, showNames };
};

export default useTravelDestination;

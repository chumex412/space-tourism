import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { getDestinations, getCurrentName } from '../redux/travel-log/selector';
import { addDestinations, updateCurrentName } from '../redux/travel-log/slice';

import { Destination } from '../domain/entity/travel-log';
import { DestinationNamesTypes } from '../domain/entity/destination';
import { HeaderStyles } from '../domain/entity/layout';
import { getTravelLog } from '../services/travel-log';
import { getDestinationNames, getSingleDestination, getHeaderStyles, showImgStyles } from '../usecase';
import { createDestination } from '../domain/model/travel-log';

const useTravelDestination = function () {
	const singleDestinationRef = useRef(createDestination());

	const destinationNamesRef = useRef<DestinationNamesTypes[]>();
	const showHeaderStyleRef = useRef<HeaderStyles>();
	const imgStyleRef = useRef<string>();

	const destinations = useSelector((state: AppState) => getDestinations(state)) as Destination[];
	const currentName = useSelector((state: AppState) => getCurrentName(state));

	const { pathname } = useLocation();

	const dispatch = useDispatch();

	useEffect(
		function () {
			dispatch(addDestinations(getTravelLog('destinations')));
		},
		[dispatch]
	);

	useEffect(() => {
		if (pathname === '/destination') dispatch(updateCurrentName({ name: 'Moon' }));
	}, [dispatch, pathname]);

	const showNames = () => {
		return getDestinationNames(destinations);
	};

	const showSingleDestination = useCallback(
		(name: string) => {
			dispatch(updateCurrentName({ name }));
		},
		[dispatch]
	);

	singleDestinationRef.current = getSingleDestination(destinations, currentName);
	destinationNamesRef.current = showNames();
	showHeaderStyleRef.current = getHeaderStyles('', 'text-2xl', 'mx-auto xl:mx-0');
	imgStyleRef.current = showImgStyles('h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]');

	return {
		showSingleDestination,
		destinations,
		destinationNames: destinationNamesRef.current,
		singleDestination: singleDestinationRef.current,
		pathname,
		insertHeaderStyles: showHeaderStyleRef.current,
		imgStyle: imgStyleRef.current
	};
};

export default useTravelDestination;

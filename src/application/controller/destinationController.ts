import { useState, useEffect, useCallback, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Destination } from '../domain/entity/travel-log';
import { AppState } from '../redux/store';
import { getDestinations } from '../redux/travel-log/selector';
import { addDestinations } from '../redux/travel-log/slice';

import { getTravelLog } from '../services/travel-log';
import { getDestinationNames, getSingleDestination } from '../usecase/travel-log';

const useTravelDestination = function () {
	const [singleDestination, setSingleDestination] = useState<Destination>({
		name: '',
		images: { png: '', webp: '' },
		description: '',
		travel: '',
		distance: ''
	});
	const [isPending, startTransition] = useTransition();

	const destinations = useSelector((state: AppState) => getDestinations(state)) as Destination[];

	const dispatch = useDispatch();

	useEffect(
		function () {
			dispatch(addDestinations(getTravelLog('destinations')));

			startTransition(() => setSingleDestination(destinations[0]));
		},
		[dispatch, destinations]
	);

	const showNames = () => {
		return getDestinationNames(destinations);
	};

	const showSingleDestination = useCallback(
		(name: string) => {
			const destination = getSingleDestination(destinations, name) as Destination;
			startTransition(() => {
				setSingleDestination(destination);
			});
		},
		[destinations]
	);

	return { showSingleDestination, showNames, singleDestination };
};

export default useTravelDestination;

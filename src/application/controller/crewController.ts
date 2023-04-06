import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Crew } from '../domain/entity/travel-log';
import { AppState } from '../redux/store';
import { getCrew, getCrewCurrentIndex } from '../redux/travel-log/selector';
import { addCrew, updateCrewIndex } from '../redux/travel-log/slice';
import { getTravelLog } from '../services/travel-log';
import { getTravelCount } from '../usecase/travel-log';

const useTravelCrew = function () {
	const dispatch = useDispatch();
	const crew = useSelector((state: AppState) => getCrew(state)) as Crew[];
	const currentIndex = useSelector((state: AppState) => getCrewCurrentIndex(state));

	const { pathname } = useLocation();

	const crewCountRef = useRef<string[]>([]);

	useEffect(() => {
		dispatch(addCrew(getTravelLog('crew')));
	}, [dispatch]);

	useEffect(() => {
		if (pathname !== 'crew') dispatch(updateCrewIndex({ index: 0 }));
	}, [dispatch, pathname]);

	const getSingleCrew = useCallback(
		(index: number) => {
			dispatch(updateCrewIndex({ index }));
		},
		[dispatch]
	);

	crewCountRef.current = getTravelCount(crew, 'crew');

	return { getSingleCrew, crewCountRef, currentIndex, crew, pathname };
};

export default useTravelCrew;

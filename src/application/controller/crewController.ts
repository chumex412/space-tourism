import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Crew } from '../domain/entity/travel-log';
import { AppState } from '../redux/store';
import { getCrew, getCrewCurrentIndex } from '../redux/travel-log/selector';
import { addCrew, updateCrewIndex } from '../redux/travel-log/slice';
import { getTravelLog } from '../services/travel-log';
import { changeCrew, getCrewCount } from '../usecase/travel-log';

const useTravelCrew = function () {
	const dispatch = useDispatch();
	const crew = useSelector((state: AppState) => getCrew(state)) as Crew[];
	const currentIndex = useSelector((state: AppState) => getCrewCurrentIndex(state));

	const crewCountRef = useRef<string[]>([]);

	useEffect(() => {
		dispatch(addCrew(getTravelLog('crew')));
	}, [dispatch]);

	const getSingleCrew = useCallback(
		(index: number) => {
			dispatch(updateCrewIndex({ index }));
		},
		[dispatch]
	);

	crewCountRef.current = getCrewCount(crew);

	return { getSingleCrew, crewCountRef, currentIndex, crew };
};

export default useTravelCrew;

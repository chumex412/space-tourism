import { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import type { TechItem } from '../domain/entity/travel-log';
import { AppState } from '../redux/store';
import { getTechItems, getTechCurrentIndex } from '../redux/travel-log/selector';
import { addTechnology, updateTechnologyIndex } from '../redux/travel-log/slice';
import { getTravelLog } from '../services/travel-log';
import { getTravelCount } from '../usecase/travel-log';

const useTravelTechnology = function () {
	const technology = useSelector((state: AppState) => getTechItems(state)) as TechItem[];
	const currentIndex = useSelector((state: AppState) => getTechCurrentIndex(state)) as number;

	const { pathname } = useLocation();

	const techItemsCountRef = useRef<string[]>([]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addTechnology(getTravelLog('technology')));
	}, [dispatch]);

	useEffect(() => {
		if (pathname === '/technology') dispatch(updateTechnologyIndex({ index: 0 }));
	}, [dispatch, pathname]);

	const updateIndex = useCallback(
		(index: number) => {
			dispatch(updateTechnologyIndex({ index }));
		},
		[dispatch]
	);

	techItemsCountRef.current = getTravelCount(technology, 'tech');

	return { technology, techCount: techItemsCountRef.current, updateIndex, currentIndex, pathname };
};

export default useTravelTechnology;

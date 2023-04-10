import { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppState } from '../redux/store';
import { getTechItems, getTechCurrentIndex } from '../redux/travel-log/selector';
import { addTechnology, updateTechnologyIndex } from '../redux/travel-log/slice';
import type { IndicatorContent, IndicatorStyleType, TechItem } from '../domain/entity/travel-log';
import type { HeaderStyles } from '../domain/entity/layout';
import { getTravelLog } from '../services/travel-log';
import {
	getTravelCount,
	styleIndicator as styleTechIndicator,
	showIndicatorContent,
	getHeaderStyles
} from '../usecase';

const useTravelTechnology = function () {
	const technology = useSelector((state: AppState) => getTechItems(state)) as TechItem[];
	const currentIndex = useSelector((state: AppState) => getTechCurrentIndex(state)) as number;

	const { pathname } = useLocation();

	const techItemsCountRef = useRef<string[]>([]);
	const techIndicatorClassRef = useRef<IndicatorStyleType['getClassNames']>();
	const techIndicatorContentRef = useRef<IndicatorContent['showContent']>();
	const showHeaderStyleRef = useRef<HeaderStyles>();

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
	techIndicatorClassRef.current = styleTechIndicator;
	techIndicatorContentRef.current = showIndicatorContent;
	showHeaderStyleRef.current = getHeaderStyles('text-sm font-barlow-cond text-secondary', 'text-xl', '');

	return {
		technology,
		techCount: techItemsCountRef.current,
		updateIndex,
		currentIndex,
		pathname,
		styleIndicator: techIndicatorClassRef.current,
		renderIndicatorContent: techIndicatorContentRef.current,
		insertHeaderStyles: showHeaderStyleRef.current
	};
};

export default useTravelTechnology;

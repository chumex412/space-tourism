import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store';
import { getCrew, getCrewCurrentIndex } from '../redux/travel-log/selector';
import { addCrew, updateCrewIndex } from '../redux/travel-log/slice';
import { Crew, IndicatorContent, IndicatorStyleType } from '../domain/entity/travel-log';
import { HeaderStyles } from '../domain/entity/layout';
import { getTravelLog } from '../services/travel-log';
import {
	getHeaderStyles,
	getTravelCount,
	showImgStyles,
	showIndicatorContent,
	styleIndicator as styleCrewIndicator
} from '../usecase';

const useTravelCrew = function () {
	const dispatch = useDispatch();
	const crew = useSelector((state: AppState) => getCrew(state)) as Crew[];
	const currentIndex = useSelector((state: AppState) => getCrewCurrentIndex(state));

	const { pathname } = useLocation();

	const crewIndicatorClassRef = useRef<IndicatorStyleType['getClassNames']>();
	const crewCountRef = useRef<string[]>([]);
	const crewIndicatorContentRef = useRef<IndicatorContent['showContent']>();
	const showHeaderStyleRef = useRef<HeaderStyles>();
	const imgStyleRef = useRef<string>();

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

	crewIndicatorClassRef.current = styleCrewIndicator;
	crewIndicatorContentRef.current = showIndicatorContent;

	crewCountRef.current = getTravelCount(crew, 'crew');

	showHeaderStyleRef.current = getHeaderStyles(
		'text-lg bellefair text-white mix-blend-normal opacity-50',
		'text-xl',
		'mx-auto xl:mx-0'
	);
	imgStyleRef.current = showImgStyles('h-[223px] md:h-[532px] xl:h-[74vh]');

	return {
		getSingleCrew,
		crewCountRef,
		currentIndex,
		crew,
		pathname,
		styleIndicator: crewIndicatorClassRef.current,
		crewIndicatorContent: crewIndicatorContentRef.current,
		insertHeaderStyles: showHeaderStyleRef.current,
		imgStyle: imgStyleRef.current
	};
};

export default useTravelCrew;

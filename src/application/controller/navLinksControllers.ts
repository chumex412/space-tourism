import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { routes } from '../data/route';
import { hideNavLinks, showNavLinks } from '../redux/nav-bar/slice';
import { showLinks } from '../redux/nav-bar/selector';
import { RoutesType } from '../domain/entity/layout';
import { AppState } from '../redux/store';

const useNavLinks = () => {
	const [links, setLinks] = useState<RoutesType[]>([]);

	const dispatch: Dispatch = useDispatch();
	const show = useSelector((state: AppState) => showLinks(state));

	useEffect(() => {
		setLinks(routes);
	}, []);

	const showLinksOnMobile = () => {
		dispatch(showNavLinks());
	};

	const hideLinkOnMobile = () => {
		dispatch(hideNavLinks());
	};

	return { links, show, showOnMobile: showLinksOnMobile, hideOnMobile: hideLinkOnMobile };
};

export { useNavLinks };

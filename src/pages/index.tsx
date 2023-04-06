import { lazy } from 'react';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { PageLayout } from '../layout';

const Home = lazy(() => import('./Home'));
const Destination = lazy(() => import('./Destination'));
const Crew = lazy(() => import('./Crew'));
const Technology = lazy(() => import('./Technology'));

const rootRouter = () =>
	createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route element={<PageLayout />}>
					<Route index element={<Home />} />
					<Route path="destination" element={<Destination />} />
					<Route path="crew" element={<Crew />} />
					<Route path="technology" element={<Technology />} />
				</Route>
			</Route>
		)
	);

export default rootRouter;

import React from 'react';
import { Outlet } from 'react-router-dom';
//import { LayoutProps } from '../../application/domain/entity/layout';
import { Navbar } from '../../components/ui';

const PageLayout = () => {
	return (
		<>
			<Navbar />
			<main className="container flex items-center lg:block">
				<Outlet />
			</main>
		</>
	);
};

export default PageLayout;

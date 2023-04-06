import React from 'react';
import { Outlet } from 'react-router-dom';
//import { LayoutProps } from '../../application/domain/entity/layout';
import { Navbar } from '../../components/ui';

const PageLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default PageLayout;

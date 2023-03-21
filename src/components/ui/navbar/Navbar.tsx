import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo, Hamburger } from '../../../assets';
import Navlinks from './components/Navlinks';
import { useNavLinks } from '../../../application/controller';

import './styles/navbar.css';

const Navbar = () => {
	const { showOnMobile } = useNavLinks();
	return (
		<nav className="sticky top-0 bg-transparent py-4 px-4 font-barlow-cond sm:px-0 sm:pt-8">
			<div className="items-center sm:flex">
				<div className="flex w-full items-center justify-between sm:ml-8 sm:basis-5/12">
					<Link to="/">{<BrandLogo />}</Link>
					<button className="sm:hidden" onClick={showOnMobile}>
						<Hamburger />
					</button>
				</div>
				<Navlinks />
			</div>
		</nav>
	);
};

export default Navbar;

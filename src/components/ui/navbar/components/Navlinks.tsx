import React from 'react';
import { useNavLinks } from '../../../../application/controller/navLinksControllers';
import type { RoutesType } from '../../../../application/domain/entity/layout';
import { CloseIcon } from '../../../../assets';
import PageLink from './NavLink';

const Navlinks = () => {
	const { links, show, hideOnMobile } = useNavLinks();

	return (
		<div
			className={`links-container fixed top-0 right-0 h-full w-[254px] py-4 text-right ${
				show ? 'show' : ''
			} sm:relative sm:w-full sm:basis-7/12 sm:py-0`}
		>
			<button className="mr-6 sm:hidden" onClick={hideOnMobile}>
				<CloseIcon />
			</button>

			<span aria-label="Middle aligned horizontal line" className="hr-line hidden lg:block"></span>

			<ul className="mx-auto w-full list-none items-center justify-center gap-9 text-left sm:flex lg:gap-12">
				{links.map((item: RoutesType, index: number) => {
					return (
						<li key={item.id}>
							<PageLink id={item.id} index={index} name={item.name} path={item.path} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navlinks;

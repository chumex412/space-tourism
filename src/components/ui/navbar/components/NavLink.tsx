import { NavLink } from 'react-router-dom';
import { PageLinkProps } from '../../../../application/domain/entity/layout';

const PageLink = ({ id, name, path, index }: PageLinkProps) => {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive
					? 'flex gap-2 border-r-[4px] py-2 pl-8 text-sm uppercase leading-llh text-white sm:border-r-0 sm:border-b-[3px] sm:py-8 md:pl-0'
					: 'flex gap-2 py-2 pl-8 text-sm uppercase leading-llh text-white sm:py-8 md:pl-0'
			}
			to={path}
		>
			<span className="font-bold">{'0' + index}</span>
			<span>{name}</span>
		</NavLink>
	);
};

export default PageLink;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageLinkProps } from '../../../../application/domain/entity/layout';

const PageLink = ({ id, name, path, index }: PageLinkProps) => {
	return (
		<NavLink className="flex gap-2 py-4 text-sm uppercase leading-llh text-white" to={path}>
			<span>{'0' + index}</span>
			<span>{name}</span>
		</NavLink>
	);
};

export default PageLink;

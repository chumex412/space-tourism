import React from 'react';
import { useTravelTechnology } from '../../../../application/controller';
import { HeaderGroup } from '../../../ui';

const TechnDetailsContainer = () => {
	const { technology, currentIndex } = useTravelTechnology();

	if (!technology.length) {
		return null;
	}

	const { name, description } = technology[currentIndex];

	return <HeaderGroup intro="THE TERMINOLOGY…" lead={name} text={description} />;
};

export default TechnDetailsContainer;

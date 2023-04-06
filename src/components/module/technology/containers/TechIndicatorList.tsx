import React from 'react';
import { useTravelTechnology } from '../../../../application/controller';
import { Indicator } from '../../../ui';

const TechIndicatorList = () => {
	const { techCount, pathname, updateIndex, currentIndex } = useTravelTechnology();
	return (
		<section className="flex justify-center gap-x-4 gap-y-8 xl:flex-col">
			{techCount.map((id, index) => {
				const activeBtn = currentIndex === index;
				return <Indicator key={id} active={activeBtn} pathname={pathname} onclick={updateIndex} index={index} />;
			})}
		</section>
	);
};

export default TechIndicatorList;

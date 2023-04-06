import React from 'react';
import { useTravelDestination } from '../../../../application/controller';
import { Tab } from '../../../ui';

const DestinationTabs = () => {
	const { showSingleDestination, destinationNames, singleDestination } = useTravelDestination();

	return (
		<section>
			<ul className="mt-14 flex justify-center gap-8 xl:mt-0 xl:justify-start">
				{destinationNames.map((tab) => {
					const activeBtn = tab.name === singleDestination.name;
					return <Tab key={tab.id} name={tab.name} active={activeBtn} onclick={showSingleDestination} />;
				})}
			</ul>
		</section>
	);
};

export default DestinationTabs;

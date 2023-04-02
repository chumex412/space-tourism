import React from 'react';

import { TabsPropTypes } from '../../../../application/domain/entity/destination';

const DestinationTabs = ({ tabs, showSingleDestination }: TabsPropTypes) => {
	return (
		<section>
			<ul className="mt-14 flex justify-center gap-8 xl:mt-0 xl:justify-start">
				{tabs.map((tab) => {
					return (
						<li key={tab.id} className="list-none">
							<button
								onClick={() => showSingleDestination(tab.name)}
								className="font-barlow-cond text-sm uppercase leading-[120%] text-white"
							>
								{tab.name}
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default DestinationTabs;

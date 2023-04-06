import React from 'react';
import { TravelTabsPropType } from '../../../application/domain/entity/travel-log';

const Tab = React.memo(({ name, active, onclick }: TravelTabsPropType) => {
	return (
		<li className="list-none">
			<button
				onClick={() => onclick(name)}
				className={`pb-3 font-barlow-cond text-sm uppercase leading-[120%] text-white ${
					active ? 'border-b-[3px] border-white' : ''
				}`}
			>
				{name}
			</button>
		</li>
	);
});

export default Tab;
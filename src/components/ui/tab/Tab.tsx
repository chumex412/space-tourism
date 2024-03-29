import { memo } from 'react';
import { TravelTabsPropType } from '../../../application/domain/entity/props';

const Tab = memo(({ name, active, onclick }: TravelTabsPropType) => {
	return (
		<li className="list-none">
			<button
				onClick={() => onclick(name)}
				className={`pb-3 font-barlow-cond text-sm uppercase leading-[120%] text-white transition duration-300 ${
					active ? 'border-b-[3px] border-white' : 'hover:border-b-[3px] hover:opacity-50 hover:mix-blend-normal'
				}`}
			>
				{name}
			</button>
		</li>
	);
});

export default Tab;

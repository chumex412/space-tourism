import React from 'react';
import type { TravelLogIndicatorPropType } from '../../../application/domain/entity/travel-log';

const Indicator = React.memo(({ active, index, onclick, pathname }: TravelLogIndicatorPropType) => {
	return (
		<button
			className={`rounded-full transition duration-300 ${
				pathname === '/technology'
					? `flex h-10 w-10 items-center justify-center border border-white ${
							active ? 'bg-white text-primary' : 'bg-transparent text-white'
					  } text-lg md:h-[60px] md:w-[60px] xl:h-20 xl:w-20`
					: `h-2.5 w-2.5 ${active ? '' : 'opacity-20 mix-blend-normal'} bg-white xl:h-4 xl:w-4`
			}`}
			data-index={index}
			onClick={() => onclick(index)}
		>
			{pathname === '/technology' ? index + 1 : null}
		</button>
	);
});

export default Indicator;

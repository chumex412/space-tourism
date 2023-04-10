import { memo } from 'react';
import type { TravelLogIndicatorPropType } from '../../../application/domain/entity/props';

const Indicator = memo(({ index, onclick, styleIndicator, content }: TravelLogIndicatorPropType) => {
	return (
		<button
			className={`rounded-full transition duration-300 ${styleIndicator && styleIndicator}`}
			data-index={index}
			onClick={() => onclick(index)}
		>
			{content}
		</button>
	);
});

export default Indicator;

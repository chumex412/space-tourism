import React from 'react';
import { CrewIndicatorPropType } from '../../../../application/domain/entity/crew';

const Indicator = React.memo(({ index, onclick }: CrewIndicatorPropType) => {
	console.log('rerenders', index);

	return (
		<button
			className="h-2.5 w-2.5 rounded-full bg-white lg:h-4 lg:w-4"
			data-index={index}
			onClick={() => onclick(index)}
		></button>
	);
});

export default Indicator;

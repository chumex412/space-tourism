import React from 'react';
import { CrewIndicatorPropType } from '../../../../application/domain/entity/crew';

const Indicator = React.memo(({ index, onclick }: CrewIndicatorPropType) => {
	return (
		<button
			className="h-2.5 w-2.5 rounded-full bg-white xl:h-4 xl:w-4"
			data-index={index}
			onClick={() => onclick(index)}
		></button>
	);
});

export default Indicator;

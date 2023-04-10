import { useTravelCrew } from '../../../../application/controller';
import { Indicator } from '../../../ui';

const CrewIndicatorList = () => {
	const { crewCountRef, getSingleCrew, currentIndex, styleIndicator, crewIndicatorContent } = useTravelCrew();

	return (
		<div className="mt-24 mb-6 flex justify-center gap-6 xl:mb-0 xl:justify-start">
			{crewCountRef.current.map((id, index) => {
				const activeBtn = currentIndex === index;
				return (
					<Indicator
						key={id}
						index={index}
						onclick={getSingleCrew}
						styleIndicator={styleIndicator(
							'h-2.5 w-2.5 bg-white xl:h-4 xl:w-4',
							'',
							'opacity-20 mix-blend-normal',
							activeBtn
						)}
						content={crewIndicatorContent()}
					/>
				);
			})}
		</div>
	);
};

export default CrewIndicatorList;

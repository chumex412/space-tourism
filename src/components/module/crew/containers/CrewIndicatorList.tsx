import { useTravelCrew } from '../../../../application/controller';
import { Indicator } from '../../../ui';

const CrewIndicatorList = () => {
	const { crewCountRef, getSingleCrew, currentIndex, pathname } = useTravelCrew();

	return (
		<div className="mt-24 mb-6 flex justify-center gap-6 xl:mb-0 xl:justify-start">
			{crewCountRef.current.map((id, index) => {
				const activeBtn = currentIndex === index;
				return <Indicator key={id} active={activeBtn} index={index} onclick={getSingleCrew} pathname={pathname} />;
			})}
		</div>
	);
};

export default CrewIndicatorList;

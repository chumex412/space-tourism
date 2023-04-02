import { useTravelCrew } from '../../../../application/controller';
import Indicator from '../components/Indicator';

const CrewIndicatorList = () => {
	const { crewCountRef, getSingleCrew } = useTravelCrew();
	return (
		<div className="mt-24 mb-6 flex justify-center gap-6 xl:mb-0 xl:justify-start">
			{crewCountRef.current.map((id, index) => {
				return <Indicator key={id} index={index} onclick={getSingleCrew} />;
			})}
		</div>
	);
};

export default CrewIndicatorList;

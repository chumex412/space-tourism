import { useTravelCrew } from '../../../../application/controller';
import Indicator from '../components/Indicator';

const CrewIndicatorList = () => {
	const { crewCountRef, getSingleCrew } = useTravelCrew();
	return (
		<div className="mt-28 flex gap-6">
			{crewCountRef.current.map((id, index) => {
				return <Indicator key={id} index={index} onclick={getSingleCrew} />;
			})}
		</div>
	);
};

export default CrewIndicatorList;

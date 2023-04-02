import { useTravelCrew } from '../../../../application/controller';
import { HeaderGroup } from '../../../ui';

const CrewDetailsContainer = () => {
	const { crew, currentIndex } = useTravelCrew();

	return (
		<>
			{crew.length && (
				<HeaderGroup intro={crew[currentIndex].role} lead={crew[currentIndex].name} text={crew[currentIndex].bio} />
			)}
		</>
	);
};

export default CrewDetailsContainer;

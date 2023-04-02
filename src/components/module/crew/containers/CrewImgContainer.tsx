import { TravelLogImage } from '../../../ui';
import { useTravelCrew } from '../../../../application/controller';

const CrewImgContainer = () => {
	const { crew, currentIndex } = useTravelCrew();
	if (!crew.length) {
		return null;
	}

	const { png, webp } = crew[currentIndex]?.images;

	return <>{crew.length && <TravelLogImage png={png} webp={webp} />}</>;
};

export default CrewImgContainer;

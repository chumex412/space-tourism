import { useTravelTechnology } from '../../../../application/controller';
import TechImg from '../components/TechImg';

const TechImgContainer = () => {
	const { technology, currentIndex } = useTravelTechnology();

	if (!technology.length) {
		return null;
	}

	const { portrait, landscape } = technology[currentIndex].images;

	let portraitImg = '';
	let landscapeImg = '';

	if (portrait) portraitImg = require(`../../../../${portrait}`);
	if (landscape) landscapeImg = require(`../../../../${landscape}`);

	return <TechImg landscape={landscapeImg} portrait={portraitImg} />;
};

export default TechImgContainer;

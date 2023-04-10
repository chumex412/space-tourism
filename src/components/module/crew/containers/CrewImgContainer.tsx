import { TravelLogImage } from '../../../ui';
import { useTravelCrew } from '../../../../application/controller';

const CrewImgContainer = () => {
	const { crew, currentIndex, imgStyle } = useTravelCrew();
	if (!crew.length) {
		return null;
	}

	const { png, webp } = crew[currentIndex]?.images;

	let pngImg = '';
	let webpImg = '';
	if (png) pngImg = require(`../../../../${png}`);
	if (webp) webpImg = require(`../../../../${webp}`);

	return <>{crew.length && <TravelLogImage png={pngImg} webp={webpImg} imgStyle={imgStyle} />}</>;
};

export default CrewImgContainer;

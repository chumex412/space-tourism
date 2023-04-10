import { useTravelDestination } from '../../../../application/controller';
import { TravelLogImage } from '../../../ui';

const DestinationImgContainer = () => {
	const { singleDestination, destinations, imgStyle } = useTravelDestination();

	if (!destinations.length) return null;

	const { png, webp } = singleDestination.images;
	let pngImg = '';
	let webpImg = '';

	if (png) pngImg = require(`../../../../${png}`);
	if (webp) webpImg = require(`../../../../${webp}`);

	return <TravelLogImage png={pngImg} webp={webpImg} imgStyle={imgStyle} />;
};

export default DestinationImgContainer;

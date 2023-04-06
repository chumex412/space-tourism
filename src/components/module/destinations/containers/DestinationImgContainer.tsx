import { useTravelDestination } from '../../../../application/controller';
import DestinationImage from '../components/DestinationImage';

const DestinationImgContainer = () => {
	const { singleDestination, destinations } = useTravelDestination();

	if (!destinations.length) return null;

	const { png, webp } = singleDestination.images;
	let pngImg = '';
	let webpImg = '';

	if (png) pngImg = require(`../../../../${png}`);
	if (webp) webpImg = require(`../../../../${webp}`);

	return <DestinationImage png={pngImg} webp={webpImg} />;
};

export default DestinationImgContainer;

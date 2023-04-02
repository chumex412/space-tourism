import { useLocation } from 'react-router-dom';
import type { DestinationImgProps } from '../../../application/domain/entity/destination';

const TravelImage = ({ png, webp }: DestinationImgProps) => {
	const { pathname } = useLocation();
	let pngImg = '';
	let webpImg = '';
	if (png) pngImg = require(`../../../${png}`);
	if (webp) webpImg = require(`../../../${webp}`);

	return (
		<section>
			<picture
				className={`mx-auto block xl:mr-0 xl:ml-auto ${
					pathname === '/destination' ? 'h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]' : ''
				}`}
			>
				<source srcSet={webpImg} type="image/webp" />
				<img className="" src={pngImg} alt="" />
			</picture>
		</section>
	);
};

export default TravelImage;

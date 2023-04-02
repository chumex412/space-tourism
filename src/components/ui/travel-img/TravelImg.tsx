import { useLocation } from 'react-router-dom';
import type { DestinationImgProps } from '../../../application/domain/entity/destination';

const TravelImage = ({ png, webp }: DestinationImgProps) => {
	const { pathname } = useLocation();

	let pngImg = '';
	let webpImg = '';
	if (png) pngImg = require(`../../../${png}`);
	if (webp) webpImg = require(`../../../${webp}`);

	return (
		<section className={`${pathname === '/crew' ? '' : ''}`}>
			<picture
				className={`mx-auto block text-center xl:mr-0 xl:ml-auto ${
					pathname === '/destination'
						? 'h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px]'
						: pathname === '/crew'
						? 'h-[223px] md:h-[532px] xl:h-[74vh]'
						: ''
				}`}
			>
				<source className="inline-block w-auto" srcSet={webpImg} type="image/webp" />
				<img className="inline-block w-auto" src={pngImg} alt="" />
			</picture>
		</section>
	);
};

export default TravelImage;

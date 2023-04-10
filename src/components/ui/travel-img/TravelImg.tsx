import type { DestinationImgProps } from '../../../application/domain/entity/destination';

const TravelImage = ({ png, webp, imgStyle }: DestinationImgProps) => {
	return (
		<section>
			<picture className={`mx-auto block text-center xl:mr-0 xl:ml-auto ${imgStyle}`}>
				<source className="inline-block w-auto" srcSet={webp} type="image/webp" />
				<img className="inline-block w-auto" src={png} alt="" />
			</picture>
		</section>
	);
};

export default TravelImage;

import { TechImgPropsType } from '../../../../application/domain/entity/tech';

const TechImg = ({ portrait, landscape }: TechImgPropsType) => {
	return (
		<section className="w-full xl:w-auto">
			<picture className="flex h-[170px] w-full flex-col items-stretch justify-center md:h-[310px] xl:h-[527px] xl:flex-row xl:items-center">
				<source srcSet={portrait} media="(min-width: 992px)" />
				<source srcSet={landscape} className="" media="(max-width: 991px)" />
				<img src={landscape} className="w-full" alt="" />
			</picture>
		</section>
	);
};

export default TechImg;

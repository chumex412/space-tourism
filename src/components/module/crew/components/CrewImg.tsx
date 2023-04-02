import React from 'react';
import { CrewImgPropType } from '../../../../application/domain/entity/crew';

const CrewImg = ({ png, webp }: CrewImgPropType) => {
	let pngImg = '';
	let webpImg = '';

	if (png) pngImg = require(`../../../../${png}`);
	if (webp) webpImg = require(`../../../../${webp}`);

	return (
		<section>
			<picture className="mx-auto block w-[170px] md:w-[300px] xl:mr-0 xl:ml-auto xl:w-[445px]">
				<source srcSet={webpImg} type="image/webp" />
				<img className="" src={pngImg} alt="" />
			</picture>
		</section>
	);
};

export default CrewImg;

import React from 'react';
import type { DestinationImgProps } from '../../../../application/domain/entity/destination';

const DestinationImage = ({ png, webp }: DestinationImgProps) => {
	return (
		<section>
			<picture className="mx-auto block h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:mr-0 xl:ml-auto xl:h-[445px] xl:w-[445px]">
				<source srcSet={webp} type="image/webp" />
				<img className="" src={png} alt="" />
			</picture>
		</section>
	);
};

export default DestinationImage;

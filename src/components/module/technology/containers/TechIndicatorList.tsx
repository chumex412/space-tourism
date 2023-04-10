import React from 'react';
import { useTravelTechnology } from '../../../../application/controller';
import { Indicator } from '../../../ui';

const TechIndicatorList = () => {
	const { techCount, updateIndex, currentIndex, styleIndicator, renderIndicatorContent } = useTravelTechnology();
	return (
		<section className="flex justify-center gap-x-4 gap-y-8 xl:flex-col">
			{techCount.map((id, index) => {
				const activeBtn = currentIndex === index;
				return (
					<Indicator
						key={id}
						styleIndicator={styleIndicator(
							'flex h-10 w-10 items-center justify-center border border-white text-lg md:h-[60px] md:w-[60px] xl:h-20 xl:w-20',
							'bg-white text-primary',
							'bg-transparent text-white',
							activeBtn
						)}
						onclick={updateIndex}
						index={index}
						content={renderIndicatorContent(index + 1)}
					/>
				);
			})}
		</section>
	);
};

export default TechIndicatorList;

import { HeaderGroup } from '../../../ui';
import { useTravelDestination } from '../../../../application/controller';

const DestinationContent = () => {
	const { singleDestination, destinations, insertHeaderStyles } = useTravelDestination();

	if (!destinations.length) return null;

	return (
		<section className="pt-9 pb-5 text-center xl:text-left">
			<HeaderGroup lead={singleDestination.name} text={singleDestination.description} styles={insertHeaderStyles} />
			<section className="flex justify-center gap-20 border-t-[#383B4B] pt-7 xl:justify-start">
				<div>
					<h4 className="mb-3 font-barlow text-xs font-normal uppercase leading-[120%] text-secondary">
						AVG. DISTANCE
					</h4>
					<p className="font-bellefair text-[1.75rem] leading-[115%] text-white">{singleDestination.distance}</p>
				</div>
				<div>
					<h4 className="mb-3 font-barlow text-xs font-normal uppercase leading-[120%] text-secondary">
						Est. travel time
					</h4>
					<p className="font-bellefair text-[1.75rem] leading-[115%] text-white">{singleDestination.travel}</p>
				</div>
			</section>
		</section>
	);
};

export default DestinationContent;

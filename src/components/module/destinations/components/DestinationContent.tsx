import { HeaderGroup } from '../../../ui';
import { DestinationContentProps } from '../../../../application/domain/entity/destination';

const DestinationContent = ({ name, description, travel, distance }: DestinationContentProps) => {
	return (
		<section className="pt-9 pb-5 text-center xl:text-left">
			<HeaderGroup lead={name} text={description} />
			<section className="flex justify-center gap-20 border-t-[#383B4B] pt-7 xl:justify-start">
				<div>
					<h4 className="mb-3 font-barlow text-xs font-normal uppercase leading-[120%] text-secondary">
						AVG. DISTANCE
					</h4>
					<p className="font-bellefair text-md leading-[115%] text-white">{distance}</p>
				</div>
				<div>
					<h4 className="mb-3 font-barlow text-xs font-normal uppercase leading-[120%] text-secondary">
						Est. travel time
					</h4>
					<p className="font-bellefair text-md leading-[115%] text-white">{travel}</p>
				</div>
			</section>
		</section>
	);
};

export default DestinationContent;

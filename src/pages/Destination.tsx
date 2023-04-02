import React from 'react';
import { DestinationTabs } from '../components/module/destinations';
import { useTravelDestination } from '../application/controller';
import { PageCaption, PageBackground } from '../components/ui';
import { imgs } from '../assets';
import DestinationContent from '../components/module/destinations/components/DestinationContent';
import DestinationImage from '../components/module/destinations/components/DestinationImage';
import '../styles/destination.css';

const Destination = () => {
	const { showNames, showSingleDestination, singleDestination } = useTravelDestination();

	const { png, webp } = singleDestination.images;

	return (
		<section className="mt-16 w-full">
			<PageBackground
				desktop={imgs.destination.desktop}
				tablet={imgs.destination.tablet}
				mobile={imgs.destination.mobile}
			/>
			<div>
				<PageCaption count={1} text="Pick your destination" />
			</div>
			<section className="destination-wrapper">
				<DestinationImage png={png} webp={webp} />
				<section>
					<DestinationTabs tabs={showNames()} showSingleDestination={showSingleDestination} />
					<DestinationContent
						name={singleDestination.name}
						description={singleDestination.description}
						travel={singleDestination.travel}
						distance={singleDestination.distance}
					/>
				</section>
			</section>
		</section>
	);
};

export default Destination;

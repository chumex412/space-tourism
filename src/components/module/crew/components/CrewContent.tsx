import { PageCaption } from '../../../ui';
import { CrewDetailsContainer, CrewImgContainer, CrewIndicatorList } from '../containers';

import '../styles/crew.css';

const CrewContent = () => {
	return (
		<section className="crew-content mt-12 grid">
			<PageCaption text="Meet your crew" count={2} />
			<section className="pb-6">
				<div className="flex flex-col-reverse text-center md:flex-col xl:text-left">
					<CrewDetailsContainer />
					<CrewIndicatorList />
				</div>
			</section>
			<CrewImgContainer />
		</section>
	);
};

export default CrewContent;

import { PageCaption } from '../../../ui';
import { CrewDetailsContainer, CrewImgContainer, CrewIndicatorList } from '../containers';

const CrewContent = () => {
	return (
		<section className="flex justify-between">
			<section>
				<PageCaption text="Meet your crew" count={2} />
				<CrewDetailsContainer />
				<CrewIndicatorList />
			</section>
			<CrewImgContainer />
		</section>
	);
};

export default CrewContent;

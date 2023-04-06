import { PageCaption } from '../../../ui';
import { TechImgContainer, TechIndicatorList } from '../containers';
import TechnDetailsContainer from '../containers/TechnDetailsContainer';

const TechnContent = () => {
	return (
		<>
			<PageCaption text="SPACE LAUNCH 101" count={3} />
			<section className="flex flex-col-reverse items-center justify-between gap-x-4 gap-y-14 xl:flex-row">
				<div className="flex basis-3/5 flex-col gap-y-11 gap-x-[10%] px-4 text-center xl:flex-row xl:px-0 xl:text-left">
					<TechIndicatorList />
					<TechnDetailsContainer />
				</div>
				<TechImgContainer />
			</section>
		</>
	);
};

export default TechnContent;

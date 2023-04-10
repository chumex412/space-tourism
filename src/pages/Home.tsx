import { getHeaderStyles } from '../application/usecase';
import { imgs } from '../assets';
import { PageBackground, HeaderGroup } from '../components/ui';

import '../styles/home.css';

const Home = () => {
	return (
		<main className="container block items-center lg:flex xl:items-end">
			<PageBackground desktop={imgs.home.desktop} mobile={imgs.home.mobile} tablet={imgs.home.tablet} />
			<section className="flex w-full flex-col items-center justify-between pt-16 pb-6 text-center xl:my-auto xl:flex-row xl:items-end xl:text-left">
				<HeaderGroup
					intro="SO, YOU WANT TO TRAVEL TO"
					lead="Space"
					text="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
					styles={getHeaderStyles()}
				/>
				<button className="pulse-btn mt-20 flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white md:mt-32 md:h-[242px] md:w-[242px] xl:mt-0 xl:h-[274px] xl:w-[274px]">
					<span className="font-bellefair text-[1.25rem] leading-[110%] md:text-[2rem]">Explore</span>
				</button>
			</section>
		</main>
	);
};

export default Home;

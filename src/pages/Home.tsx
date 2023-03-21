import React from 'react';
import { imgs } from '../assets';
import { PageBackground, HeaderGroup } from '../components/ui';

const Home = () => {
	return (
		<>
			<PageBackground desktop={imgs.home.desktop} mobile={imgs.home.mobile} tablet={imgs.home.tablet} />
			<section className="my-auto flex h-5/6 w-full flex-col items-center justify-between text-center lg:flex-row lg:items-end lg:text-left">
				<HeaderGroup
					intro="SO, YOU WANT TO TRAVEL TO"
					lead="Space"
					text="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
				/>
				<div className="flex h-[242px] w-[242px] items-center justify-center rounded-full bg-white lg:h-[274px] lg:w-[274px]">
					<h2 className="font-bellefair text-lg leading-[110%]">Explore</h2>
				</div>
			</section>
		</>
	);
};

export default Home;

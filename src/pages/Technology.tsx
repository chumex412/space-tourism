import { imgs } from '../assets';
import { TechnContent } from '../components/module';
import { PageBackground } from '../components/ui';
import '../styles/technology.css';

const Technology = () => {
	return (
		<main className="container mx-0 ml-0 px-0 pb-8 xl:ml-auto xl:pl-4">
			<section>
				<PageBackground desktop={imgs.tech.desktop} tablet={imgs.tech.tablet} mobile={imgs.tech.mobile} />
				<TechnContent />
			</section>
		</main>
	);
};

export default Technology;

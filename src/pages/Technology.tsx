import { imgs } from '../assets';
import { TechnContent } from '../components/module';
import { PageBackground } from '../components/ui';
import '../styles/technology.css';

const Technology = () => {
	return (
		<main className="container mx-0 ml-auto px-0 xl:pl-4">
			<section>
				<PageBackground desktop={imgs.tech.desktop} tablet={imgs.tech.tablet} mobile={imgs.tech.mobile} />
				<TechnContent />
			</section>
		</main>
	);
};

export default Technology;

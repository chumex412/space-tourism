import { BackgroundProps } from '../../../application/domain/entity/layout';

const PageBackground = ({ desktop, tablet, mobile }: BackgroundProps) => {
	return (
		<picture className="home-bg fixed top-0 left-0 block h-full w-full">
			<source media="(max-width: 375px)" srcSet={mobile} height="100vh" />
			<source media="(max-width: 767px)" srcSet={tablet} height="100vh" />
			<source media="(min-width: 768px)" srcSet={desktop} height="100vh" />
			<img src={desktop} alt="" />
		</picture>
	);
};

export default PageBackground;

import { PageCaptionPropType } from '../../../application/domain/entity/props';

const PageCaption = ({ text, count }: PageCaptionPropType) => {
	return (
		<header className="mb-14 py-3 text-center md:text-left">
			<h1 className="font-barlow-cond text-md font-normal uppercase leading-[120%] tracking-[4.725px] text-white">
				<span className="font-bold opacity-25 mix-blend-normal">0{count}</span> <span>{text}</span>
			</h1>
		</header>
	);
};

export default PageCaption;

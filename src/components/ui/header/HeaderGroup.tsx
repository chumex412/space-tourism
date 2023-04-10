import { PageHeader } from '../../../application/domain/entity/layout';

const HeaderGroup = ({ intro, lead, text, styles }: PageHeader) => {
	console.log(intro);

	return (
		<hgroup>
			<h2 className="flex flex-col">
				{intro && (
					<span className={`mb-6 font-normal uppercase ${styles.introStyle} leading-[120%] text-secondary`}>
						{intro}
					</span>
				)}
				<strong className={`mb-6 font-bellefair font-normal uppercase ${styles.leadStyle} leading-[115%] text-white`}>
					{lead}
				</strong>
			</h2>
			<p
				className={`w-full max-w-[444px] font-barlow text-base font-normal leading-[200%] text-secondary ${styles.textStyle}`}
			>
				{text}
			</p>
		</hgroup>
	);
};

export default HeaderGroup;

import { PageHeader } from '../../../application/domain/entity/layout';

const HeaderGroup = ({ intro, lead, text, pathname }: PageHeader) => {
	return (
		<hgroup>
			<h2 className="flex flex-col">
				{intro && (
					<span
						className={`mb-6 font-barlow-cond font-normal ${
							pathname === '/crew' ? 'text-lg' : pathname === '/technology' ? 'text-sm' : 'text-md'
						} leading-[120%] text-secondary`}
					>
						{intro}
					</span>
				)}
				<strong
					className={`mb-6 font-bellefair font-normal uppercase ${
						pathname === '/destination'
							? 'text-2xl'
							: pathname === '/crew' || pathname === '/technology'
							? 'text-xl'
							: 'text-3xl'
					} leading-[115%] text-white`}
				>
					{lead}
				</strong>
			</h2>
			<p
				className={`w-full max-w-[444px] font-barlow text-base font-normal leading-[200%] text-secondary ${
					pathname === '/destination' || pathname === '/crew' ? 'mx-auto xl:mx-0' : ''
				}`}
			>
				{text}
			</p>
		</hgroup>
	);
};

export default HeaderGroup;

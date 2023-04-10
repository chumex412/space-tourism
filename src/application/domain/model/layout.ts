import { HeaderStyles } from '../entity/layout';
import { TravelLogImageStyles } from '../entity/travel-log';

export const createHeaderStyles = (
	textClasses?: string,
	leadClasses?: string,
	introClasses?: string
): HeaderStyles => ({
	introStyle: introClasses ? introClasses : 'text-md font-barlow-cond text-secondary',
	leadStyle: leadClasses ? leadClasses : 'text-3xl',
	textStyle: textClasses ? textClasses : ''
});

export const createImgStyles = (names: string): TravelLogImageStyles => ({
	classNames: names ? names : ''
});

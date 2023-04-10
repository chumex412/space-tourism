import { createHeaderStyles } from '../domain/model/layout';

export const getHeaderStyles = (intro?: string, lead?: string, text?: string) => {
	return createHeaderStyles(text, lead, intro);
};

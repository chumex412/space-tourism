import React from 'react';

const showNavlinks = (updateView: React.Dispatch<React.SetStateAction<boolean>>) => {
	console.log('hi');

	updateView((prev: boolean) => !prev);
};

export { showNavlinks };

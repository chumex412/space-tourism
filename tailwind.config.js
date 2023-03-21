/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '375px',
				// => @media (min-width: 480px) { ... }

				sm: '480px',
				// => @media (min-width: 640px) { ... }

				md: '650px',
				// => @media (min-width: 768px) { ... }

				lg: '768px',
				// => @media (min-width: 1024px) { ... }

				xl: '992px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1140px',
				// => @media (min-width: 1536px) { ... }

				'3xl': '1210px'
			},
			colors: {
				primary: 'rgb(var(--primary-color) / 1)',
				secondary: 'rgb(var(--secondary-color) / 1)',
				white: 'rgb(var(--white-color) / 1)'
			},
			fontFamily: {
				bellefair: ['Bellefair', 'serif'],
				barlow: ['Barlow', 'sans-serif'],
				'barlow-cond': ['Barlow Condensed', 'sans-serif']
			},
			fontSize: {
				xs: 'var(--sm-text)',
				sm: 'var(--md-text)',
				base: 'var(--base-text)',
				md: 'var(--h5)',
				lg: 'var(--h4)',
				xl: 'var(--h3)',
				'2xl': 'var(--h2)',
				'3xl': 'var(--h1)'
			},
			lineHeight: {
				llh: 'var(--lg-lh)',
				slh: 'var(--sm-lh)'
			}
		}
	},
	plugins: []
};

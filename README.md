# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). I took on this challenge to improve my coding skills by building the project with TypeScript and React, and implementing clean architecture.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Home Desktop Screen](https://res.cloudinary.com/da8vqkdmt/image/upload/v1681196947/Screen_Shot_2023-04-11_at_07.33.19_yhg81g.png)
![Destination Desktop Screen](https://res.cloudinary.com/da8vqkdmt/image/upload/v1681196960/Screen_Shot_2023-04-11_at_07.47.00_evn7ba.png)
![Crew Desktop Screen](https://res.cloudinary.com/da8vqkdmt/image/upload/v1681196969/Screen_Shot_2023-04-11_at_07.33.26_k8u5ah.png)
![Destination Mobile Screen](https://res.cloudinary.com/da8vqkdmt/image/upload/c_scale,h_904/v1681196951/Screen_Shot_2023-04-11_at_08.01.30_owxtjr.png)

### Links

- Solution URL: [https://github.com/chumex412/space-tourism](https://github.com/chumex412/space-tourism)
- Live Site URL: [space-tourism-fem-ca.vercel.app](space-tourism-fem-ca.vercel.app)

## My process

I integrated CSS custom styles with Tailwind CSS. I studied how to implement the project with React using Clean architecture. I started by setting up the entities, models, and use cases as they relate to the business rules before implementing the
UI

### Built with

- CSS custom properties
- Mobile-first workflow
- [React](https://reactjs.dev/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [TypeScript](https://www.typescriptlang.org/) - For type checking
- [React Router DOM](https://reactrouter.com/) - For Navigation
- [Redux Toolkit](https://redux-toolkit.js.org/) - For state management

### What I learned

I learnt how to use React Router DOM to render a shared layout.

```js
<Route element={<PageLayout />}>
	<Route index element={<Home />} />
	<Route path="destination" element={<Destination />} />
	<Route path="crew" element={<Crew />} />
	<Route path="technology" element={<Technology />} />
</Route>
```

I also learnt how to implement clean architecture in a React app.

##### What is Clean Architecture?

Clean Architecture is a layered architectural pattern concerned with putting the business and business entities at the center of the software system and wrapping it with other layers. This help organizes the codebase around the business rules and not the framework. That goes without saying that the core of the application must be robust enough to meet the demands of the business without needing any external intervention.

![](https://raw.githubusercontent.com/eduardomoroni/react-clean-architecture/master/docs/images/high-level-diagram.jpg)

- Entities - are application independent business rules.
- Model - represent real-world object that is related to the problem.
- Usecase - are application-specific business rules that represent something the user wants to achieve.
- Controller/Adapter - contains framework specific behaviour that implements use cases. It also connects the use cases with the React container via a state management library (Redux toolkit in this case).
- Presenter - Maps data from/to Adapter to/from Components.
- Frameworks/Drivers - is the outermost layer that contains operations necessary for user input, http connection, reading from a web storage etc.

All of which I was able to implement in this challenge. The most crucial part was improving performance and preventing unnecessary rerenders while implementing this architectural pattern. It helped me understand that containers are essential to minimize unnecessary rerenders, by keeping unrelating components separate.

```js
const TechIndicatorList = () => {
	const { techCount, updateIndex, currentIndex, styleIndicator, renderIndicatorContent } = useTravelTechnology();
	return (
		<section className="flex justify-center gap-x-4 gap-y-8 xl:flex-col">
			{techCount.map((id, index) => {
				const activeBtn = currentIndex === index;
				return (
					<Indicator
						key={id}
						styleIndicator={styleIndicator(
							'flex h-10 w-10 items-center justify-center border border-white text-lg md:h-[60px] md:w-[60px] xl:h-20 xl:w-20',
							'bg-white text-primary',
							'bg-transparent mix-blend-normal text-white hover:opacity-100 opacity-50',
							activeBtn
						)}
						onclick={updateIndex}
						index={index}
						content={renderIndicatorContent(index + 1)}
					/>
				);
			})}
		</section>
	);
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I would like to liven the app abit with animations and transitions in the future.

### Useful resources

- [React Clean Architecture in Detail](https://reactjsexample.com/clean-architecture-for-react/) - This helped me understand how to implement clean architecture in React.
- [Comprehensive explanation of Clean architecture in React](https://github.com/eduardomoroni/react-clean-architecture) - This gave a comprehensive explanation.
- [Redux documentation](https://redux-toolkit.js.org/api/createSlice) - This helped me implement Redux with TypeScript.
- [TypeScript documentation for generic types](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions) - This helped me understand generic types and also how to use it with a React component.

## Author

- Frontend Mentor - [@chumex412](https://www.frontendmentor.io/profile/chumex412)
- Twitter - [@kode_navigator](https://www.twitter.com/kode_navigator)

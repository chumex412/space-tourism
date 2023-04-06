// Icons

import { ReactComponent as BrandLogo } from './shared/logo.svg';
import { ReactComponent as CloseIcon } from './shared/icon-close.svg';
import { ReactComponent as Hamburger } from './shared/icon-hamburger.svg';

// Images
import HomeDesktopBg from './home/background-home-desktop.jpg';
import HomeTabletBg from './home/background-home-tablet.jpg';
import HomeMobileBg from './home/background-home-mobile.jpg';
import DestinationDesktopBg from './destination/background-destination-desktop.jpg';
import DestinationTabletBg from './destination/background-destination-tablet.jpg';
import DestinationMobileBg from './destination/background-destination-mobile.jpg';

import CrewDesktopBg from './crew/background-crew-desktop.jpg';
import CrewTabletBg from './crew/background-crew-tablet.jpg';
import CrewMobileBg from './crew/background-crew-mobile.jpg';

import TechDesktopBg from './technology/background-technology-desktop.jpg';
import TechTabletBg from './technology/background-technology-tablet.jpg';
import TechMobileBg from './technology/background-technology-mobile.jpg';

export { BrandLogo, CloseIcon, Hamburger };

export const imgs = {
	home: {
		desktop: HomeDesktopBg,
		tablet: HomeTabletBg,
		mobile: HomeMobileBg
	},
	destination: {
		desktop: DestinationDesktopBg,
		tablet: DestinationTabletBg,
		mobile: DestinationMobileBg
	},
	crew: {
		desktop: CrewDesktopBg,
		tablet: CrewTabletBg,
		mobile: CrewMobileBg
	},
	tech: {
		desktop: TechDesktopBg,
		tablet: TechTabletBg,
		mobile: TechMobileBg
	}
};

import React, { FunctionComponent, useCallback } from 'react';
import BgMobileLight from '../assets/bg-mobile-light.jpg';
import BgMobileDark from '../assets/bg-mobile-dark.jpg';
import BgDesktopDark from '../assets/bg-desktop-dark.jpg';
import BgDesktopLight from '../assets/bg-desktop-light.jpg';
import LightMoon from '../assets/icon-moon.svg';
import SunDark from '../assets/icon-sun.svg';
import Image from 'next/image';
import { useTheme, useChangeTheme } from '../hooks/useTheme';

const Nav: FunctionComponent = () => {
	const theme = useTheme();
	const changeTheme = useChangeTheme();

	const renderChangeThemeButton = useCallback(() => {
		return (
			<button onClick={() => changeTheme()}>
				{theme === 'dark' ? (
					<Image src={SunDark} alt={''} />
				) : (
					<Image src={LightMoon} alt={''} />
				)}
			</button>
		);
	}, [theme]);

	return (
		<header className="z-0 w-[100vw] h-full">
			<nav className="z-0 w-full">
				<div className="absolute z-10 py-10 px-5 w-full flex justify-between items-center">
					<h1 className="tracking-[12.5px] text-2xl text-[#FFFFFF] font-semibold">
						TODO
					</h1>
					{renderChangeThemeButton()}
				</div>
				<div className="dark:hidden lg:hidden">
					<Image src={BgMobileLight} layout="responsive" />
				</div>
				<div className={'hidden dark:block dark:lg:hidden'}>
					<Image src={BgMobileDark} layout="responsive" />
				</div>
				<div className="hidden lg:block dark:hidden">
					<Image src={BgDesktopLight} layout="responsive" />
				</div>
				<div className={'hidden lg:dark:block'}>
					<Image src={BgDesktopDark} layout="responsive" />
				</div>
			</nav>
		</header>
	);
};

export default Nav;

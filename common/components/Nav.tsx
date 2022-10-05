import React, {FunctionComponent, useCallback, useEffect, useState} from "react";
import BgMobileLight from '../assets/bg-mobile-light.jpg';
import BgMobileDark from '../assets/bg-mobile-dark.jpg';
import LightMoon from '../assets/icon-moon.svg';
import SunDark from '../assets/icon-sun.svg';
import Image from "next/image";

type theme = 'light' | 'dark';
const Nav: FunctionComponent = () => {
  const [theme, setTheme] = useState<theme>('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setTheme('dark');
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light');
    }
  }, [theme])


  const renderButton = useCallback(() => {
    if (theme === 'dark') {
      return (
          <button onClick={() => setTheme('light')}>
            <Image src={SunDark} alt={""}/>
          </button>
      )
    }

    return (
        <button onClick={() => setTheme('dark')}>
          <Image src={LightMoon} alt={""}/>
        </button>
    )
  }, [theme])

  return (
      <header className="relative z-0 w-[100vw]">
        <div className="absolute z-0 w-full">
          <div className="dark:hidden">
            <Image src={BgMobileLight} layout="responsive"/>
          </div>
          <div className={"hidden dark:block"}>
            <Image src={BgMobileDark} layout="responsive"/>
          </div>
        </div>
        <nav className="absolute z-10 py-10 px-5 w-full flex justify-between items-center">
          <h1 className="tracking-[12.5px] text-2xl text-[#FFFFFF] font-semibold">TODO</h1>
          {renderButton()}
        </nav>
      </header>
  )
}

export default Nav;

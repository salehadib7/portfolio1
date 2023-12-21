"use client"

import { ThemeContext } from '@/app/context'
import Image from 'next/image';
import React, { useContext } from 'react'

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    };

  return (
    <div className="t">
      <Image src="/img/sun.png" width={500} height={500} alt="sun" className="t-icon" />
      <Image src="/img/moon.png" width={500} height={500} alt="moon" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}

export default Toggle
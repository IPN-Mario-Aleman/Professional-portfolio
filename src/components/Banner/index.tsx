import Image from 'next/image'
import style from './banner.module.scss'
import space from '@public/images/banner/spline2.png'
import spacewhite from '@public/images/banner/spline2-white.png'
import { useTheme } from '@src/context/ThemeContext'
import videoBg from '@public/video/forets.mp4'
import { useEffect, useState } from 'react'

const Banner = () => {
  const { theme } = useTheme()

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* <video autoPlay muted loop className={style.banner_img}>
          <source src='./video/ToTheMoon.mp4' type='video/mp4' />
        </video> */}
        {/* <div className={style.background} /> */}
        {/* <Sparkles /> */}
        <Image className={style.banner_img} src={theme === 'dark' ? space : spacewhite} height={1920} width={1080} alt='Space Banner' quality={100} priority />
      </div>
    </div>
  )
}
export default Banner

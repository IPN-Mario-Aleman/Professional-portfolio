import { NextJs, Vercel } from '@src/components/icons'
import Image from 'next/image'
import style from './carousel.module.scss'
import figma from '@public/icons/Extras/figma-2.png'
import react from '@public/icons/Extras/react.png'
import sass from '@public/icons/Extras/sass.png'
import ts from '@public/icons/Extras/ts.png'
import typescript from '@public/icons/Extras/type.png'
import vs from '@public/icons/Extras/vscode-logo.png'

const CarouselIcons = () => {
  return (
    <div className={style.slider}>
      <div className={`${style.slide_track} ${style.slider_animation}`}>
        <div className={`${style.slide} ${style.next}`}>
          <NextJs />
        </div>
        <div className={`${style.slide} ${style.vercel}`}>
          <Vercel />
        </div>
        <div className={`${style.slide} ${style.react}`}>
          <Image src={react} alt='react' width={200} height={100} quality={100} />
        </div>
        <div className={`${style.slide} ${style.typescript}`}>
          <Image src={ts} alt='react' width={200} height={100} quality={100} />
          <Image src={typescript} alt='react' width={200} height={100} quality={100} />
        </div>
        <div className={`${style.slide} ${style.figma}`}>
          <Image src={sass} alt='react' width={200} height={100} quality={100} />
        </div>
        <div className={`${style.slide} ${style.figma}`}>
          <Image src={figma} alt='react' width={200} height={100} quality={100} />

        </div>
        <div className={`${style.slide} ${style.vscode}`}>
          <Image src={vs} alt='react' width={200} height={100} quality={100} />
        </div>
      </div>
    </div>
  )
}
export default CarouselIcons

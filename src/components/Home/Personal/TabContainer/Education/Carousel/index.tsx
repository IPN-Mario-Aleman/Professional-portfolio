import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import img from '@public/images/certificates/frontend-introduction.png'
import Image from 'next/image'
import style from './styles.module.scss'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {slides.map((index) => (
            <div className={style.embla__slide} key={index}>
              <Image
                className={style.embla__slide__img}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '16/9'
                }}
                src={img}
                alt='certificate'
                height={1920}
                width={1080}
                quality={100}
              />
              <br />
              <h1 className='sm-text'>
                Instituto Politecnico Nacional
              </h1>
              <p>
                Start: Enero - 2017
              </p>
              <p>
                Finish: Enero - 2021
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel

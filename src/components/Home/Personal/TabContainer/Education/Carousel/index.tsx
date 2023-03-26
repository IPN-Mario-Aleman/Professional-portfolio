import { useBookStore } from '@src/store/bookStore'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import style from './styles.module.scss'

interface certifications {
  img: string,
  title?: string,
  description?: string,
  start?: string,
  end?: string
}

type PropType = {
  slides: certifications[]
  options?: EmblaOptionsType
}

const EmblaCarousel = ({ slides, options }: PropType) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
  // const [selectedId, setSelectedId] = useState<any>(null)
  const updatePopUp = useBookStore(state => state.updatePopUp)
  return (
    <>
      <div className={style.embla}>
        <div className={style.embla__viewport} ref={emblaRef}>
          <div className={style.embla__container}>
            {slides.map((data, index) => (
              <div className={style.embla__slide} key={index}>
                <motion.div layoutId={data.title} onClick={() => updatePopUp(true, data.img)}>
                  <Image
                    className={style.embla__slide__img}
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16/9'
                    }}
                    src={data.img}
                    alt='certificate'
                    height={1920}
                    width={1080}
                    quality={100}
                  />
                </motion.div>
                <br />
                <h1 className='sm-text'>
                  {data.title}
                </h1>
                <p>
                  {data.description}
                </p>
                <p>
                  Start: {data.start}
                </p>
                <p>
                  Finish: {data.end}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EmblaCarousel

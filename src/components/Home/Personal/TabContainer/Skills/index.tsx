import EmblaCarousel from './Carousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import style from './styles.module.scss'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Skills = () => {
  return (
    <section className={style.sandbox__carousel}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  )
}
export default Skills

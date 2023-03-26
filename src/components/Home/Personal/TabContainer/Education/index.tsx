import EmblaCarousel from './Carousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import style from './styles.module.scss'

const OPTIONS: EmblaOptionsType = { loop: true }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const certifications = [
  {
    img: '/images/certificates/js-fullstack.png',
    title: 'Instituto Politécnico Nacional',
    description: 'Ingeniero en Informática',
    start: 'Enero - 2017',
    end: 'Enero - 2021'
  },
  {
    img: '/images/certificates/js-fullstack.png',
    title: 'Full Stack JavaScript Developer',
    description: 'Udemy certification',
    start: '',
    end: '12 de marzo - 2021'
  },
  {
    img: '/images/certificates/python.png',
    title: 'Math Basics',
    description: 'Huawei certification',
    start: '',
    end: '29 de octubre - 2022'
  },
  {
    img: '/images/certificates/math-basic.png',
    title: 'Python Programming Basic',
    description: 'Huawei certification',
    start: '',
    end: '28 de diciembre - 2022'
  },
  {
    img: '/images/certificates/frontend-introduction.png',
    title: 'Introduction to Front-End Development',
    description: 'Meta certification',
    start: '',
    end: '22 de enero - 2023'
  },
  {
    img: '/images/certificates/control-version.png',
    title: 'Programming with JavaScript',
    description: 'Meta certification',
    start: '',
    end: '30 de enero - 2023'
  },
  {
    img: '/images/certificates/control-version.png',
    title: 'Version Control',
    description: 'Meta certification',
    start: '',
    end: '4 de febrero - 2023'
  },
  {
    img: '/images/certificates/html-css.png',
    title: 'HTML and CSS in depth',
    description: 'Meta certification',
    start: '',
    end: '11 de febrero - 2023'
  },
  {
    img: '/images/certificates/control-version.png',
    title: 'React Basics',
    description: 'Meta certification',
    start: '',
    end: '18 de febrero - 2023'
  },
  {
    img: '/images/certificates/control-version.png',
    title: 'Advanced React',
    description: 'Meta certification',
    start: '',
    end: '24 de febrero - 2023'
  }
]

const Skills = () => {
  return (
    <section className={style.sandbox__carousel}>
      <EmblaCarousel slides={certifications} options={OPTIONS} />
    </section>
  )
}
export default Skills

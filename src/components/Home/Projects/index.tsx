import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image.js'
import { useCallback, useEffect, useState } from 'react'
import style from './projects.module.scss'

const banners = [
  {
    id: 0,
    images: '/images/projects/proyect1.png',
    alt: 'Buzzy project',
    background: '#020302',
    titulo: 'Buzzy',
    repo: 'https://github.com/IPN-Mario-Aleman/buzzy_dp',
    subtitulo: 'Proyecto de la universidad',
    descipcion: 'Fue un proyecto FullStack con arquitectura monolitica, utilizando express como Backend y siguiendo el patron de diseño MVC (Model, View, Controller); por otra parte el desarrollo del Frontend fue realizado con HTML5 (Pug), CSS3, JavaScript con JQuery.',
    link: ''
  },
  {
    id: 1,
    images: '/images/projects/proyect1.png',
    alt: 'Buzzy project',
    background: '#020302',
    titulo: 'Buzzy',
    repo: 'https://github.com/IPN-Mario-Aleman/buzzy_dp',
    subtitulo: 'Proyecto de la universidad',
    descipcion: 'Fue un proyecto FullStack con arquitectura monolitica, utilizando express como Backend y siguiendo el patron de diseño MVC (Model, View, Controller); por otra parte el desarrollo del Frontend fue realizado con HTML5 (Pug), CSS3, JavaScript con JQuery.',
    link: ''
  },
  {
    id: 2,
    images: '/images/projects/giffy_project.png',
    alt: 'Giffy project',
    background: '#020302',
    titulo: 'Giffy',
    repo: 'https://github.com/IPN-Mario-Aleman/React-with-MiduDev',
    subtitulo: 'Curso de React JS',
    descipcion: 'Principios basicos de react, con create-react-app; con conceptos como: uso de hooks basicos (useState, useEffect, useRef, etc), manejo de CEO, Consumo de la API de Giphy y deploy con vercel.',
    link: 'https://giffy-two-indol.vercel.app',
    preview: 'Giffy preview'
  },
  {
    id: 3,
    images: '/images/projects/sample_portfolio.png',
    alt: 'Portfolio Meta',
    background: '#020302',
    control: 'control_banner',
    titulo: 'Portfolio',
    subtitulo: 'Ejemplo de portfolio curso Meta',
    descipcion: 'Pequeño portfolio basado del curso de React de Meta, donde se pusieron en practica los conocimientos de validaciones de formularios, desarrollo responsive, HOC (High order component), etc.',
    link: ''
  },
  {
    id: 4,
    images: '/images/projects/simple_calculator.png',
    alt: 'Calculator',
    background: '#020302',
    control: 'control_banner',
    titulo: 'Calculadora',
    subtitulo: 'Calculadora del curso Meta',
    descipcion: 'Esta calculadora realiza operaciones muy básicas como suma, resta, división y multiplicación utilizando los hooks de React.',
    link: ''
  }
]

const Projects = () => {
  const [active, setActive] = useState<any>({
    activeObject: null,
    objects: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ]
  })

  function toggleActive (index: number) {
    setActive({ ...active, activeObject: active.objects[index] })
  }

  function toggleActiveStyle (index: number) {
    if (active.objects[index] === active.activeObject) {
      return `${style.slider} ${style.slider_active}`
    } else {
      return `${style.slider} ${style.slider_inactive}`
    }
  }

  function toogleActiveControlStyle (index: number) {
    if (active.objects[index] === active.activeObject) {
      return `${style.item} ${style.control_banner_active}`
    } else {
      return `${style.item} ${style.control_banner_inactive}`
    }
  }

  function toogleActiveControlDrag (index: number) {
    if (active.objects[index] === active.activeObject) {
      return `${style.hero__slide} ${style.control_banner_active}`
    } else {
      return `${style.hero__slide} ${style.control_banner_inactive}`
    }
  }

  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [buttons, setButtons] = useState(0)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
    toggleActive(embla.selectedScrollSnap())
    setButtons(embla.selectedScrollSnap())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    onSelect()
  }, [embla, onSelect])

  const heroControls = (index: number) => {
    if (index === 4 && buttons === 0) {
      setButtons(index)
      scrollPrev()
      toggleActive(index)
    }

    if (index === 0 && buttons === 4) {
      setButtons(index)
      scrollNext()
      toggleActive(index)
    }

    if (buttons - 1 === index) {
      setButtons(index)
      scrollPrev()
      toggleActive(index)
    }

    if (buttons + 1 === index) {
      setButtons(index)
      scrollNext()
      toggleActive(index)
    }
  }

  return (
    <>
      <section className={style.projects_section}>
        <div className={style.slider_images}>
          {banners.map((element, index) => (
            <div key={element.id} className={active.activeObject === null && index === 0 ? `${style.slider} ${style.active}` : toggleActiveStyle(index)}>
              <div className={`${style.project_view} container`}>
                <motion.div
                  className={style.text}
                  initial={{ opacity: 0, top: -20 }}
                  whileInView={{ opacity: 1, top: 0 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: false }}
                >
                  <h1 className={`${style.title_slider} bg-text`}>
                    {element.titulo}
                  </h1>
                  <h2>
                    {element.subtitulo}
                  </h2>
                  <p className={style.description_slider}>
                    {element.descipcion}
                  </p>
                  <button role='button' className={style.btn_proj}>
                    <a href={element.repo} className={style.btn_text}>
                      Ver mas
                    </a>
                  </button>
                </motion.div>
                <motion.div
                  className={style.slider_img_container}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: false }}
                >
                  <div className={style.screen}>
                    <div
                      className={style.screen_image}
                      style={{
                        backgroundImage: `url(${element.images})`
                      }}
                    />
                    <div className={style.screen_overlay} />
                    <div className={style.screen_content}>
                      <i className={`${style.screen_icon} ${style.fa_brands} ${style.fa_codepen}`} />
                      <div className={style.screen_user}>
                        <span className={style.name} data-value='CODEPEN'>{element.titulo}</span>
                        {
                          element.link?.length > 0 &&
                            <a className={style.link} href={element.link} target='_blank'>{element.preview}</a>
                        }
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* controlers for desktop */}
        <motion.div className='container'>
          <motion.div className={style.controls_desktop}>
            {banners.map((element, index) => (
              <motion.div role='button' className={active.activeObject === null && index === 0 ? `${style.item} ${style.control_banner_active}` : toogleActiveControlStyle(index)} onClick={() => { toggleActive(index) }} key={element.id}>
                <figure>
                  <div className={style.container_controler_img}>
                    <Image
                      src={element.images}
                      className={style.desktop_control_img}
                      width={1080}
                      height={1920}
                      alt={element.alt}
                    />
                  </div>
                  <figcaption className={style.title_control}>
                    {element.titulo}
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* controlers for mobile device */}
        <div className={style.carousel__container}>
          <div className={style.hero__carousel__viewport} ref={viewportRef}>
            <div className={style.hero__carousel__container}>
              {banners.map((element, index) => (
                <div onClick={() => { heroControls(index) }} className={active.activeObject === null && index === 0 ? `${style.hero__slide} ${style.control_banner_active}` : toogleActiveControlDrag(index)} key={index}>
                  <div className={style.hero__slide__inner}>
                    <Image
                      className={style.hero__slide__img}
                      width={1080}
                      height={1920}
                      src={element.images}
                      alt={element.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects

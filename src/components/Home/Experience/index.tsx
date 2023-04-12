import useEmblaCarousel from 'embla-carousel-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import Works from './TabContainer/Work'
import { initialTabs as tabs } from './Tabs/tabs'
import style from './exp.module.scss'

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  /* drag slider */
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps' })
  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [emblaApi, setScrollProgress])

  useEffect(() => {
    if (!emblaApi) return
    onScroll()
    emblaApi.on('scroll', onScroll)
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <>
      <hr />
      <section className={`${style.exp} container`}>
        <h1 className='bg-text' style={{ textAlign: 'center' }}>
          Experience
        </h1>
        <div className={style.embla}>
          <div className={style.embla__viewport} ref={emblaRef} style={{ marginBottom: 'var(--space-7)' }}>
            <div className={style.embla__container}>
              {tabs.map((item, index) => (
                <div key={item.title} className={`${style.embla__slide} ${item === selectedTab ? 'selected' : ''}`}>
                  <div className={style.timestamp}><span className={style.date}>{`${item.title}`}</span></div>
                  <div className={style.status}><span style={{ cursor: 'pointer' }} onClick={() => setSelectedTab(item)}>{`${item.year} `}</span></div>
                  {item === selectedTab
                    ? (
                      <motion.div className='underline' layoutId='underline' />
                      )
                    : null}
                </div>
              ))}
            </div>
            <div className={style.swiper__pagination} />
          </div>
          <div className={style.embla__progress}>
            <div
              className={style.embla__progress__bar}
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </div>
        </div>
      </section>
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab ? selectedTab.description : 'empty'}
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Works
            selectedTab={selectedTab}
          />
        </motion.div>
      </AnimatePresence>
      <hr />
    </>
  )
}
export default Experience

import style from './exp.module.scss'

const Experience = () => {
  return (
    <section className='container'>
      <h1>
        Experience
      </h1>
      <section className={style.time__line__box}>
        <div className={`${style.swiper__container} ${style.text__center}`}>
          <div className={style.swiper__wrapper}>
            <div className={style.swiper__slide}>
              <div className={style.timestamp}><span className={style.date}>12.07.2019</span></div>
              <div className={style.status}><span>Work</span></div>
            </div>
            <div className={style.swiper__slide}>
              <div className={style.timestamp}><span className={style.date}>12.07.2019</span></div>
              <div className={style.status}><span>Work</span></div>
            </div>
            <div className={style.swiper__slide}>
              <div className={style.timestamp}><span className={style.date}>12.07.2019</span></div>
              <div className={style.status}><span>Work</span></div>
            </div>
            <div className={style.swiper__slide}>
              <div className={style.timestamp}><span className={style.date}>12.07.2019</span></div>
              <div className={style.status}><span>Work</span></div>
            </div>
            <div className={style.swiper__slide}>
              <div className={style.timestamp}><span className={style.date}>12.07.2019</span></div>
              <div className={style.status}><span>Work</span></div>
            </div>
          </div>
          <div className={style.swiper__pagination} />
        </div>
      </section>
    </section>
  )
}
export default Experience

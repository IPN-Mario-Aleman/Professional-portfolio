/* intersection observer hook */
// motion
import { motion } from 'framer-motion'
// Animation
// Count Up

import style from './style.module.scss'

const allJobs = [
  { start: 'Enero - ', finish: 'Agosto - 2022', year: '2022', img: 'ads', title: 'Erona', description: 'Despliegue y mantenimiento de los sitios web con React, React redux, Next, conexiones api con el backend existente, etc.', job: 'Junior' },
  { start: 'Septiembre - 2022', finish: 'Actual', year: '2023', img: 'ads', title: 'Invercratos', description: 'Desarrollo y despliegue de las aplicaciones web de la empresa, testing unitario y e2e, implementación de marcos de referencia, trabajo colaborativo con el equipo de UI/UX.', job: 'Semi Senior' }
]

const Work = () => {
  return (
    <section className={style.wrapp_works}>
      <div className={`container ${style.wrapper}`}>
        <motion.div
          className={style.research} initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className={style.blob_1} />
          <div className={style.blob_2} />
          <h1 className={`xbg-text ${style.gradient}`} style={{ textAlign: 'center' }}>
            Experience working
          </h1>
          <div className={style.text_exp}>
            <div className={style.box}>
              2
              <p>
                Años de
                experiencia
              </p>
            </div>
            <div className={style.box}>
              2
              <p>
                Empresas
              </p>
            </div>
            <div className={style.box}>
              15
              +
              <p>
                Proyectos
              </p>
            </div>
          </div>
        </motion.div>
        {/* all works */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className={style.works}
        >
          <h2 className={`xsm-text ${style.subtitle}`} style={{ marginBottom: 'var(--space-7)' }}>
            He trabajado en la industria financiera por mas de 1 año, y un total de 2+ año en el area del desarrollo web, me he enfocado en React con Next.js, JavaScript y TypeScript.
          </h2>
          {
            allJobs.map((data, index) => {
              return (
                <div className={style.jobs_box} key={data.title}>
                  <div className={style.places}>
                    <span className={style.number}>
                      {index + 1}
                    </span>
                  </div>
                  <div className={style.info_wrapp}>
                    <div className={style.head}>
                      <h3 className='xsm-text'>
                        {data.title}
                      </h3>
                      <p className={style.date}>
                        {`${data.start} ${data.finish}`}
                      </p>
                    </div>
                    <p>{data.job}</p>
                    <p className={style.description}>
                      {data.description}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}
export default Work

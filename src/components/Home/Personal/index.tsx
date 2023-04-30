import { motion } from 'framer-motion'
import Nav from './Tabs'
import style from './personal.module.scss'
import { matrixLetter } from '@src/utils/letter-transition'

const Personal = () => {
  return (
    <section className='container' id='personal'>
      <motion.h1
        className={style.title + ' ' + 'xbg-text'}
        data-value='INFORMACION PERSONAL'
        onViewportEnter={(e) => matrixLetter(e)}
      >
        INFORMACIÓN PERSONAL
      </motion.h1>

      <div className={style.info_personal}>
        <div className={style.wrapper_container}>
          <div className={style.slider}>
            <div className={style.paper_back} />
            <div className={style.paper_back2} />
            <div>
              <Nav />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
export default Personal

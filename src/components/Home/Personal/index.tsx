import { motion } from 'framer-motion'
import Nav from './Tabs'
import style from './personal.module.scss'

const Personal = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const matrixLetter = (e:any) => {
    let iterations = 0
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText.split('')
        .map((letter: any, index: number) => {
          if (index < iterations) {
            return e.target.dataset.value[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')
      if (iterations >= e.target.dataset.value.length) clearInterval(interval)
      iterations += 1 / 3
    }, 30)
  }
  return (
    <section className='container' id='personal'>
      <motion.h1
        className={style.title + ' ' + 'md-text'}
        data-value='INFORMACION PERSONAL'
        onMouseOver={(e) => matrixLetter(e)}
      >
        INFORMACION PERSONAL
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

import { Star } from '@src/components/icons'
import style from './tab_content.module.scss'
import { initialTabs as tabs } from '../Tabs/tabs'
import { motion } from 'framer-motion'

export interface Tabs {
    icon: string;
    label: string;
}

type TabControls = {
    selectedTab: {}
    setSelectedTab: ({ icon, label }: Tabs) => void
}

const AboutMe = ({ selectedTab, setSelectedTab }: TabControls) => {
  console.log(selectedTab, setSelectedTab)
  return (
    <div className={style.letter}>
      <div className={style.content}>
        <div className={style.description}>
          Hola mi nombre es Mario Alemán, soy desarrollador Frontend, me gustan los videojuegos y la programacion.
          Experiencia en JavaScript, TypeScript, Python.
        </div>
        <div className={style.info_personal}>
          <ul>
            <li className={style.list}>
              Me apaciona aprender nuevas herramientas o tecnoglogias.
            </li>
            <li className={style.list}>
              Interesado en aprender Inteligencia Artificial relacionado al DL/ML.
            </li>
            <li className={style.list}>
              Fui Platino V en LoL.
            </li>
            <li className={style.list}>
              Me gusta cualquier tipo de música pero no las fiestas.
            </li>
            <li className={style.list}>
              Practiaba karate y boxeo pero no dure mas de 1 mes.
            </li>
            <li className={style.list}>
              03/07/1997 | Veracruz, México
            </li>
          </ul>
        </div>

        <div className={style.language}>
          <h1 className='sm-text'>
            Lenguajes:
          </h1>

          Español nativo

          <div className={style.english}>
            Inglés
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {tabs.map((item) => (
            <motion.button
              key={item.label}
              className={`${style.btn_control} ${item === selectedTab ? style.selected : ''}`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-arrow-bar-to-right' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M14 12l-10 0' />
                <path d='M14 12l-4 4' />
                <path d='M14 12l-4 -4' />
                <path d='M20 4l0 16' />
              </svg>
            </motion.button>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default AboutMe

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
  return (
    <div className={style.letter}>
      <div className={style.content}>
        <div className={style.description}>
          <p>
            Hola mi nombre es Mario Alemán, soy desarrollador Frontend, me gustan los videojuegos y la programacion.
            Experiencia en JavaScript, TypeScript y Python.
          </p>
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
              Fui Platino V en LoL (Yo carreo 🙂👍).
            </li>
            <li className={style.list}>
              Me gusta cualquier tipo de música pero no las fiestas.
            </li>
            <li className={style.list}>
              Practiaba karate y boxeo.
            </li>
            <li className={style.list}>
              Tengo certificado de primeros auxilios (Podría salvarte la vida 🙂👍).
            </li>
            <li className={style.list}>
              03/07/1997 | Veracruz, México
            </li>
          </ul>
        </div>

        <div className={style.language}>
          <h2 className={`sm-text ${style.subtitle}`}>
            Idiomas:
          </h2>
          <p>
            Español (nativo)
          </p>
          <div className={style.english}>
            <p>
              Inglés
            </p>
            <Star color />
            <Star color />
            <Star color />
            <Star color={false} />
            <Star color={false} />
          </div>
        </div>
      </div>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {tabs.map((item) => (
            <motion.div
              className={`${style.btn_control} ${item === selectedTab ? style.selected : ''}`}
              onClick={() => setSelectedTab(item)}
              key={item.label}
            >
              <p>Next</p>
              <svg
                xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 6l6 6l-6 6' />
              </svg>
            </motion.div>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default AboutMe

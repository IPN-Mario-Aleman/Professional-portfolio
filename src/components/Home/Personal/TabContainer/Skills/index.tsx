import style from './education.module.scss'
import { NextJs, Css3, JavaScript, React, TypeScript, Vite, VsCode } from '@src/components/icons'
import { GitHub, HTML5 } from '@src/components/icons/IconsSkills'

const skills = [
  {
    percentage: '90%',
    name: 'HTML5',
    icon: <HTML5 />
  },
  {
    percentage: '85%',
    name: 'Css3',
    icon: <Css3 />
  },
  {
    percentage: '80%',
    name: 'JavaScript',
    icon: <JavaScript />
  },
  {
    percentage: '50%',
    name: 'TypeScript',
    icon: <TypeScript />
  },
  {
    percentage: '80%',
    name: 'React',
    icon: <React />
  },
  {
    percentage: '70%',
    name: 'Next JS',
    icon: <NextJs />
  },
  {
    percentage: '60%',
    name: 'Vite',
    icon: <Vite />
  },
  {
    percentage: '80%',
    name: 'GitHub',
    icon: <GitHub />
  },
  {
    percentage: '90%',
    name: 'Vs Code',
    icon: <VsCode />
  }
]

const Education = () => {
  return (
    <div className={style.container}>
      <div className={style.data}>
        {
          skills.map((i) => {
            return (
              <div className={style.skill} key={i.name}>
                <div className={style.icon}>
                  {i.icon}
                </div>
                <span className={style.title}>
                  {i.name}
                </span>
                <div className={style.skillbar}>
                  <span className={style.skillper} style={{ width: `${i.percentage}`, animationDelay: '0.1s' }}>
                    <span className={style.tooltip}>
                      {i.percentage}
                    </span>
                  </span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Education

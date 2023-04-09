import style from './skills.module.scss'
import { NextJs, Css3, JavaScript, React, TypeScript, Vite, VsCode } from '@src/components/icons'
import { GitHub, HTML5 } from '@src/components/icons/IconsSkills'

const skillsInfo = [
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

const Skills = () => {
  return (
    <section className='container'>
      <div className={style.skill_wrapper}>
        {
          skillsInfo.map((data, idx) => {
            return (
              <div className={style.skill_card} key={idx}>
                <div className={style.header}>
                  <h1 className='xsm-text'>
                    {data.name}
                  </h1>
                </div>
                <div className={style.icons}>
                  {
                    data.icon
                  }
                </div>
                <div role='button' className={style.footer}>
                  <p>Ver detalle</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
export default Skills

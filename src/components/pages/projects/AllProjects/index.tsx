import React from 'react'
import style from './style.module.scss'
import Search from './Search'

const Projects = () => {
  const handleOnMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    for (const card of (document.getElementsByClassName('card-effect') as HTMLCollectionOf<HTMLElement>)) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
      console.log(x, y)
    };
  }

  console.log(handleOnMouse)
  return (
    <section className='container'>
      <div className={style.wrapper}>
        <div className={style.filter_wrapp}>
          <div className={style.sticky}>
            <h1>Filtrar proyectos</h1>
            <Search />
          </div>
        </div>
        <div className={style.projects} onMouseMove={(e) => handleOnMouse(e)}>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
          <div className={`card-effect ${style.card}`}>
            <div className={style.content} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects

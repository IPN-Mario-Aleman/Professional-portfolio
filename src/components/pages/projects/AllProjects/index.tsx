import searchAnimation from '@public/animations/98877-search.json'
import { DataType } from '@src/models/filterProjects'
import Lottie from 'lottie-react'
import Image from 'next/image'
import Search from './Search'
import style from './style.module.scss'
import { useFilterProjects } from '@src/hooks/useFilters'

const styles = {
  height: '45%',
  color: 'black'
}

const Projects = ({ projects }: DataType) => {
  const { filters } = useFilterProjects()
  const handleOnMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    for (const card of (document.getElementsByClassName('card-effect') as HTMLCollectionOf<HTMLElement>)) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    };
  }
  return (
    <section className='container'>
      <div className={style.wrapper}>
        <div className={style.filter_wrapp}>
          <div className={style.sticky}>
            <h1>Filtrar proyectos</h1>
            <Search />
          </div>
        </div>
        {
          projects.length < 1
            ? (
              <div className={style.no_projects}>
                <Lottie
                  animationData={searchAnimation}
                  style={styles}
                />
                <p className={`sm-text ${style.search_no_found}`}>
                  No search result found for '{filters.name}'. Try adjusting your filters.
                </p>
              </div>
              )
            : (
              <div className={style.projects} onMouseMove={(e) => handleOnMouse(e)}>
                {
                  projects.map((data) => {
                    return (
                      <div className={`card-effect ${style.card}`} key={data.id}>
                        <div className={style.content}>
                          <div className={style.card_image}>
                            {/* <i class='fa-duotone fa-apartment' /> */}
                            <Image src={data.images} alt={data.alt} height={200} width={300} className={style.img_project} />
                          </div>
                          <div className={style.card_info_wrapper}>
                            <div className={style.card_info}>
                              {/* <i className={style.fa-d_otone fa-apartment' /> */}
                              <div className={style.card_info_title}>
                                <h2 className='xsm-text bold'>
                                  {data.name}
                                </h2>
                              </div>
                              <div className={style.card_description}>
                                {data.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              )
          }
      </div>
    </section>
  )
}
export default Projects

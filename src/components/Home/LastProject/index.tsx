import last from '@public/images/projects/proyect1.png'
import style from './styles.module.scss'
import Image from 'next/image'

const LastProject = () => {
  return (
    <section className='container'>
      <h2 className={`bg-text ${style.title}`}>Titulo <span className={`md-text ${style.sub_title}`}>titulos mas pequeños y un poco mas grises</span></h2>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.tag_wrapper}>
            <span className={style.tags}>Next.js</span>
            <span className={style.tags}>React</span>
            <span className={style.tags}>Zustand</span>
            <span className={style.tags}>TypeScript</span>
            <span className={style.tags}>SASS</span>
            <span className={style.tags}>Framer Motion</span>
          </div>
          <div className={style.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos optio, obcaecati possimus eligendi earum et necessitatibus a? Molestiae tempore nobis necessitatibus ducimus ratione reiciendis cupiditate inventore officia? Et, sequi!</p>
          </div>
          <button>Ver mas</button>
        </div>
        <div className={style.img_content}>
          <Image className={style.img} src={last} alt='Last project' width={750} height={450} quality={100} />
        </div>
      </div>
    </section>
  )
}
export default LastProject

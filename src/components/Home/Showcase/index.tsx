import Image from 'next/image'
import style from './showcase.module.scss'

const Showcase = () => {
  return (
    <section className={style.sc_container}>
      <h1 className={`${style.title} xbg-text`}>Project Showcase</h1>
      <div className={style.grid_wrapper}>
        <div>
          <Image src='/images/projects/giffy_project.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div className={style.big}>
          <Image src='/images/projects/proyect1.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div className={style.tall}>
          <Image src='/images/projects/sample_portfolio.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div className={style.tall}>
          <Image src='/images/projects/sample_portfolio.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div>
          <Image src='/images/projects/simple_calculator.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div>
          <Image src='/images/projects/giffy_project.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div>
          <Image src='/images/projects/proyect1.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div className={style.tall}>
          <Image src='/images/projects/sample_portfolio.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div className={style.tall}>
          <Image src='/images/projects/sample_portfolio.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
        <div>
          <Image src='/images/projects/simple_calculator.png' alt='Masonry showcase project' quality={100} width={450} height={350} />
          <div className={style.btn_wr}>
            <a href={style.link}>Giffy</a>
          </div>
        </div>
      </div>
      <div>
        <h1 className={style.subtitle}>There are many projects building with React, JavaScript and TypeScript, with a famous frameworks like Next.js and Vite.</h1>
        <button>
          View all Showcase
        </button>
      </div>
    </section>
  )
}
export default Showcase

import { Discord, GitHub, Linkedin } from '@src/components/icons'
import style from './footer.module.scss'

const iconsMedia = [
  {
    url: 'facebook.com',
    icon: <GitHub />,
    id: 1
  },
  {
    url: 'instagram.com',
    icon: <Discord />,
    id: 2
  },
  {
    url: 'youtube.com',
    icon: <Linkedin />,
    id: 3
  }
]

export async function getStaticProps () {
  const version = new Date()
  const day = version.getDay()
  const month = version.getMonth()
  const year = version.getFullYear()

  return {
    props: { day, month, year } // will be passed to the page component as props
  }
}

interface version {
  day?: number
  month?: string;
  year?: number;
}

const Footer = ({ day, month, year }: version) => {
  return (
    <footer className={style.footer}>
      <div className={'container' + ' ' + style.wrapper}>
        <h1 className={`bg-text bold ${style.title_footer}`}> Portfolio <span>✦</span> Mario Alemán</h1>
        <div className={style.icons}>
          {
            iconsMedia.map(item => {
              return (
                <div key={item.id}>
                  <a href={item.url}>
                    {item.icon}
                  </a>
                </div>
              )
            })
          }
        </div>
        <p className={style.last_update}>
          Última actualización: {day} de {month} de {year}
        </p>
      </div>
    </footer>
  )
}
export default Footer

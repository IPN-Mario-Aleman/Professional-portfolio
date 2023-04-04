import { Discord, GitHub, Linkedin } from '@src/components/icons'
import style from './footer.module.scss'
// import logo from '../../../../../../images/GENERAL/ZAKI_Logo_Blanco.svg'

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

const Footer = () => {
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
          Última actualización: 03 de abril de 2023
        </p>
      </div>
    </footer>
  )
}
export default Footer

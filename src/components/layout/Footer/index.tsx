import Link from 'next/link'
import style from './footer.module.scss'
// import logo from '../../../../../../images/GENERAL/ZAKI_Logo_Blanco.svg'

const sociales = [
  {
    url: 'facebook.com',
    name: 'Facebook',
    src: ''
  },
  {
    url: 'instagram.com',
    name: 'Instagram',
    src: ''
  },
  {
    url: 'youtube.com',
    name: 'Youtube',
    src: ''
  }
]

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={'container' + ' ' + style.wrapper}>
        <div className={style.info_footer}>
          <div className={style.legend}>
            <Link href='/'>
              {/* <img className={style.logo} src={logo} alt='logo' /> */}
            </Link>
            <p className={'white' + ' ' + style.text}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-orless normal distribution of letters, as opposed href using 'Content here, content here', making it look like readable English. Many deskhrefp publishing packages and web page edihrefrs now use.</p>
          </div>
          <div className={style.legales}>
            <h1 className={'bg-text bold white' + ' ' + style.title}>Legales</h1>
            <ul className={style.legales}>
              <li><Link href='/'>Aviso de Privacidad</Link></li>
              <li><Link href='/'>Términos y Condiciones</Link></li>
              <li><Link href='/'>Tabla de Comisiones</Link></li>
              <li><Link href='/'>UNE/Condusef</Link></li>
              <li><Link href='/'>Información Financiera</Link></li>
            </ul>
          </div>
        </div>
        <div className={style.container_copy}>
          <p className={style.copy}> {new Date().getFullYear()} &copy; Copyright. todos los derechos reservados.</p>
          <div className={style.socials}>
            {sociales.map((link) => {
              return (
                <a href={link.url} key={link.name}>{link.name}</a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer

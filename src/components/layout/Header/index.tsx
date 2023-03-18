import useScrollDirection from '@hooks/useScrollDirection'
import DeviceDesktop from '@src/components/icons/DeviceDesktop'
import { Discord, GitHub, Linkedin } from '@src/components/icons/'
import MoonStars from '@src/components/icons/MoonStars'
import SunHigh from '@src/components/icons/SunHigh'
import { useI18N } from '@src/context/i18n'
import { useTheme } from '@src/context/ThemeContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import style from './header.module.scss'
import { t } from '@src/models/i18n'
// import hamburger from '../../../../../../images/GENERAL/BURGUER.svg'
// import logo from '../../../../../../images/GENERAL/ZAKI_LOGO_GRIS.svg'
// import close from '../../../../../../images/GENERAL/Cerrar.svg'

interface drawerProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Overlay = ({ setIsOpen, isOpen }: drawerProps) => {
  const closeDrawer = () => {
    setIsOpen(false)
    // Enable Scrolling when Drawer/Modal is closed
    document.body.style.overflow = 'inherit'
  }
  return (
    <div
      onClick={closeDrawer}
      className={style.overlay + ' ' + ` ${isOpen ? style.open : ''}`}
    />
  )
}

const Drawer = ({ isOpen, setIsOpen }: drawerProps) => {
  const closeDrawer = () => {
    setIsOpen(false)
    // Enable Scrolling when Drawer/Modal is closed
    document.body.style.overflow = 'inherit'
  }
  return (
    <div
      className={style.drawer + ' ' + `${isOpen ? style.open : ''}`}
    >
      {/* <Image className={style.close_btn} src={close} alt='Close button' onClick={closeDrawer} /> */}
      <nav className={style.nav_drw}>
        <ul className={style.links_drw}>
          <li><Link className='bold' href='/'>Inicio</Link></li>
          <li><Link className='bold' href='/#quees'>¿Qué es ZAKI?</Link></li>
          <li><Link className='bold' href='/#como'>¿Como lo obtengo?</Link></li>
          <li><Link className='bold' href='/faq'>FAQ</Link></li>
        </ul>
        <button className='primary' style={{ marginTop: '32px', width: '100%' }}>Ingresa</button>
      </nav>
    </div>
  )
}

const Header = () => {
  const { t }: t = useI18N()
  const router = useRouter()
  // const { locale, locales } = router

  useEffect(() => {
    const { asPath, pathname, query } = router
    const i18n = localStorage.getItem('i18n')
    if (i18n === 'es') {
      router.push({ pathname, query }, asPath, { locale: 'es' })
    } else {
      router.push({ pathname, query }, asPath, { locale: 'en' })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLanguage = (value: string) => {
    localStorage.setItem('i18n', value)
  }

  const { toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState<drawerProps['isOpen']>(false)
  const { scrollDirection, scrolled } = useScrollDirection()

  const openDrawer = () => {
    setIsOpen(!isOpen)
    // Unsets Background Scrolling when SideDrawer/Modal is open
    document.body.style.overflow = 'hidden'
  }

  return (
    <header className={style.header + ' ' + `${scrollDirection === 'down' ? style.hide : style.show}` + ' ' + `${scrolled ? style.scrolled : ''}`}>
      <div className={'container' + ' ' + style.wrapper}>
        <div className='logo'>
          <Link href='/'>
            <GitHub />
            <Discord />
            <Linkedin />
          </Link>
        </div>
        <nav className={style.navigation}>
          <ul className={style.links}>
            <li><Link className='bold' href='/'>Inicio</Link></li>
            <li>
              <div className={style.dropdown}>
                <MoonStars />
                <div className={style.menu}>
                  <a className={style.menu_item} href='#' onClick={toggleTheme}>
                    <SunHigh />
                    Light
                  </a>
                  <a className={style.menu_item} href='#' onClick={toggleTheme}>
                    <MoonStars />
                    Dark
                  </a>
                  <a className={style.menu_item} href='#' onClick={toggleTheme}>
                    <DeviceDesktop />
                    System
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className={style.dropdown}>
                <h1 style={{ fontSize: '20px' }}>
                  Idioma
                </h1>
                <div className={style.menu}>
                  <a
                    className={style.menu_item}
                    href=''
                    onClick={() => handleLanguage('es')}
                  >
                    Español
                  </a>
                  <a
                    className={style.menu_item}
                    href='/en'
                    onClick={() => handleLanguage('en')}
                  >
                    Ingles
                  </a>
                </div>
              </div>
            </li>
            <li><Link className='bold' href='/'>{t('Project')}</Link></li>
            <li><Link className='bold' href='/'>{t('Contact-Me')}</Link></li>
          </ul>
        </nav>
        <button className={style.img_wrapper} onClick={openDrawer}>
          {/* <img className={style.hamburger} src={hamburger} alt='hamburguer' /> */}
        </button>
        <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  )
}

export default Header

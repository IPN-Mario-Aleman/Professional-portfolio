import useScrollDirection from '@hooks/useScrollDirection'
import { GitHub, Linkedin, LogoAlt } from '@src/components/icons/'
import { useI18N } from '@src/context/i18n'
import { t } from '@src/models/i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import style from './header.module.scss'
import LanguageMenu from './lang'
import ThemeMenu from './theme'

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
  const { t }: t = useI18N()
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
          <li><Link className='bold' href='/' onClick={closeDrawer}>Inicio</Link></li>
          <li><Link className='bold' href='/projects' onClick={closeDrawer}>{t('Project')}</Link></li>
          <li><Link className='bold' href='/' onClick={closeDrawer}>{t('Contact-Me')}</Link></li>
        </ul>
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

  const [isOpen, setIsOpen] = useState<drawerProps['isOpen']>(false)
  const { scrolled } = useScrollDirection()

  const openDrawer = () => {
    setIsOpen(!isOpen)
    // Unsets Background Scrolling when SideDrawer/Modal is open
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <header className={style.header + ' ' + `${scrolled ? style.scrolled : ''}`}>
        <div className={style.wrapper}>
          <div className={style.logo}>
            <Link href='/'>
              <LogoAlt />
            </Link>
          </div>
          <nav className={style.navigation}>
            <ul className={style.links}>
              <li><Link className='bold' href='/'>Inicio</Link></li>
              <li><Link className='bold' href='/projects'>{t('Project')}</Link></li>
              <li><Link className='bold' href='/'>{t('Contact-Me')}</Link></li>
              <span className={style.divider} />
              <li>
                <ThemeMenu />
              </li>
              <li>
                <LanguageMenu />
              </li>
              <li style={{ display: 'grid', placeContent: 'center' }}>
                <GitHub />
              </li>
              <li style={{ display: 'grid', placeContent: 'center' }}>
                <Linkedin />
              </li>
            </ul>
          </nav>
          <button className={style.img_wrapper} onClick={openDrawer}>
            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-menu-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 6l16 0' />
              <path d='M4 12l16 0' />
              <path d='M4 18l16 0' />
            </svg>
          </button>
        </div>
      </header>
      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default Header

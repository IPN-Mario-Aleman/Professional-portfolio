import style from './lang.module.scss'
import { useState, useEffect } from 'react'
import { useAnimate, stagger, motion } from 'framer-motion'
import { Language } from '@src/components/icons'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useMenuAnimation (isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    // animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)'
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5
      }
    )

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return scope
}

const LanguageMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scope = useMenuAnimation(isOpen)
  const handleLanguage = (value: string) => {
    localStorage.setItem('i18n', value)
  }

  return (
    <nav className={style.menu} ref={scope}>
      <motion.div
        role='button'
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={style.btn_theme}
      >
        <Language />
      </motion.div>
      <ul
        className={style.list}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          clipPath: 'inset(10% 50% 90% 50% round 10px)'
        }}
      >
        <li className={style.item}>
          <a
            className={style.menu_item}
            href=''
            onClick={() => handleLanguage('es')}
          >
            Español
          </a>
        </li>
        <li className={style.item}>
          <a
            className={style.menu_item}
            href='/en'
            onClick={() => handleLanguage('en')}
          >
            Ingles
          </a>
        </li>
      </ul>{' '}
    </nav>
  )
}

export default LanguageMenu

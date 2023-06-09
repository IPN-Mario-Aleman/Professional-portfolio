import { DeviceDesktop, MoonStars, SunHigh } from '@src/components/icons'
import { useTheme } from '@src/context/ThemeContext'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import style from './theme.module.scss'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useMenuAnimation (isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
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

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scope = useMenuAnimation(isOpen)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={style.menu} ref={scope}>
      <motion.div
        role='button'
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={style.btn_theme}
      >
        {
          theme === 'dark'
            ? <MoonStars active />
            : <SunHigh active />
        }
      </motion.div>
      <ul
        className={style.list}
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          clipPath: 'inset(10% 50% 90% 50% round 10px)'
        }}
      >
        <li className={style.item} onClick={toggleTheme}>
          <div className={style.content_item}>
            <SunHigh />
            Light
          </div>
        </li>
        <li className={style.item} onClick={toggleTheme}>
          <div className={style.content_item}>
            <MoonStars />
            Dark
          </div>
        </li>
        <li className={style.item} onClick={toggleTheme}>
          <div className={style.content_item}>
            <DeviceDesktop />
            System
          </div>
        </li>
      </ul>{' '}
    </nav>
  )
}

export default ThemeMenu

import { useState, useEffect } from 'react'

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<null | string>(null)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0

      if (scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    // add event listener
    // if (system.mobileSystem.length > 0) {
    // }
    window.addEventListener('touchmove', updateScrollDirection)

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection) // clean up
      window.removeEventListener('touchmove', updateScrollDirection)
    }
  }, [scrollDirection])

  return {
    scrollDirection,
    scrolled
  }
}

export default useScrollDirection

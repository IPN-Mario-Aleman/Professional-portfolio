import { useEffect, useState } from 'react'

function useDebounce (value: boolean, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<null | boolean>(null)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}

const useScroll = () => {
  const [animationScroll, setAnimationScroll] = useState(false)
  const [scrolled, setScrolled] = useState<boolean | null>(false)
  const debouncedScroll = useDebounce(animationScroll, 100)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 100) {
      setAnimationScroll(true)
    } else {
      setAnimationScroll(false)
    }
    requestAnimationFrame(handleScroll)
  }

  useEffect(() => {
    requestAnimationFrame(handleScroll)
  })

  useEffect(() => {
    setScrolled(debouncedScroll)
  }, [debouncedScroll])

  return {
    scrolled
  }
}
export default useScroll

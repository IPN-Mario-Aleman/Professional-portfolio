export const handleScroll = (anchor: string) => {
  const id = `${anchor}`
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

import { useBookStore } from '@src/store/bookStore'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import style from './certificate.module.scss'

const CertificatePopUp = () => {
  const img = useBookStore(state => state.img)
  const popUp = useBookStore(state => state.popUp)
  const updatePopUp = useBookStore(state => state.updatePopUp)

  useEffect(() => {
    if (popUp) {
      document.body.style.overflow = 'hidden'
    }
  }, [popUp])

  const closePopUp = () => {
    document.body.style.overflow = 'inherit'
    updatePopUp(false, '')
  }

  return (
    <AnimatePresence>
      {popUp && (
        <motion.div layoutId={img} className={style.overlay}>
          <motion.button className={style.closeBtn} onClick={() => closePopUp()} />
          <motion.div className={style.img_content}>
            <Image
              className={style.embla__slide__img}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/9'
              }}
              src={img}
              alt='certificate'
              height={1920}
              width={1080}
              quality={100}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default CertificatePopUp

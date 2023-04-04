import { useBookStore } from '@src/store/bookStore'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import Close from '../icons/Close'
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
        <>
          <motion.div layoutId={img} className={style.overlay}>
            <div className={style.closePopUp} onClick={() => closePopUp()} />
            <motion.div className={style.popup_container}>
              <motion.div className={style.close_section}>
                <h1 className='xsm-text'>
                  Certifications
                </h1>
                <motion.div className={style.closeBtn} onClick={() => closePopUp()}>
                  <Close />
                </motion.div>
              </motion.div>
              <motion.div className={style.img_container}>
                <Image
                  className={style.img_cer}
                  src={img}
                  width={1000}
                  height={1000}
                  alt='certificate'
                  quality={100}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
export default CertificatePopUp

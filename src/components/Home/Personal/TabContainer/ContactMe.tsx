import Image from 'next/image'
import profile from '@public/images/profile_img.webp'
import style from './tab_content.module.scss'
import { initialTabs as tabs } from '../Tabs/tabs'
import { motion } from 'framer-motion'
import { Copy } from '@src/components/icons/CopyIcon'
import { CopyToClipboard } from '@src/utils/copyToClipboar'
import { useNotification } from '@src/store/notificationStore'

export interface Tabs {
    icon: string;
    label: string;
}

type TabControls = {
    selectedTab: {}
    setSelectedTab: ({ icon, label }: Tabs) => void
}

const ContactMe = ({ selectedTab, setSelectedTab }: TabControls) => {
  const updateVisible = useNotification(state => state.updateVisible)

  const handleCopy = (text: string, message: string) => {
    CopyToClipboard({ text })
    updateVisible(true, message)
  }

  return (
    <div className={style.letter}>
      <div className={style.avatar_wrapper}>
        <Image className={style.avatar} src={profile} alt='Profile img' height={500} width={400} priority quality={100} />
      </div>
      <div className={style.contact_info}>
        <div className={style.email_wrapper}>
          <svg xmlns='http:www.w3.org/2000/svg' className={`${style.icon} icon-tabler icon-tabler-mail`} width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
            <path d='M3 7l9 6l9 -6' />
          </svg>
          <p>
            mar.alemanf@gmail.com
          </p>
          <div className={style.copy} data-tooltip='Copy to Clipboard' data-position='right' onClick={() => handleCopy('mar.alemanf@gmail.com', '¡Email copiado con éxito!')}>
            <Copy />
          </div>
        </div>
        <div className={style.phone_wrapper}>
          <svg xmlns='http:www.w3.org/2000/svg' className={`${style.icon} icon-tabler icon-tabler-device-mobile`} width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z' />
            <path d='M11 4h2' />
            <path d='M12 17v.01' />
          </svg>
          55 2511 4769
        </div>
      </div>

      <div className={style.social_info}>
        <p>
          GitHub: <a className={style.social_link} href='https:github.com/IPN-Mario-Aleman' target='_blank' rel='noopener noreferrer'>IPN-Mario-Aleman</a>
        </p>
        <p>
          Linkedin: <a className={style.social_link} href='https:www.linkedin.com/in/mario-alberto-aleman-fernandez-382a12228/' target='_blank' rel='noopener noreferrer'>mario-alberto-aleman-fernandez-382a12228</a>
        </p>
        <p>
          Discord: FallDestiny#9231
          <div className={style.copy} data-tooltip='Copy to Clipboard' data-position='right' onClick={() => handleCopy('FallDestiny#9231', '¡Username copiado con éxito!')}>
            <Copy />
          </div>
        </p>
      </div>
      <div className={style.curriculum}>
        <p> Curriculum Vitae </p>
        <a className={style.download_btn}>
          <svg xmlns='http:www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-file-download' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M14 3v4a1 1 0 0 0 1 1h4' />
            <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
            <path d='M12 17v-6' />
            <path d='M9.5 14.5l2.5 2.5l2.5 -2.5' />
          </svg>
        </a>
      </div>
      <nav className={style.nav}>
        <ul className={style.ul}>
          {tabs.map((item) => (
            <motion.div
              className={`${style.btn_control} ${item === selectedTab ? style.selected : ''}`}
              onClick={() => setSelectedTab(item)}
              key={item.label}
            >
              <p>Next</p>
              <svg
                xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 6l6 6l-6 6' />
              </svg>
            </motion.div>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default ContactMe

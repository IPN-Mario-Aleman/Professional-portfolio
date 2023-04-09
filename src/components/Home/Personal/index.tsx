import profile from '@public/images/profile_img.webp'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import style from './personal.module.scss'
import TabContainer from './TabContainer'
import Nav from './Tabs'

const Personal = () => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClicked = (idx:number) => {
    setActiveTab(idx)
  }
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const matrixLetter = (e:any) => {
    let iterations = 0
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText.split('')
        .map((letter: any, index: number) => {
          if (index < iterations) {
            return e.target.dataset.value[index]
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join('')
      if (iterations >= e.target.dataset.value.length) clearInterval(interval)
      iterations += 1 / 3
    }, 30)
  }
  return (
  // <section className={`${style.section} container`} id='personal'>
  //   <div className={style.wrapp}>
  //     <motion.h1
  //       className={style.title + ' ' + 'md-text'}
  //       data-value='INFORMACION PERSONAL'
  //       onMouseOver={(e) => matrixLetter(e)}
  //     >
  //       INFORMACION PERSONAL
  //     </motion.h1>
  //     <div className={style.wrapper}>
  //       <div className={style.personal_info}>
  //         <Nav
  //           activeTap={activeTab}
  //           onTabClicked={handleTabClicked}
  //         />
  //         <TabContainer activeTab={activeTab} />
  //       </div>
  //       <div className={style.contact_wrapper}>
  //         <div className={style.avatar_wrapper}>
  //           <Image className={style.avatar} src={profile} alt='Profile img' height={500} width={400} priority quality={100} />
  //         </div>
  //         <div>
  //           <h1 className={style.title_description}>Contactame</h1>
  //           <div className={style.box_contact}>
  //             <div className={style.contact_info}>
  //               <div className={style.email_wrapper}>
  //                 <svg xmlns='http://www.w3.org/2000/svg' className={`${style.icon} icon-tabler icon-tabler-mail`} width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
  //                   <path stroke='none' d='M0 0h24v24H0z' fill='none' />
  //                   <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
  //                   <path d='M3 7l9 6l9 -6' />
  //                 </svg>
  //                 mar.alemanf@gmail.com
  //               </div>
  //               <div className={style.phone_wrapper}>
  //                 <svg xmlns='http://www.w3.org/2000/svg' className={`${style.icon} icon-tabler icon-tabler-device-mobile`} width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
  //                   <path stroke='none' d='M0 0h24v24H0z' fill='none' />
  //                   <path d='M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z' />
  //                   <path d='M11 4h2' />
  //                   <path d='M12 17v.01' />
  //                 </svg>
  //                 55 2511 4769
  //               </div>
  //             </div>

  //             <div className={style.social_info}>
  //               <p>
  //                 GitHub: <a className={style.social_link} href='https://github.com/IPN-Mario-Aleman' target='_blank' rel='noopener noreferrer'>IPN-Mario-Aleman</a>
  //               </p>
  //               <p>
  //                 Linkedin: <a className={style.social_link} href='https://www.linkedin.com/in/mario-alberto-aleman-fernandez-382a12228/' target='_blank' rel='noopener noreferrer'>mario-alberto-aleman-fernandez-382a12228</a>
  //               </p>
  //               <p>
  //                 Discord: FallDestiny#9231
  //               </p>
  //             </div>

  //           </div>

    //           <div className={style.curriculum}>
    //             <p> Curriculum Vitae </p>
    //             <a className={style.download_btn}>
    //               <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-file-download' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
    //                 <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    //                 <path d='M14 3v4a1 1 0 0 0 1 1h4' />
    //                 <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
    //                 <path d='M12 17v-6' />
    //                 <path d='M9.5 14.5l2.5 2.5l2.5 -2.5' />
    //               </svg>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className='container' id='personal'>
      <div className={style.wrapper}>
        <div>info personal</div>
        <div>Contact information</div>
      </div>
    </section>
  )
}
export default Personal

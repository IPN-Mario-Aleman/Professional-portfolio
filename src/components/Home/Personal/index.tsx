import profile from '@public/images/profile_img.webp'
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
    <div className='container'>
      <h1 className={style.title + ' ' + 'md-text'} data-value='INFORMACION PERSONAL' onMouseOver={(e) => matrixLetter(e)}>
        INFORMACION PERSONAL
      </h1>
      <div className={style.wrapper}>
        <div className={style.personal_info}>
          <Nav
            activeTap={activeTab}
            onTabClicked={handleTabClicked}
          />
          <TabContainer activeTab={activeTab} />
        </div>
        <div className={style.contacto}>
          <div className={style.avatar_wrapper}>
            <Image className={style.avatar} src={profile} alt='Profile img' height={500} width={400} priority quality={100} />
          </div>
          <h1>
            CV
            Numero de telefono
            Correo Electronico
            Redes sociales
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Personal

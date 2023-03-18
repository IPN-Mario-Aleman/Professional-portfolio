import { useState } from 'react'
import TabContainer from './TabContainer'
import Nav from './Tabs'
import style from './personal.module.scss'

const Personal = () => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabClicked = (idx:number) => {
    setActiveTab(idx)
  }
  return (
    <div className='container'>
      <h1>
        Informacion Personal
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

import About from './About'
import Education from './Education'
import Skills from './Skills'
import style from './tab_content.module.scss'

type TabProps = {
    activeTab: number
}

const TabContainer = ({ activeTab }: TabProps) => {
  return (
    <div className={style.tab_wrapper}>
      <div className={style.folder}>

        {
        activeTab === 0 ? <Education /> : activeTab === 1 ? <Skills /> : <About />
      }
      </div>
    </div>
  )
}
export default TabContainer

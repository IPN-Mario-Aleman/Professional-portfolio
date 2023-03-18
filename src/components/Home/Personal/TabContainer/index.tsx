import style from './tab_content.module.scss'

const About = () => {
  return (
    <div>
      About
    </div>
  )
}

const Skills = () => {
  return (
    <div>
      asda
    </div>
  )
}

const Education = () => {
  return (
    <div>
      Educación
    </div>
  )
}

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

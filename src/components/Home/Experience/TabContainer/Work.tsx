import style from './style.module.scss'

export interface Tabs {
  start: string;
  finish: string;
  year: string;
  img: string;
  title: string;
  description: string;
  job: string;
}

type TabControls = {
    selectedTab: Tabs
}

const Works = ({ selectedTab }: TabControls) => {
  return (
    <div className='container'>
      <div style={{ marginBottom: 'var(--space-11)' }}>
        <p className={style.date}>
          {`${selectedTab.start} ${selectedTab.finish}`}
        </p>
      </div>
      <h1 className='bg-text'>
        {selectedTab.title}
      </h1>
      <div className={style.wrapper}>
        {selectedTab.description}
      </div>
    </div>
  )
}
export default Works

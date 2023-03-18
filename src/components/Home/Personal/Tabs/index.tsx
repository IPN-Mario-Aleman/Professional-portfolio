import style from './tab.module.scss'

const tabs = ['Educacion', 'Skills', 'Acerca de']

type NavProps = {
    activeTap: number
    onTabClicked: (tab: number) => void
}

const Nav = ({ activeTap, onTabClicked }: NavProps) => {
  return (
    <header className={style.tabs}>
      {
        tabs.map((tab, idx) => (
          <button
            key={tab}
            type='button'
            onClick={() => onTabClicked(idx)}
            className={
                activeTap === idx ? style.tab_btn + ' ' + style.active + ' ' + 'primary_btn' : style.tab_btn + ' ' + 'primary_btn'
              }
          >
            <p className={style.tab_text}>
              {tab}
            </p>
          </button>
        ))
      }
    </header>
  )
}

export default Nav

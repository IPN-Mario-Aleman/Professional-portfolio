import style from './education.module.scss'
import { NextJs } from '@src/components/icons'

const Education = () => {
  return (
    <div className={style.container}>
      <div className={style.data}>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#ec4242', boxShadow: '0 0 5px #ec4242, 0 0 10px #ec4242' }} />
          <h1 className='xsm-text'>Ingenieria en Informatica</h1>
          <NextJs />
          <p>Inicio: <span>Enero - 2017</span></p>
          <p>Finalizado: <span>Enero - 2021</span></p>
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#ec7f44', boxShadow: '0 0 5px #ec7f44, 0 0 10px #ec7f44' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#63eb41', boxShadow: '0 0 5px #63eb41, 0 0 10px #63eb41' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#4943eb', boxShadow: '0 0 5px #4943eb, 0 0 10px #4943eb' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#e842ea', boxShadow: '0 0 5px #e842ea, 0 0 10px #e842ea' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#010101', boxShadow: '0 0 5px #010101, 0 0 10px #010101' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#e9e8f8', boxShadow: '0 0 5px #e9e8f8, 0 0 10px #e9e8f8' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#d69213', boxShadow: '0 0 5px #d69213, 0 0 10px #d69213' }} />
          IPN
        </div>
        <div className={style.card_info}>
          <span className={style.color} style={{ background: '#bd5e1e', boxShadow: '0 0 5px #bd5e1e, 0 0 10px #bd5e1e' }} />
          IPN
        </div>

      </div>
    </div>
  )
}
export default Education

import style from './hero.module.scss'
import { useI18N } from '@src/context/i18n'
import { t } from '@src/models/i18n'

const Hero = () => {
  const { t }: t = useI18N()
  return (
    <section className='container'>
      <div className={style.wrapper}>
        <h1 className={`banner-text ${style.text}`}>{t('Banner')} <br /> {t('Banner2')}</h1>
        <p className={`xbg-text font-anurati ${style.text}`}>Welcome to my portfolio</p>
      </div>
    </section>
  )
}
export default Hero

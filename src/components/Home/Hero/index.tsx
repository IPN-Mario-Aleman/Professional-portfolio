import Image from 'next/image'
import style from './hero.module.scss'
import profile from '@public/images/profile_img.webp'
import { useI18N } from '@src/context/i18n'
import { t } from '@src/models/i18n'

const Hero = () => {
  const { t }: t = useI18N()
  return (
    <section className='container'>
      <div className={style.wrapper}>
        <div>
          <h1 className='banner-text'>{t('Banner')} <br /> {t('Banner2')}</h1>
        </div>
        <div className={style.avatar_wrapper}>
          <Image className={style.avatar} src={profile} alt='Profile img' height={500} width={400} priority quality={100} />
        </div>
      </div>
    </section>
  )
}
export default Hero

import { useNotification } from '@src/store/notificationStore'
import style from './notification.module.scss'

const Notification = () => {
  const visible = useNotification(state => state.visible)
  const text = useNotification(state => state.text)
  const updateVisible = useNotification(state => state.updateVisible)

  const clearNotification = () => {
    setTimeout(() => {
      updateVisible(false, '')
    }, 4000)
  }

  visible && clearNotification()

  return (
    <>
      {
        visible &&
          <div className={visible ? style.notification + ' ' + style.animation : style.notification}>
            <p>{text}</p>
            <span className={style.notification_progrss} />
          </div>
      }
    </>
  )
}

export default Notification

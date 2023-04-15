import style from './style.module.scss'

const Search = () => {
  return (
    <form className={style.form}>
      <label>
        <input required autoComplete='off' placeholder='search your chats' id='search' type='text' />
        <div className={style.icon}>
          <svg stroke-width='2' stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={style.swap_on}>
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' stroke-linejoin='round' stroke-linecap='round' />
          </svg>
          <svg stroke-width='2' stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={style.swap_off}>
            <path d='M10 19l-7-7m0 0l7-7m-7 7h18' stroke-linejoin='round' stroke-linecap='round' />
          </svg>
        </div>
        <button type='reset' className={style.close_btn}>
          <svg viewBox='0 0 20 20' className={`${style.h_5} ${style.w_5}`} xmlns='http://www.w3.org/2000/svg'>
            <path clip-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' fill-rule='evenodd' />
          </svg>
        </button>
      </label>
    </form>
  )
}
export default Search

import { useFilterProjects } from '@src/hooks/useFilters'
import { useId, useTransition } from 'react'
import style from './style.module.scss'

const Search = () => {
  const { filters, setFilters } = useFilterProjects()

  const search = useId()
  // const categoryFilterId = useId()

  const [isPending, startTransition] = useTransition()

  const handleReset = () => {
    setFilters({ ...filters, name: '' })
  }

  const handleSearch = (term: string) => {
    startTransition(() => {
      setFilters({ ...filters, name: term })
    })
  }

  return (
    <div className={style.form}>
      <label htmlFor={search}>
        <input required autoComplete='off' placeholder='search a project' id={search} type='text' onChange={(e) => handleSearch(e.target.value)} value={filters.name} />
        <div className={style.icon}>
          <svg strokeWidth='2' stroke='currentColor' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={style.swap_on}>
            <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' strokeLinejoin='round' strokeLinecap='round' />
          </svg>
        </div>
        {isPending
          ? <div>loading</div>
          : (
            <button onClick={handleReset} type='reset' className={style.close_btn}>
              <svg viewBox='0 0 20 20' className={`${style.h_5} ${style.w_5}`} xmlns='http://www.w3.org/2000/svg'>
                <path clipRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' fillRule='evenodd' />
              </svg>
            </button>
            )}
      </label>
    </div>
  )
}
export default Search

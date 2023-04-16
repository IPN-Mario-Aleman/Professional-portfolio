import { FilterContextType, IFilters } from '@src/models/filterProjects'
import { createContext, useContext, useMemo, useState } from 'react'

interface props {
    children: React.ReactNode;
}

export const FiltersContext = createContext<FilterContextType | undefined>(undefined)

const FiltersProvider = ({ children }: props) => {
  const [filters, setFilters] = useState<IFilters>({
    category: 'all',
    name: ''
  })

  const value = useMemo<FilterContextType>(() => ({ filters, setFilters }), [filters, setFilters])

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilter = () => {
  const filtersContext = useContext(FiltersContext) as FilterContextType
  if (filtersContext === undefined) {
    throw new Error('useOnboardingContext must be inside a FiltersContext')
  }
  return filtersContext
}

export default FiltersProvider

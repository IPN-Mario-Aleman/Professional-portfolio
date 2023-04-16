import { useFilter } from '@context/filters'
import { IProjectsData } from '@src/models/filterProjects'

export function useFilterProjects () {
  const { filters, setFilters } = useFilter()

  const filterProjects = (projects: Array<any>) => {
    return projects.filter((project: IProjectsData) => {
      return (
        filters.name === ''
          ? project
          : project.name.toLowerCase().includes(filters.name.toLowerCase())
      )
    })
  }

  return { filters, filterProjects, setFilters }
}

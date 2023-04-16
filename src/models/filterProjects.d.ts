export interface IFilters {
    category: string
    name: string
}

export type FilterContextType = {
    filters: IFilters
    setFilters: ({ category, name }: IFilters) => void
}

export interface IProjectsData {
    id: number
    name: string
    url: string
    repo: string
    images: string
    alt: string
    description: string
    background: string
    subtitulo: string
    preview: string,
    category: string
}

export type DataType = {
    projects: IProjectsData[]
}

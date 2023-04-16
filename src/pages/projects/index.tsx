import { projects as initialProjects } from '@mocks/projects.json'
import Layout from '@src/components/layout'
import { useFilterProjects } from '@src/hooks/useFilters'
import dynamic from 'next/dynamic'

const HeroTitle = dynamic(() => import('@src/components/pages/projects/HeroTitle'))
const Projects = dynamic(() => import('@src/components/pages/projects/AllProjects'))

const Project = () => {
  const { filterProjects } = useFilterProjects()

  const filteredProducts = filterProjects(initialProjects)

  return (
    <Layout>
      <HeroTitle />
      <Projects projects={filteredProducts} />
    </Layout>
  )
}
export default Project

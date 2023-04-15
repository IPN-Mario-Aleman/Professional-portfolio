import Layout from '@src/components/layout'
import dynamic from 'next/dynamic'

const HeroTitle = dynamic(() => import('@src/components/pages/projects/HeroTitle'))
const Projects = dynamic(() => import('@src/components/pages/projects/AllProjects'))

const index = () => {
  return (
    <Layout>
      <HeroTitle />
      <Projects />
    </Layout>
  )
}
export default index

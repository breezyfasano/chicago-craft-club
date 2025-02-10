import Layout from '../components/Layout'
import { NametagBuilder } from '../components/NametagBuilder'

export default function NametagBuilderPage() {
  return (
    <Layout>
      <section className='w-full'>
        <NametagBuilder />
      </section>
    </Layout>
  )
}

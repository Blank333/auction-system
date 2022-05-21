import Layout from '../../components/layout'
import  { useRouter } from 'next/router'

const item = () => {
  const router = useRouter()
  const { sno } =  router.query
  return (
    <Layout>
      <div>
        <p>item: { sno }</p>
      </div>
    </Layout>
  )
}
export default item
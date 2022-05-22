import Layout from '../../components/layout'
import  { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div>
        <p>Item: { slug }</p>
        <p>Price: 10000000000</p>
        <p>Seller: userName</p>
        
      </div>
  )
}
export default slug
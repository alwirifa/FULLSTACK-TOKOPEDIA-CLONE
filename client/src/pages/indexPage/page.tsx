import Slider from '../../components/Slider/Slider'
import ProductDashboard from '../productDashboard'
import Category from './Category'
import Diskon from './Diskon'
import LagiTrendingNih from './LagiTrendingNih'
import Traktiran from './Traktiran'
import Trending from './Trending'

const IndexPage = () => {
  return (
    <div className='mt-[160px] space-y-6 '>
      <Slider />
      <Category/>
      <LagiTrendingNih/>
      <Diskon/>
      <Traktiran/>
      <Trending/>
      <ProductDashboard/>
    </div>
  )
}

export default IndexPage
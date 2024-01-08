
import { AiOutlineReload } from "react-icons/ai";
import Container from "../../components/Container";

const LagiTrendingNih = () => {
  return (
    <div>
      <Container>
        <div className='flex items-center justify-between md:justify-start gap-4 px-4 md:px-0'>
          <h3 className='text-sm md:text-xl font-bold'>Lagi Trending Nih!</h3>
          <div className="flex gap-1  items-center">
            <AiOutlineReload className="text-sm md:text-xl text-green-600" />
            <a href='' className='text-sm md:text-base font-semibold text-green-600'>Muat Lainya</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LagiTrendingNih
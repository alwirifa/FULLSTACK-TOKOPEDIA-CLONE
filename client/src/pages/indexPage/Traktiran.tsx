
import Container from '../../components/Container'
import CountdownComponent from '../../components/CoutdownComponent'


const Traktiran = () => {
  return (
    <div>
      <Container>
        <div className='flex flex-col md:flex-row gap-0 md:gap-4 px-4 md:px-0'>
          <h3 className='text-sm md:text-xl font-bold'>Traktiran Pengguna Baru</h3>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-2'>
            <p className='text-sm text-zinc-500'>Berakhir dalam</p>
            <CountdownComponent />
            </div>
            <a href='' className='font-semibold text-green-600 text-sm md:text-base'>Lihat semua</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Traktiran
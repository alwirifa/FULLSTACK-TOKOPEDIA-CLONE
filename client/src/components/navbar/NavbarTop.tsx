
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const NavbarTop = () => {
  return (
    <div className='hidden md:block border-b border-solid border-zinc-100 shadow-sm'>
      <div className='flex justify-between items-center px-8 py-2 bg-zinc-100 '>
        <div className='flex items-center'>
          <IoPhonePortraitOutline className="text-xl text-zinc-500 mr-2" />
          <p className='text-sm text-zinc-500 hover:text-green-500 cursor-pointer'>Download Tokopedia App</p>
        </div>
        <div className='hidden lg:flex items-center space-x-8'>
          <Link to="/error" className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Tetang Tokopedia</Link>
          <Link to="/error" className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Mitra Tokopedia</Link>
          <Link to="/error" className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Mulai Berjualan</Link>
          <Link to="/error" className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Promo</Link>
          <Link to="/error" className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'>Tokopedia Care</Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop
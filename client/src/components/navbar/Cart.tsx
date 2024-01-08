import { IoCartOutline } from 'react-icons/io5'

const Cart = () => {
  return (

    <div className='hidden md:block px-4 py-2 hover:bg-zinc-100 rounded-md cursor-pointer'>
      <IoCartOutline className="text-3xl text-zinc-500" />
    </div>

  )
}

export default Cart
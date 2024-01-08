import { IoSearchOutline } from 'react-icons/io5'

const Search = () => {
  return (
    <div className='max-w-7xl w-full'>
      <div className='relative flex items-center w-full p-2 md:p-3 rounded-md border boder-solid border-zinc-300 focus-within:border-green-600 overflow-hidden'>
        <IoSearchOutline className="text-xl text-zinc-500" />
        <input
          className="peer h-full w-full outline-none text-sm placeholder:text-zinc-500 px-2"
          type="text"
          id="search"
          placeholder="Cari di Tokopedia.." />
      </div>
    </div>
  )
}

export default Search
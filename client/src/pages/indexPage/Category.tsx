import Container from '../../components/Container'
import CategorySlider from '../../components/Slider/CategorySlider';

import { IoEllipsisVertical } from "react-icons/io5";


const Category = () => {
  return (
    <Container>
      <div className='rounded-md shadow-[rgba(0,_0,_0,_0.12)_0px_1px_6px_0px] p-6 flex flex-col gap-6'>
        <div className='flex md:flex-row gap-6'>
          <div className='flex flex-1 flex-col space-y-4'>
            <h3 className='font-semibold'>Kategori Pilihan</h3>
            <CategorySlider />
          </div>

          <div className='flex flex-1  flex-col space-y-4'>
            <h3 className='font-semibold'>Top Up & Tagihan</h3>
            <div className='border border-solid rounded-lg'>

              <div className='flex min-w-[400px]  w-full justify-stretch'>
                <div className='w-full border-b-2 border-green-500 text flex justify-center items-center text-sm font-bold text-zinc-500 cursor-pointer'>Pulsa</div>
                <div className='w-full border-b border-zinc-500 text flex justify-center items-center text-sm font-bold text-zinc-500    cursor-pointer'>Paket Data</div>
                <div className='w-full border-b border-zinc-500 text flex justify-center items-center text-sm font-bold text-zinc-500    cursor-pointer'>Flight</div>
                <div className='w-full border-b border-zinc-500 text flex justify-center items-center text-sm font-bold text-zinc-500    cursor-pointer'>Listrik PLN</div>
                <div className='border-l border-b px-4 py-2 text-xl text-zinc-500 cursor-pointer'><IoEllipsisVertical /></div>
              </div>

              <div className='flex p-4 gap-4'>
                <div className='w-full grid grid-cols-2 gap-4'>
                  <div className='grid gap-2'>
                    <label className="text-sm font-medium leading-none text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nomor Telepon</label>
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  outline-none border-solid border-zinc-300 focus-within:border-green-600" id='' placeholder="Masukan Nomor..."></input>
                  </div>

                  <div className='grid gap-2'>
                    <label className="text-sm font-medium leading-none text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nominal</label>
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  outline-none border-solid border-zinc-300 focus-within:border-green-600" id='' placeholder="I need help with..."></input>
                  </div>
                </div>
                <div className='flex w-full items-end md:items-center max-w-[80px]'>
                  <button className='w-full py-[10px] bg-zinc-100 text-sm text-zinc-500 font-semibold rounded-md'>Beli</button>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Categories */}
        {/* <div className='w-full flex gap-4'>
          <div className='rounded-full py-2 px-8 text-sm border'>Belanja 2 jam tiba</div>
          <div className='rounded-full py-2 px-8 text-sm border'>Belanja 2 jam tiba</div>
          <div className='rounded-full py-2 px-8 text-sm border'>Belanja 2 jam tiba</div>
          <div className='rounded-full py-2 px-8 text-sm border'>Belanja 2 jam tiba</div>
          <div className='rounded-full py-2 px-8 text-sm border'>Belanja 2 jam tiba</div>
          <div className='rounded-full py-2 px-8 text-sm border'>Belanja 2 jam tiba</div>
        </div> */}

      </div>
    </Container>
  )
}

export default Category
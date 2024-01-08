import { register } from 'swiper/element/bundle';
register();
import React, { useRef } from "react";
import 'swiper/swiper-bundle.css';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

type ImageData = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

const data: ImageData[] = [
  {
    "id": "15",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/NYDo21ssGao",
    "download_url": "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/8a47d5c4-e2c6-4288-b8ba-4721c82ba4f4.jpg.webp?ect=4g"
  },
  {
    "id": "16",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/gkT4FfgHO5o",
    "download_url": "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/076d8fff-74e9-4740-8211-1b070fb9535b.jpg.webp?ect=4g"
  },
  {
    "id": "17",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/Ven2CV8IJ5A",
    "download_url": "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/6/b886a409-4e68-4059-8e38-93decaed42f3.jpg.webp?ect=4g",
  
  },
  {
    "id": "18",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/Ps2n0rShqaM",
    "download_url":  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/7/29308839-43ee-46e6-8da5-76ee135b72b4.jpg.webp?ect=4g",
 
  },
  {
    "id": "19",
    "author": "Paul Jarvis",
    "width": 2500,
    "height": 1667,
    "url": "https://unsplash.com/photos/P7Lh0usGcuk",
    "download_url": "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/7/390b5c18-f9e4-438f-ab29-9919cbfd4a64.jpg.webp?ect=4g",
   
  },
  {
    "id": "20",
    "author": "Aleks Dorohovich",
    "width": 3670,
    "height": 2462,
    "url": "https://unsplash.com/photos/nJdwUHmaY8A",
    "download_url":  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/dc70533a-5cf8-4d95-8fe7-cc5e743f8ec9.jpg.webp?ect=4g",
  },
  {
    "id": "21",
    "author": "Alejandro Escamilla",
    "width": 3008,
    "height": 2008,
    "url": "https://unsplash.com/photos/jVb0mSn0LbE",
    "download_url": "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/18/f9935213-0f5c-4d7b-8cfe-352a8ddd28ed.jpg.webp?ect=4g",
  },
]

type SwiperComponentProps = {
  id: string;
  elRef: React.RefObject<any>;
  slidesPerView: number;
  slidesPerGroup: number;
  spaceBetween: number;
  speed: number;
  images: ImageData[];
  loop?: boolean;
  autoplay?: boolean;  // Tambahkan properti autoplay
  autoplayTimeout?: number;  // Tambahkan properti autoplayTimeout
};

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  id,
  elRef,
  slidesPerView,
  slidesPerGroup,
  spaceBetween,
  speed,
  images,
  loop = true,
  autoplay = true,  // Inisialisasi dengan nilai default false
  autoplayTimeout = 2000  // Inisialisasi dengan nilai default 2000 milidetik atau 2 detik
}) => {
  return React.createElement(
    'swiper-container',
    {
      id,
      ref: elRef,
      'slides-per-view': slidesPerView,
      'slides-per-group': slidesPerGroup,
      'space-between': spaceBetween,
      speed,
      loop,
      autoplay,  // Tambahkan properti autoplay di sini
      'autoplay-timeout': autoplayTimeout  // Tambahkan properti autoplayTimeout di sini
    },
    images.map((image) => (
      React.createElement(
        'swiper-slide',
        { key: image.id },
        React.createElement('img', {
          className: 'h-full w-full object-cover',
          src: image.download_url,
          alt: `Author: ${image.author}`,
          title: `Author: ${image.author}`,
        })
      )
    ))
  );
}

type SwiperButtonsProps = {
  prev: string;
  next: string;
  swiperEl: React.RefObject<any>;
};

// const SwiperButtons: React.FC<SwiperButtonsProps> = ({ prev, next, swiperEl }) => {
//   return (
//     <>
//       <button
//         className="bg-zinc-100 p-2 rounded-full hover:scale-125 transition-all ease-in-out shadow-md"
//         id={prev}
//         onClick={() => {
//           swiperEl.current.swiper.slidePrev();
//         }}
//       >
//         <IoChevronBackOutline className="text-xl text-zinc-500" />
//       </button>
//       <button
//         className="bg-zinc-100 p-2 rounded-full hover:scale-125 transition-all ease-in-out shadow-md"
//         id={next}
//         onClick={() => {
//           swiperEl.current.swiper.slideNext();
//         }}
//       >
//         <IoChevronForwardOutline className="text-xl text-zinc-500" />
//       </button>
//     </>
//   );
// }

const SwiperButtonsPrev: React.FC<SwiperButtonsProps> = ({ prev, swiperEl }) => {
  return (
    <>
      <button
        className="bg-zinc-100 p-2 rounded-full hover:scale-125 transition-all ease-in-out shadow-md"
        id={prev}
        onClick={() => {
          swiperEl.current.swiper.slidePrev();
        }}
      >
        <IoChevronBackOutline className="text-xl text-zinc-500" />
      </button>
    </>
  );
}

const SwiperButtonsNext: React.FC<SwiperButtonsProps> = ({ next, swiperEl }) => {
  return (
    <>
      <button
        className="bg-zinc-100 p-2 rounded-full hover:scale-110 transition-all duartion-300 ease-in-out shadow-md"
        id={next}
        onClick={() => {
          swiperEl.current.swiper.slideNext();
        }}
      >
        <IoChevronForwardOutline className="text-xl text-zinc-500" />
      </button>
    </>
  );
}


const SwiperWithButtonsComponent: React.FC<{ images: ImageData[] }> = ({ images }) => {
  const swiperElRef = useRef<any>();

  return (
    <section className='px-4'>
      <div className='relative w-full lg:w-[1280px] mx-auto group'>
        <div className='w-full h-full rounded-xl overflow-hidden'>
        <SwiperComponent id={'mySwiperEl'} elRef={swiperElRef} slidesPerView={1} slidesPerGroup={1}
          spaceBetween={0} speed={1100} images={images} />
          </div>
        {/* Tombol Kiri */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[20px] duration-300 transition-all ease-in-out z-40">
          <SwiperButtonsPrev prev={`example-prev`} swiperEl={swiperElRef} next={''} />
        </div>

        {/* Tombol Kanan */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-[20px] duration-300 transition-all ease-in-out z-40">
          <SwiperButtonsNext next={`example-next`} swiperEl={swiperElRef} prev={''} />
        </div>
      </div>
    </section>
  );
}

const Slider : React.FC = () => {
  return (
    <>
      <SwiperWithButtonsComponent images={data} />
    </>
  );
};

export default Slider;

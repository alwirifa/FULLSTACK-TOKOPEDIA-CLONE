import React from 'react';
import Container from '../../components/Container';

interface ButtonProps {
  text: string;
  img: string;
}

const buttonCards = [
  {
    img: "https://images.tokopedia.net/img/cache/100/ndZFpx/2022/12/21/a14d9d4e-8b3d-4345-9a15-3c66a921b2f2.jpg",
    text: "For You"
  },
  {
    img: "https://images.tokopedia.net/img/cache/100/ndZFpx/2023/10/11/05061c1e-db8f-4bce-841d-6873857c8646.jpg",
    text: "Fragnance"
  },
  {
    img: "https://images.tokopedia.net/img/cache/100/attachment/2019/11/7/75545163/75545163_f6ac6050-3872-48e8-b445-02a33e346061.jpg",
    text: "Shoes"
  },
  {
    img: "https://images.tokopedia.net/img/cache/100/ndZFpx/2023/10/6/b224bcca-2338-49cc-b565-2e96f084e8f4.jpg",
    text: "Outfit"
  },
  {
    img: "https://images.tokopedia.net/img/cache/100/ndZFpx/2022/12/21/a14d9d4e-8b3d-4345-9a15-3c66a921b2f2.jpg",
    text: "For You"
  },
  {
    img: "https://images.tokopedia.net/img/cache/100/ndZFpx/2023/10/11/05061c1e-db8f-4bce-841d-6873857c8646.jpg",
    text: "Fragnance"
  },
  {
    img: "https://images.tokopedia.net/img/cache/100/attachment/2019/11/7/75545163/75545163_f6ac6050-3872-48e8-b445-02a33e346061.jpg",
    text: "Shoes"
  },
];

const ButtonCard: React.FC<ButtonProps> = ({ text, img }) => (
  <div
    className="relative h-16 w-56 rounded-lg overflow-hidden cursor-pointer"
    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <p className="absolute top-0 left-0 py-[14px] px-[16px] text-sm font-bold text-white">{text}</p>
  </div>
);

const Trending = () => {
  return (
    <Container>
      <div className='flex gap-4'>
        {buttonCards.map((button, index) => (
          <ButtonCard key={index} img={button.img} text={button.text} />
        ))}
      </div>
    </Container>
  );
};

export default Trending;

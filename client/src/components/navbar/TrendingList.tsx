import { useEffect, useState } from 'react';

const TrendingList = () => {
  const [screenSize, setScreenSize] = useState('');

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1536) {
      setScreenSize('full');
    } else if (screenWidth >= 1280) {
      setScreenSize('xl');
    } else if (screenWidth >= 1024) {
      setScreenSize('lg');
    } else if (screenWidth >= 768) {
      setScreenSize('md');
    } else {
      setScreenSize('sm');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const renderFragrance = (fragrance: string) => {
    switch (screenSize) {
      case 'full':
        return fragrance;
      case 'xl':
        return truncateText(fragrance, 9);
      case 'lg':
        return truncateText(fragrance, 7);
      case 'md':
        return truncateText(fragrance, 5);
      case 'sm':
        return truncateText(fragrance, 3);
      default:
        return fragrance;
    }
  };

  const fragrances = [
    'Dior Sauvage',
    'Le Male Elixir',
    'Bleu De Chanel',
    'Nautica Voyage',
    'De Marly layton',
  ];

  return (
    <div className='w-full flex flex-row gap-6'>
      {fragrances.map((fragrance, index) => (
        <p
          key={index}
          className='text-sm text-zinc-500 hover:text-green-600 cursor-pointer'
        >
          {renderFragrance(fragrance)}
        </p>
      ))}
    </div>
  );
};

export default TrendingList;

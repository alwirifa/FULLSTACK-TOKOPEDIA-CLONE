import { useState, useEffect } from 'react';

const CountdownComponent = () => {
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const currentTime: Date = new Date(); // Menentukan tipe Date secara eksplisit

    const endTime: Date = new Date(currentTime);
    endTime.setDate(currentTime.getDate() + 1);
    endTime.setHours(0, 0, 0, 0);

    const interval = setInterval(() => {
      const now: Date = new Date(); // Menentukan tipe Date secara eksplisit
      const distance: number = endTime.getTime() - now.getTime(); // Memastikan tipe untuk operasi aritmatika

      const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ hours, minutes, seconds });

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex items-center gap-1'>
      <span className='flex justify-center items-center h-[20x] w-[20px] md:h-[34px] md:w-[34px] rounded-md text-xs md:text-sm font-bold text-white bg-rose-500'>{countdown.hours.toString().padStart(2, '0')}</span>
      <p className='text-lg font-semibold text-rose-500'>:</p>
      <span className='flex justify-center items-center  h-[20x] w-[20px] md:h-[34px] md:w-[34px]  rounded-md text-xs md:text-sm font-bold text-white bg-rose-500'>{countdown.minutes.toString().padStart(2, '0')}</span>
      <p className='text-lg font-semibold text-rose-500'>:</p>
      <span className='flex justify-center items-center  h-[20x] w-[20px] md:h-[34px] md:w-[34px]  rounded-md text-xs md:text-sm font-bold text-white bg-rose-500'>{countdown.seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default CountdownComponent;

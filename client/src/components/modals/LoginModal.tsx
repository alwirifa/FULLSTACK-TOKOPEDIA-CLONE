import React, { useCallback, useState, useContext, FormEvent, } from 'react';
import Modal from './Modal'; // Sesuaikan path ini dengan lokasi file Modal Anda
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { UserContext } from "../../context/userContext"
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  // ... other properties
}

interface LoginData {
  email: string;
  password: string;
}

type SetModalModeType = React.Dispatch<React.SetStateAction<boolean>>;

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  setIsLoginModalOpen: SetModalModeType;
  setIsRegisterModalOpen: SetModalModeType // Menambahkan prop ini
};

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose, setIsLoginModalOpen, setIsRegisterModalOpen }) => {
  const userContext = useContext(UserContext);
  const [data, setData] = useState<LoginData>({
    email: '',
    password: '',
  });

  
  // Periksa apakah userContext ada sebelum mengakses user
  if (!userContext) {
    throw new Error("Dashboard must be used within a UserContextProvider");
  }

  const { setUser } = userContext;

  
  const loginUser = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/login', { email, password });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        const user: User = {
          id: response.data.id, // assuming the response contains the user ID
          name: response.data.name, // assuming the response contains the user name
          email: data.email,
          // ... other properties from the response
        };
        setData({
          email: '',
          password: '',
        });
        setUser(user); // Pass the User object to setUser
        toast.success('Login Successful');
      }
    } catch (err) {
      console.log(err);
      toast.error('An error occurred while logging in.');
    }
  };


  const onToggle = useCallback(() => {
    setIsRegisterModalOpen(true);  // Membuka modal register
    setIsLoginModalOpen(false);   // Menutup modal login
  }, [setIsLoginModalOpen, setIsRegisterModalOpen]);

  return (

    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-[400px]">
        <div className='flex flex-col p-6 space-y-1'>
          <h3 className="font-semibold tracking-tight text-xl">Masuk</h3>
          <p className="text-sm text-zinc-500">Masukkan kredensial Anda untuk masuk.</p>
        </div>
        <form className="p-6 pt-0 grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="block text-sm font-medium leading-none text-zinc-950">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="gojosatoru@example.com"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-green-600"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="block text-sm font-medium leading-none text-zinc-950">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-green-600"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </form>
        <div className='p-6 pt-0 grid gap-4'>
          <button onClick={loginUser} type="submit" className="w-full py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-500">
            Masuk
          </button>
          <div className="relative">
            <div className="absolute mx-6 inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-zinc-500">Atau login dengan</span>
            </div>
          </div>
          <button type="submit" className="relative w-full py-2 text-sm font-semibold text-zinc-900 border hover:border-zinc-300 rounded-md ">
            <div className='absolute left-2'>
              <FcGoogle size={18} />
            </div>
            Google
          </button>
          <button type="submit" className="relative w-full py-2 text-sm font-semibold text-zinc-900 border hover:border-zinc-300 rounded-md">
            <div className='absolute left-2'>
              <FaGithub size={18} />
            </div>
            Github
          </button>
          <div className='flex  gap-1'>
            <p className='text-sm text-zinc-500'>Pertama kali menggunakan Tokopedia?</p>
            <p onClick={onToggle} className='text-sm text-green-600 hover:underline cursor-pointer'>Daftar</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;

import React, { useCallback, useState, FormEvent  } from 'react';
import { toast } from "react-hot-toast";
import Modal from './Modal';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";


interface RegisterData {
  name: string;
  email: string;
  password: string;
}

type SetModalModeType = React.Dispatch<React.SetStateAction<boolean>>;

type RegisterModalProps = {
  open: boolean;
  onClose: () => void;
  setIsLoginModalOpen: SetModalModeType;
  setIsRegisterModalOpen: SetModalModeType
};

const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose, setIsLoginModalOpen, setIsRegisterModalOpen }) => {
  const [data, setData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const response = await axios.post('/register', {
        name, email, password
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        setData({
          name: '',
          email: '',
          password: '',
        });
        toast.success('Login Successful');
        setIsRegisterModalOpen(false);  // Membuka modal register
        setIsLoginModalOpen(true)
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while registering.');
    }
  };
  

  console.log("LoginModal is open:", open);
  const onToggle = useCallback(() => {
    setIsRegisterModalOpen(false);  // Membuka modal register
    setIsLoginModalOpen(true);   // Menutup modal login
  }, [setIsLoginModalOpen, setIsRegisterModalOpen]);


  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col w-[400px]">
        <div className='flex flex-col p-6 space-y-1'>
          <h3 className="font-semibold tracking-tight text-xl">Daftar Sekarang</h3>
          <p className="text-sm text-zinc-500">Isi email Anda di bawah untuk membuat akun baru.</p>
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
              value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="username" className="block text-sm font-medium leading-none text-zinc-950">
              Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="ex: Gojo Satoru"
              className="h-10 w-full border rounded-md px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:border-green-600"
              value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
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
              value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
        </form>
        <div className='p-6 pt-0 grid gap-4'>
          <button onClick={registerUser} type="submit" className="w-full py-2 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-500">
            Daftar
          </button>
          <div className="relative">
            <div className="absolute mx-6 inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-zinc-500">Atau daftar dengan</span>
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
            <p className='text-sm text-zinc-500'>Sudah punya akun Tokopedia?</p>
            <p onClick={onToggle} className='text-sm text-green-600 hover:underline cursor-pointer'>Masuk</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;

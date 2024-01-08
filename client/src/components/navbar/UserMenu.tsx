import { useContext, useState } from 'react'
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import { UserContext } from '../../context/userContext';
import MenuItem from './MenuItem';
import axios from 'axios';
import Avatar from '../Avatar';

const UserMenu = () => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const userContext = useContext(UserContext);

  // Periksa apakah userContext ada sebelum mengakses user
  if (!userContext) {
    throw new Error();
  }

  const { ready, user } = userContext;

  if (!ready) {
    return (
      <div >
        <p>loading</p>
      </div>
    );
  }

  // Handle the case where user might be null
  const { setUser } = userContext;

  const handleLogout = async () => {
    await axios.post('/logout');
    setUser(null);
  };

  if (!user) {
    return (
      <div className='flex gap-3'>
        <button
          onClick={handleLoginClick}
          className='px-4 py-2 rounded-md text-sm font-semibold text-green-600 border border-green-600'
        >
          Login
        </button>
        <button
          onClick={handleRegisterClick}
          className='px-4 py-2 rounded-md text-sm font-semibold text-white bg-green-600 border border-green-600'
        >
          Daftar
        </button>

        <LoginModal
          open={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsRegisterModalOpen={setIsRegisterModalOpen}
        />

        <RegisterModal
          open={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsRegisterModalOpen={setIsRegisterModalOpen}
        />
      </div>
    );
  }
  const toggleOpen = () => {
    setIsOpen((value) => !value);
  }

  return (
    <div className='relative group'>
      <div className='flex items-center gap-2 cursor-pointer hover:bg-zinc-100 rounded-md px-4 py-2' onClick={toggleOpen} >
        <Avatar />
        <h2>{user.name}</h2>
      </div>

      {isOpen && (
        <div className='absolute top-10 mt-3 bg-white border-zinc-100 border px-2 py-1 rounded-md shadow-md text-sm'>
          <div className='flex flex-col cursor-pointer'>
          <MenuItem
              label="Product"
              onClick={handleLogout}
            />
            <MenuItem
              label="Logout"
              onClick={handleLogout}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
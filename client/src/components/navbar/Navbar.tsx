import Search from './Search'
import Logo from './Logo'
import UserMenu from './UserMenu'
import Categories from './Categories'
import Cart from './Cart'
import NavbarTop from './NavbarTop'
import TrendingList from './TrendingList'
import Container from '../Container'


const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-50 bg-white pb-2 border-b'>
      <NavbarTop />
      <div className='flex items-center px-4 py-2 md:px-8 md:py-3 gap-4'>
        <Logo />
        <Categories />
        <Search />
        <Cart />
        <UserMenu />
      </div>
      <Container>
        <TrendingList />
      </Container>
    </div>
  )
}

export default Navbar
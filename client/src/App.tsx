import { Routes, Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/userContext'
import Layout from './Layout'
import Error from './components/Error'
import IndexPage from './pages/indexPage/page'
import CreateProduct from './components/product/CreateProduct'
import EditProduct from './components/product/EditProduct'
import DeleteProduct from './components/product/DeleteProduct'
import ShowProduct from './components/product/ShowProduct'

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/error' element={<Error />} />
          {/* <Route path='/create' element={<CreateProduct />} />
          <Route path='/details/:id' element={<ShowProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/delete/:id' element={<DeleteProduct />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App

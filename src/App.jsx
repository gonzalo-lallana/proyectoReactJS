import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import { CartProvider } from './contex/CartContext'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/checkout/Checkout"




function App() {
  
  return (
    
      <CartProvider>
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/productos/:categoryId' element= {<ItemListContainer></ItemListContainer>}/>
              <Route path='/detail/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<Navigate to={'/'}/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    
  )
}

export default App

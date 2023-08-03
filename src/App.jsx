

import Header from './components/Header/header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { CartProvider } from './contex/CartContext'
import Cart from './components/Cart/Cart'


function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={
            <ItemListContainer />
          } />
          <Route path='/productos/:categoryId' 
          element= {<ItemListContainer></ItemListContainer>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App



import Header from './components/header/header'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

function App() {

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={
            <ItemListContainer />
          } />
          <Route path='/productos/:categoryId' 
          element= {<ItemListContainer></ItemListContainer>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App

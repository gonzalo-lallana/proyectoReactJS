import Header from './components/header/header'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './styles/styles.scss'
function App() {

  return (
    <div>
      <Header/>
      <ItemListContainer greeting= "Somos la tienda para todo aquel amante del boxeo, aqui encontraras los mejores productos de las mejores marcas tanto para entrenar o para la hora de un combate amateur o profesional."/>
    </div>
  )
}

export default App

import './App.css'
import { ShopCart } from './components/ShopCart'
import { list } from './listItem/listItem.js'

function App() {

  const inStock = list.filter(item => item.stock)
  const outOfStock = list.filter(item => !item.stock)

  return (
    <>
      <h2>Shop Cart 🛒</h2>
      <ShopCart items={ inStock } />
      <h2>Sold out ❌</h2>
      <ShopCart items={ outOfStock } />
    </>
  )
}

export default App

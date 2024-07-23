
import './App.css'
import Cart from './components/Cart'
import Items from './components/Items'
import Product from './components/Product'

function App() {

  return (
  <>
      <Product image="https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="MacBook" price="40000"/>
      <Product image ="https://images-na.ssl-images-amazon.com/images/I/719ZXZP+5LL._AC_UL600_SR600,400_.jpg" name="Pendrive" price="4000"/>
      <Cart/>
     
  </>
  )
}

export default App

import './App.css'
import Product from './Product'
import User from './User'

function App() {

  

  return (
    <>
      <h1>Main Component</h1>
      <Product name = "IPhone 14" price = {1000} specs={{ram: "8gb", storage : "256gb"}} category={["electronics", "mobile"]} /> 
      <Product name = "IPhone 13" price = {800} specs={{ram: "2gb", storage : "128gb"}}/> 
      <User />

    </>
  )
}

export default App

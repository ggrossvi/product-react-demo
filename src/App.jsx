import './App.css'
import Product from './Product'
import User from './User'
//import User from './User'

function App() {

  


  return (
    <>
      <h1>Main Component</h1>
      <Product name = "IPhone 14" price = {1000} /> 
      <Product name = "DSLR" price = {1500} />
      <User />

    </>
  )
}

export default App

import ProductItem from "./components/ProductItem"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="mx-auto lg:max-w-70/100 md:max-w-80/100 sm:max-w-90/100">
      <NavBar />
      <ProductItem />
    </div>
  )
}

export default App

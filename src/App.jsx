import { Route,  Routes } from "react-router"
import Home from "./Component/Home"
import { createContext, useState } from "react";
import Header from "./Component/Header";
export const ProductArray = createContext({
  cart: [],
  products: []
});
const style={
  container:'w-[1150px] mt-6 mb-6 mr-auto ml-auto min-h-screen'
}
function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <ProductArray.Provider value={[selectedProduct,setSelectedProduct]}>
      <Header/>
      <div className={style.container}> 
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
     </Routes>
     </div>
    </ProductArray.Provider>
  )
}

export default App

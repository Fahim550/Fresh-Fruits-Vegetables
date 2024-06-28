import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import Banner from './Banner'
import Popular from './Popular'
// import axios from 'axios'
import { products } from '../Data'
import { ProductArray } from '../App'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useContext(ProductArray);
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  const  fetchproducts=()=> {
   const allproducts=products;

   for (let product of products) {
    product.quantity = 0;
  }
  categorizeProducts(allproducts);
  setSelectedProduct({ ...selectedProduct, allproducts });
  

};
const categorizeProducts = (products) => {
  let tempFruits = [];
  let tempVegetables = [];
  for (let product of products) {
    if (product.type === "fruits" && product.popular === 1) {
      tempFruits.push(product);
    }
    if (product.type === "vegetables" && product.popular === 1) {
      tempVegetables.push(product);
    }
  }
  setFruits(tempFruits);
  setVegetables(tempVegetables);

};
  
  useEffect(()=>{
    if (selectedProduct.length === 0) {
      fetchproducts();
    } else {
      categorizeProducts(selectedProduct.products);
    }
    
  },[])
  
  
  return (
    <div>
        <Banner/>
        <Cards/>
        <Popular title="Popular Fruits" items={fruits}/>
        <Popular title="Popular Vegetables" items={vegetables}/>  
    </div>
  )
}

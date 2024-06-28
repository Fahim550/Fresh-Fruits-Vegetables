import React, { useContext } from "react";
import AddItem from "./AddItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductArray } from "../App";
import { products } from "../Data";

const style = {
  container: "mt-7 ",
  heading: "text-2xl font-bold mt-2.5 ",
  items: " items-center justify-between mt-4  ",
  item: "relative w-[280px] h-[360px] m-[1px] border-[1px] border-solid  border-slate-300 mb-3  shadow-xl rounded ",
  piContainer: "w-[253px] rounded flex items-center justify-center ",
  img: "w-[220px] h-[200px] rounded object-contain",
  dataContainer: "",
  name: "text-lg font-bold mb-1.5 text-black t-2.5 pb-2.5 pr-4 pl-4",
  weight: "text-base text-gray-800 mb-4 t-2.5 pb-2.5 pr-4 pl-4",
  price: "flex items-center t-2.5 pb-2.5 pr-4 pl-4",
  current: "text-base font-bold",
  was: "text-base text-red-600 ml-2.5 line-through",
  cta: "absolute -bottom-10 border-2 border-gray-900 w-full h-full  rounded-lg flex justify-center items-center opacity-0  bg-neutral-950 hover:text-white hover:bottom-0 hover:opacity-40 transition-all duration-300",
  btn: "border-2 border-white p-1 bg-neutral-950 rounded-md cursor-pointer",
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Popular({items,title}) {
  const [selectedProduct,setSelectedProduct] = useContext(ProductArray);
  // let head = Props.title;
  // let item = items;
  // console.log("items",items);
  // console.log("items",title);
  const addItem=(item)=>{
    // console.log("AddToCart",selectedProduct);
    setSelectedProduct({...selectedProduct,item})
    console.log("selectedProduct",selectedProduct);
  }
  return (
    // <Carousel responsive={responsive}>
    <div className={style.container}>
      <div className={style.heading}>
        {title}

        <div className={style.items}>
          <Carousel responsive={responsive}>
            {items.map((item) => (
            
                <div className={style.item} key={item.id}>
                  <div className={style.piContainer}>
                    <img src={item.pic} className={style.img} alt="" />
                  </div>
                  <div className={style.dataContainer}>
                    <div className={style.name}>{item.name}</div>
                    <div className={style.weight}>{item.weight}</div>
                    <div className={style.price}>
                      <div className={style.current}>৳{item.price}</div>
                      {item.was !== item.price ? (
                        <div className={style.was}>৳ {item.was}</div>
                      ) : null}
                    </div>
                  
                    <div className={style.cta}>
                    <div className={style.btn}>
                    <div className={style.btn1}>
                      {/* <button onClick={()=>addItem(item)}>Add</button> */}
                      <AddItem item={item} key={item.id}/>
                      </div>
                      </div>
                </div>
                  </div>
                </div>
              
            ))}
          </Carousel>
        </div>
        
      </div>
    </div>
    
  );
}

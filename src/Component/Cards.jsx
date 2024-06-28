import React from 'react'
import mangoImg from '../photos/Mango.png'
import vegImg from '../photos/Veggies.png'
import bananaImg from '../photos/Banana.png'
const style={
  cardsContainer:'mt-6 flex items-center justify-between',
  card:'w-[380px] h-[220px] rounded-md p-7 relative',
  caption:'font-sans text-2xl uppercase tracking-wide',
  mango:'h-[180px] -bottom-2.5 right-5 ',
  banana:'h-[170px] bottom-5 right-0',
  veg:'h-[120px] bottom-7 right-5',
  img:"absolute ",
  pink:'bg-pink-500',
  orange:'bg-orange-500',
  blue:'bg-blue-500'
}
export default function Cards() {
  return (
    <div className={style.cardsContainer}>
      <div className={`${style.card} ${style.pink}`}>
        <div className={style.caption}>
        Season's fresh & crispy, always!
        </div>
        <img className={`${style.mango} ${style.img}`} src={mangoImg} alt="" />
      </div>
      <div className={`${style.card} ${style.orange}`}>
        <div className={style.caption}>Your daily dose of goodness</div>
        <img className={`${style.veg} ${style.img}`} src={vegImg} alt="" />
      </div>
      <div className={`${style.card} ${style.blue}`}>
        <div className={style.caption}>Deals on bananas</div>
        <img className={`${style.banana} ${style.img}`} src={bananaImg} alt="" />
      </div>
    </div>
  )
}

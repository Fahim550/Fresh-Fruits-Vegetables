import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import vegImg from '../photos/Vegetables.png'
import appleImg from '../photos/Apple.png'
import fruitImg from '../photos/Fruits.png'
import beansImg from '../photos/Beans.png'
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
            showStatus={false}
      >
        <div>
          <img src={vegImg} alt="" />
          <div className="absolute top-12 left-12 text-3xl font-bold font-sans">Get Potatoes free</div>
          <div className="absolute top-28 left-12 text-xl"> 
            Buy vegetables and get potatoes free. Conditions apply
          </div>
          <div className="absolute top-72 left-12 text-black border-1 border-solid border-black rounded pt-1.5 pb-1.5 pl-3 pr-3 cursor-pointer">
            <Link to="/items/vegetables">Shop Now</Link>
          </div>
        </div>
        <div>
          <img src={appleImg} alt="" />
          <div className="absolute top-12 left-12 text-3xl font-bold font-sans">
            An apple a day keeps doctor away
          </div>
          <div className='absolute top-28 left-12 text-xl'>Royal Gala Apples</div>
          <div className="absolute top-72 left-12 text-black border-1 border-solid border-black rounded pt-1.5 pb-1.5 pl-3 pr-3 cursor-pointer">
            <Link to="/items/fruits">Shop Now</Link>
          </div>
        </div>
        <div>
          <img src={fruitImg} alt="" />
          <div className='absolute top-12 left-12 text-3xl font-bold font-sans'>
            Bite Into Everyday Wellness
          </div>
          <div className='absolute top-28 left-12 text-xl'>Start your day with a fruit</div>
          <div className="absolute top-72 left-12 text-black border-1 border-solid border-black rounded pt-1.5 pb-1.5 pl-3 pr-3 cursor-pointer">
            <Link to="/items/fruits">Shop Now</Link>
          </div>
        </div>
        <div>
          <img src={beansImg} alt="" />
          <div className='absolute top-12 left-12 text-3xl font-bold font-sans'>Rich in Protein</div>
          <div className='absolute top-28 left-12 text-xl'>20% discount on French Beans</div>
          <div className="absolute top-72 left-12 text-black border-1 border-solid border-black rounded pt-1.5 pb-1.5 pl-3 pr-3 cursor-pointer">
            <Link to="/items/vegetables">Shop Now</Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

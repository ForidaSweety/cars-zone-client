import img1 from '../../../assets/image/6.jpg'
import img2 from '../../../assets/image/5.jpg'
import img3 from '../../../assets/image/7.jpg'
import img4 from '../../../assets/image/4.jpg'

const NewArrival = () => {
    return (
        <div>
            <h1 className="text-6xl font-semibold text-center text-orange-700 mb-10 ">New Arrival</h1>
            <div className="carousel w-full h-96 p-16 bg-red-100">
  <div id="item1" className="carousel-item pl-20  gap-16 flex">
   <img src={img1} className=" h-80 w-1/2" />
   <div className='w-2/3'>
    <p>Name: Red Car</p>
    <p>Price: $30</p>
    <p>The Red toy car captures attention with its vibrant color and sleek design, igniting 
        the imagination of children and <br />
         collectors alike.Its bright red hue adds a burst of excitement to playtime, <br /> making it a popular choice for zooming around racetracks.</p>
   </div>
  </div> 
  <div id="item2" className="carousel-item pl-20  gap-16 flex">
  <img src={img2} className="h-80 w-1/2" />
   <div className='w-2/3'>
    <p>Name:Yellow Car</p>
    <p>Price: $50</p>
    <p>
The yellow toy car captures attention with its vibrant color and sleek design, igniting the imagination of children and collectors alike.
</p>
   </div>
  </div> 
  <div id="item3" className="carousel-item pl-20 pr-10 gap-20 flex">
  <img src={img3} className="h-80 w-1/2" />
   <div className='w-2/3'>
    <p>Name: Purple Remore Car</p>
    <p>Price: $70</p>
    <p>The Remote toy car captures attention with its vibrant color and sleek design, igniting the imagination of children and collectors alike.</p>
   </div>
  </div> 
  <div id="item4" className="carousel-item pl-20 pr-10 gap-20 flex">
  <img src={img4} className="h-80 w-1/2" />
   <div className='w-2/3'>
    <p>Name: Racing Car</p>
    <p>Price: $65</p>
    <p>The Yellow recing car captures attention with its vibrant color and sleek <br /> design  igniting the imagination of children and collectors alike.<br /> 
    With meticulous attention to detail, the yellow toy car offers a miniature <br /> yet captivating representation of the world of automobiles.
    </p>
   </div>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2 mb-20 bg-red-100 pt-8 ">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default NewArrival;
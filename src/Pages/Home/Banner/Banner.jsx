import banner from '../../../assets/image/banner.jpg'

const Banner = () => {

    return (
        
        <div className=" p-16 bg-red-100 rounded-lg">
  <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
  
    <div className='mr-10'>
    <h1 className="mb-6"><span className="text-7xl text-orange-700 font-extrabold">CarsZone</span></h1>

     <p className="mb-6 text-base">Imagination of young minds by crafting exceptional toy cars that inspire endless adventures. With our attention to detail, quality craftsmanship, and a wide range of exciting models, we are the driving force behind imaginative play and unforgettable memories.</p>
      <button className="btn btn-warning">explore us</button>
    </div>
    <div>
   <img src={banner} className=" rounded shadow-2xl h-96 w-full " />
   </div>
  </div>
</div>
       
    );
};

export default Banner;
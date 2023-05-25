import { Link } from "react-router-dom";

const Bike = ({toyss}) => {
    const {_id, imag, name, price, ratings} = toyss;
    return (
        <div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 ml-20 p-10'>
   <div className="card w-96 bg-base-100 shadow-xl p-16">
   <figure className="px-10 pt-10">
       <img src={imag} className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
       <h2 className="card-title">Name:{name}</h2>
       <p>Price: ${price}</p>
       <p>Rating :{ratings}</p>
       <div className="card-actions">
       <Link to={`/bikedetails/${_id}`}>
        <button className="btn btn-sm">View Details</button>
        </Link>
       </div>
     </div>
   </div>
   </div>
   </div>
    );
};

export default Bike;
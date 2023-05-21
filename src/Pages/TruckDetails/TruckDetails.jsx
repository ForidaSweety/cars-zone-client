import { useLoaderData } from "react-router-dom";

const TruckDetails = () => {
    const trucks = useLoaderData();
    const {imag , name ,price, ratings,description} = trucks;
    return (
        <div>
             <div className='ml-20 p-10 mb-20'>
                <div className="card bg-base-100 shadow-xl h-full w-3/4">
                    <figure className="px-10 pt-10">
                        <img src={imag} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title mt-4">Name:{name}</h2>
                        <div className="text-start">
                        <p>Price: ${price}</p>
                        <p>Rating :{ratings}</p>
                        <p>Description: {description }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruckDetails;
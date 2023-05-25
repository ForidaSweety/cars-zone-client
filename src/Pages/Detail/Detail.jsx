//import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const Detail = () => {
   
    const detail = useLoaderData();
    const { image, name, price, quantity, saller, ratings, sub_category, description } = detail;


    return (
        <div>
            <div className='ml-20 p-10 mb-20'>
                <div className="card bg-base-100 shadow-xl h-full w-3/4">
                    <figure className="px-10 pt-10">
                        <img src={image} className="rounded-xl" />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title mt-4">Name:{name}</h2>
                        <p>{description}</p>
                        <div className="text-start">
                            <p>Price: ${price}</p>
                            <p>Rating :{ratings}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Category: {sub_category}</p>
                            <p>Saller: {saller}</p>

                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Detail;
import { useEffect, useState } from "react";
import Bike from "../Bike";

const AllBike = () => {
    const [toysscard, setToysscard] =useState([]);
    useEffect(() =>{
        fetch('http://localhost:5005/bikes')
            .then(res => res.json())
            .then(data => setToysscard(data));
    },[])
    return (
        <div className="mb-20 flex">
        {
            toysscard.map(toyss =><Bike
                key={toyss._id}
                toyss={toyss}
            ></Bike>)

        }
      </div>
    );
};

export default AllBike;
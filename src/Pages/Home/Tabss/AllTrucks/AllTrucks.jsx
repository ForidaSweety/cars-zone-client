import { useEffect, useState } from "react";
import Trucks from "../Trucks";

const AllTrucks = () => {

    const [toyscard, setToyscard] =useState([]);
    useEffect(() =>{
        fetch('https://cars-toy-server.vercel.app/trucks')
            .then(res => res.json())
            .then(data => setToyscard(data));
    },[])
    return (
        <div className="mb-20 flex">
        {
            toyscard.map(toys =><Trucks
            key={toys._id}
            toys={toys}
            ></Trucks>)
        }
    </div>
    );
};

export default AllTrucks;
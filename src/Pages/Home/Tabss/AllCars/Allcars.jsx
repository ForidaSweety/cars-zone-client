import { useEffect, useState } from "react";
import Cars from "../cars";

const Allcars = () => {

    const [toyscard, setToyscard] =useState([]);
    useEffect(() =>{
        fetch('https://cars-toy-server.vercel.app/cars')
            .then(res => res.json())
            .then(data => setToyscard(data));
    },[])
    return (
        <div className="mb-20 flex">
        {
            toyscard.map(toys =><Cars
            key={toys._id}
            toys={toys}
            ></Cars>)
        }
    </div>
    );
};

export default Allcars;
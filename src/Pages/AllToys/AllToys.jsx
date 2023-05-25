import { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToys = () => {
    //const [selected, setSelected] = useState(options[0]);
    // const [toy, setToy] = useState();
    // const [loading, setLoading] = useState(true);
    const [toyscard, setToyscard] = useState([]);
    const [searchToys, setSearchToys] = useState("");


    useEffect(() => {
        fetch('http://localhost:5005/carsInfo')
            .then(res => res.json())
            .then(data => setToyscard(data));
    }, [])


    const handleToySrchBtn = () => {
        fetch(`http://localhost:5005/toysearch/${searchToys}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToyscard(data);
            });
    };
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center mb-5">All toys info</h1>
                <div className="search-box bg-slate-400 p-2 text-center">
                    
                    <input
                        onChange={(e) => setSearchToys(e.target.value)}
                        type="text"
                        className="p-1"
                    />{" "}
                    <button className="btn btn-sm" onClick={handleToySrchBtn}>Search</button>
                </div>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name of toys</th>
                            <th>Price</th>
                            <th >Saller</th>
                            <th >Quantity</th>
                            <th>Sub category</th>
                            <th className="w-36"></th>

                        </tr>

                    </thead>
                </table>

                <div className="mb-20">
                    {
                        toyscard.map(toys => <AllToyCard
                            key={toys._id}
                            toys={toys}
                           
                        ></AllToyCard>)
                    }
                </div>
            </div>

            {/* <div className="ml-72 mb-9">
                <Link to={`/carsinfo/${_id}`}>
                <button className="btn btn-warning ">View Details</button>
                </Link>

            </div> */}
           {/* <div className="flex justify-center mb-10">
           <DetailsBtn></DetailsBtn>
           </div> */}
        </div>
    );
};

export default AllToys;
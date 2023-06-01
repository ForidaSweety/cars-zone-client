
import { useEffect, useState } from "react";
import SingleToyDetail from "../SingleToyDetail/SingleToyDetail";


const SingleToy = () => {
    const [singletoy, setSingletoy] = useState([]);

    useEffect(() => {
        fetch('https://cars-toy-server.vercel.app/carsInfo')
            .then(res => res.json())
            .then(data => setSingletoy(data));
    }, [])
    const handleDelete = id => {
        const proceed = confirm('You want to delete!?');
        if (proceed) {
            fetch(`https://cars-toy-server.vercel.app/toysearch/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = singletoy.filter(toys => toys._id !== id);
                        setSingletoy(remaining);
                    }
                })
        }
    }


    return (
        <div>
          
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>name</th>
                            <th>saller</th>
                            <th>Price</th>
                            <th>category</th>
                            <th>quantity</th>
                            <th>ratings</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singletoy.map(single => <SingleToyDetail
                                key={single._id}
                                single={single}
                                handleDelete={handleDelete}
                            ></SingleToyDetail>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SingleToy;
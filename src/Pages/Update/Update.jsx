import { useLoaderData } from "react-router-dom";


const Update = () => {
    const updates = useLoaderData()
    const {_id,name, price, quantity, description } = updates;


    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;


        const updateToy = { name, quantity,price, description}
        

        //send data to the server
        fetch(`https://cars-toy-server.vercel.app/carsinfo/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Successfully Update')
                }
            })
    }


    return (
        <div>
           <h2 className="text-center font-semibold from-orange-300 mb-6">Update Toy : {name}</h2>
            <form onSubmit={handleUpdateToy} className="bg-red-100 p-9 mb-32 rounded ml-10">
                <div className="md:flex mb-6">
                <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="integer" name="price" defaultValue={price} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text"> Quantity</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="integer" name="quantity" defaultValue={quantity}  className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
               
              
                    
                <div className="mb-6">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" />
                        </label>
                    </div>
                  
               
                </div>

                <input type="submit" className="btn btn-block mb-20" value="Update toy" />

            </form>
        </div>
    );
};

export default Update;
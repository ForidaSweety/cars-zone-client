
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const AddToy = () => {
    const {user} =useContext(AuthContext);
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const saller = form.saller.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const category = form.category.value;
        const email = user?.email;

        const newToys = { name, quantity, saller, price, description, image,category,email }
        //console.log(newToys);

        //send data to the server
        fetch(`http://localhost:5005/carsinfo`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToys)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('New toy added')
                }
            })
    }
    return (
        <div className="bg-pink-100 p-24 mb-20">
            <h2 className="text-4xl text-center text-red-600 font-bold mb-8">Add Toys</h2>

            <form onSubmit={handleAddCoffee}>
                {/* form(name ,quantity) */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text"> Quantity</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="integer" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form (saller, Price)*/}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Saller</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="saller" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form(description,price) */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="integer" name="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Sub-category </span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" className="btn btn-block mb-20" value="Add new toy" />

            </form>
        </div>

    );
};

export default AddToy;
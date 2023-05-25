// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const AllToyCard = ({ toys }) => {

    const {_id,name, price, quantity, saller, sub_category } = toys
    return (
       
            <table className="table w-full">
                <div>
                    <tr >
                    <th></th>
                        <td className=" lg:w-72" scope="row">{name}</td>
                        <td className=" lg:w-48" scope="row">${price}</td>
                        <td className=" lg:w-48" scope="row">{saller}</td>
                        <td className="lg:w-52" scope="row">{quantity}</td>
                        <td className=" lg:w-32" scope="row">{sub_category}</td>
                        
                        <td className="w-42">
                            <Link to={`/singletoy/${_id}`}>
                            <button className="btn btn-outline">Details</button>
                            </Link>
                            </td>

                    </tr>
                
{/*   <td className="w-52" scope="row">{name}</td>
                        <td className="w-48" scope="row">${price}</td>
                        <td className="w-52" scope="row">{saller}</td>
                        <td className="w-72" scope="row">{quantity}</td> */}
                </div>
            </table>
      
    );
};

export default AllToyCard;
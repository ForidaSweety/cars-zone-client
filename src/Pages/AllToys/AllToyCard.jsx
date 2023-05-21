// import { Link } from "react-router-dom";

const AllToyCard = ({ toys,handleDelete }) => {

    const {_id,name, price, quantity, saller, sub_category } = toys
    return (
       
            <table className="table w-full">
                <div>
                    <tr >
                    <th>
                 <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                                   X
                                </button>
                            </th>
                        <td className="w-36" scope="row">{name}</td>
                        <td className="w-36" scope="row">${price}</td>
                        <td className="w-40" scope="row">{saller}</td>
                        <td className="w-48" scope="row">{quantity}</td>
                        <td className="w-" scope="row">{sub_category}</td>
                        <td className="w-20" scope="row">
                        </td>
                    </tr>

                </div>
            </table>
      
    );
};

export default AllToyCard;
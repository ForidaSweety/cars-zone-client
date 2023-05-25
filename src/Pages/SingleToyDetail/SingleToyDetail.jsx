import { Link } from "react-router-dom";

const SingleToyDetail = ({single,handleDelete}) => {
    const {_id,image,name, price, quantity, saller, ratings,sub_category } = single

    return (
       
                  <tr>
              

        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {image && <img src={image}/>}
                </div>
            </div>
        </td>
        <td>
            {name}
        </td>
        <td>{saller}</td>
        <td>${price}</td>
        <td>{sub_category}</td>
        <td>{quantity}</td>
        <td>{ratings}</td>
        <th>
                 <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-outline btn-warning">
                                   Delete
                                </button>
                            </th>
        <th>
                 <Link to={`/update/${_id}`}>
                 <button className="btn btn-sm btn-outline btn-accent">
                                 Update
                                </button>
                 </Link>
                            </th>
    </tr>
       
    );
};

export default SingleToyDetail;
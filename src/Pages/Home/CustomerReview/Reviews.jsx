import person1 from "../../../assets/image/person1.jpg"
import person2 from "../../../assets/image/person2.jpg"
import person3 from "../../../assets/image/person3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Reviews = () => {
    return (
        <div>
            <h1 className="text-6xl font-semibold text-center text-orange-700 mb-10 ">Reviews</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 ml-20 p-10">
                <div className="card w-75 bg-base-100 items-center text-center shadow-xl" >

                    <div className="m-3 flex">
                        <img className="h-10 w-10 rounded-full mr-4" src= {person1} />
                        <h2>Alisa parrk </h2>
                    </div>
                    <p className="mb-6">Car Toys has a rating is high indicating that most customers are generally dissatisfied with their purchases.</p>
                    <p>
                       <span className='text-amber-400'>
                       <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                       </span>
                    </p>

                </div>
                <div className="card w-75 bg-base-100 items-center text-center shadow-xl">

                    <div className="m-3 flex">
                        <img className="h-10 w-10 rounded-full mr-4" src={person2} />
                        <h2>Mr.Loreson</h2>
                    </div>
                    <p className="mb-6">Car Toys has a rating is high indicating that most customers are generally dissatisfied with their purchases</p>
                    <p>
                       <span className='text-amber-400'>
                       <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                       </span>
                    </p>

                </div>
                <div className="card w-75 bg-base-100 items-center text-center shadow-xl">

                    <div className="m-3 flex">
                        <img className="h-10 w-10 rounded-full mr-4" src={person3} />
                        <h2>Jhon kuper</h2>
                    </div>
                    <p className="mb-6">Car Toys has a rating is high indicating that most customers are generally dissatisfied with their purchases</p>
                    <p>
                       <span className='text-amber-400'>
                       <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                       </span>
                    </p>

                </div>
            </div>

        </div>

    );
};

export default Reviews;
// import { useEffect, useState } from 'react';
// import DetailsBtn from '../DetailsBtn/DetailsBtn';

// const AllToysDetails = () => {

//     const [toyscard, setToyscard] =useState([]);
//     useEffect(() =>{
//         fetch('http://localhost:5005/carsinfo')
//             .then(res => res.json())
//             .then(data => setToyscard(data));
//     },[])
//     return (
//         <div className="mb-20 flex">
//             {
//                 toyscard.map(alltoy =><DetailsBtn 
//                     key={ alltoy._id}
//                     alltoy={alltoy}
//                     ></DetailsBtn> )

//             }
//         {/* {
//             toyscard.map(toys =><Cars
//             key={toys._id}
//             toys={toys}
//             ></Cars>)
//         } */}
//     </div>
//     );
// };

// export default AllToysDetails;
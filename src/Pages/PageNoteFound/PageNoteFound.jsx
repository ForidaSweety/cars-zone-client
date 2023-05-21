import { Link } from 'react-router-dom';
import img from '../../assets/image/6.jpg'


const PageNoteFound = () => {
    return (
        <div className='m-5 d-flex align-center justify-center'>
        <div>
         <img className='mx-auto' src={img} alt="" />
        <h1 className=' text-7xl font-bold text-center'>404</h1>
         <h1 className='text-5xl font-semibold text-center '> Not Found</h1>
        </div>

         <div className=' text-center justify-center mt-5'>
             <Link to={'/'}><button className='btn btn-info'>Back to Home</button></Link>

         </div>
     </div>
    );
};

export default PageNoteFound;
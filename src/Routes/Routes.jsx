import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CarDetails from "../Pages/CarDetails/CarDetails";
import BikeDetails from "../Pages/BikeDetails/BikeDetails";
import TruckDetails from "../Pages/TruckDetails/TruckDetails";
import AllToyCard from "../Pages/AllToys/AllToyCard";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import PageNoteFound from "../Pages/PageNoteFound/PageNoteFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <PageNoteFound></PageNoteFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'carsdetails/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5005/cars/${params.id}`)
            },
            {
                path: '/bikedetails/:id',
                element: <PrivateRoute><BikeDetails></BikeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5005/bikes/${params.id}`)
            },
            {
                path: '/truckdetails/:id',
                element: <PrivateRoute><TruckDetails></TruckDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5005/trucks/${params.id}`)
            },
            {
                path: '/carsInfo/:id',
                element: <AllToyCard></AllToyCard>,
                loader: ({ params }) => fetch(`http://localhost:5005/carsinfo/${params.id}`)

            },
            // {
            //     path: '/carsinfo',
            //     element: <AllDetails></AllDetails>

            // },
            {
                path: 'addtoy',
                element: <AddToy></AddToy>
            }


            //allToys theke jokhon details e click korbo seta private route hobe 


            // {
            //     path:'/carsinfo/:id',
            //     element:<AllCarsDetail></AllCarsDetail>,
            //     loader: ({params}) => fetch (`http://localhost:5005/trucks/${params.id}`)

            // }
        ]
    },
]);

export default router;
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

import Detail from "../Pages/Detail/Detail";

import SingleToy from "../Pages/SingleToy/SingleToy";
import Update from "../Pages/Update/Update";


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
                path: 'mytoy',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>

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
                loader: ({ params }) => fetch(`https://cars-toy-server.vercel.app/cars/${params.id}`)
            },
            {
                path: '/bikedetails/:id',
                element: <PrivateRoute><BikeDetails></BikeDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cars-toy-server.vercel.app/bikes/${params.id}`)
            },
            {
                path: '/truckdetails/:id',
                element: <PrivateRoute><TruckDetails></TruckDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cars-toy-server.vercel.app/trucks/${params.id}`)
            },
            {
                path: '/carsInfo/:id',
                element: <AllToyCard></AllToyCard>,
                loader: ({ params }) => fetch(`https://cars-toy-server.vercel.app/carsinfo/${params.id}`)

            },
            
            {
                path: 'singletoy/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://cars-toy-server.vercel.app/carsinfo/${params.id}`)

            },
            {
                path: 'addtoy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'update/:id',
                element:<Update></Update>,
                loader:({ params }) => fetch(`https://cars-toy-server.vercel.app/carsinfo/${params.id}`)
            }
            
        ]
    },
]);

export default router;
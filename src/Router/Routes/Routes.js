import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../../../assignment-eleventh-client/src/Pages/ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AlServices from "../../Pages/Home/Home/Services/AllServices/AlServices";
import ServiceDetails from "../../Pages/Home/Home/Services/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import EditReview from "../../Pages/MyReviews/EditReview/EditReview";
import Myreviews from "../../Pages/MyReviews/Myreviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <AlServices></AlServices>
            },

            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/editreview/${params.id}`)


            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }

]);

export default router;
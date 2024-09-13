import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/Home.jsx";
import ProductDetail from "../components/ProductDetail.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
            path:"/",
            element:<Home/>,
        },
            {path:"/products/:id", element:<ProductDetail/>}
        ]
    }
])
export default router;
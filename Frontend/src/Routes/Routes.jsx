import Add from "../Pages/Admin/Add/Add";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Basket from "../Pages/Site/Basket/Basket";
import Detail from "../Pages/Site/Details/Detail";
import Home from "../Pages/Site/Home/Home";
import SiteRoot from "../Pages/Site/SiteRoot";

const ROUTES= [
    {
        path:"/",
        element:<SiteRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"details/:id",
                element:<Detail/>
            },
            {
                path:"basket",
                element:<Basket/>
                
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<Add/>
            }
        ]
    }
]
export default ROUTES
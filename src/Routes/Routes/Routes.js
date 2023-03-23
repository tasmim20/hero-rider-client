import { createBrowserRouter } from "react-router-dom"
import Header from "../../component/Header/Header";
import Home from "../../component/Home/Home";
import Main from "../../Layout/Main";





const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            
            {
                path:'/',
                element:<Home></Home>,
              
            },
            {
                path:'/header',
                element:<Header></Header>
              
            },
            
         
        ]
    }
])
export default router;
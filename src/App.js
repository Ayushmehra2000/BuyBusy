
import {Login} from "./components/loginorsignuppage/login"
import { SignUp } from "./components/loginorsignuppage/createAccount";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar";
import { BuyBusyContext} from "./components/buybusyContent/BuybusyContent";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Orders } from "./components/Myorders/myorders";
import { ErrorHandling } from "./components/pageNotfound/pageNotFound";
import Protected from "./components/protectectRoute/protectedRoute";
function App() { 
  const router = createBrowserRouter([
    {path:"/",
     element:<Navbar />,
     errorElement:<ErrorHandling />,
     children:[
      { index: true,element :<Home />},
      { path: "/login" , element:<Login />},
      { path: "/signup" , element:<SignUp />},
      { path: "/cart" , element:<Protected><Cart /></Protected>},
      { path: "/myorder" , element:<Orders />},
     ]
    }
  ])
  
  return (
    <BuyBusyContext >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </BuyBusyContext>
  );
}

export default App;

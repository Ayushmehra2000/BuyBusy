import "./navbar.css"
import { FiHome , FiShoppingCart, FiLogIn } from "react-icons/fi";
import { BsFillBasket3Fill } from "react-icons/bs";
import { Outlet ,NavLink } from "react-router-dom";
import { useValue } from "./buybusyContent/BuybusyContent";
export function Navbar(){
    const {isLoggedIn ,logout} = useValue();

    const handleLogout=async()=>{
      await logout()
    }
    return(<>
    <div id="Header">
        <div id="logo"><span>BuyBusy</span></div>
        <div id="Menu">
            <NavLink style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : null
            } to="/">
                <div className="home-menu menu-items"><FiHome /><span> Home</span></div>
            </NavLink>
            {isLoggedIn?<><NavLink style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : null
            } to="/myorder"><div className="Order-menu menu-items"><BsFillBasket3Fill /><span> My Orders</span></div></NavLink>
            <NavLink style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : null
            } to="/cart"><div className="Cart-menu menu-items"><FiShoppingCart /><span> Cart</span></div></NavLink></>:null}

            {isLoggedIn? <NavLink style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : null
            } to="/login"><div className="Cart-menu menu-items" onClick={handleLogout}><FiLogIn /><span>Logout</span></div></NavLink>:
            <NavLink style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                  }
                : null
            } to="/login"><div className="Cart-menu menu-items"><FiLogIn /><span>Login</span></div></NavLink>}
            
        </div>
    </div>
    <Outlet />
    </>);
}
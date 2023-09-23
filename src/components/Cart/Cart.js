import { NavLink } from "react-router-dom";
import { useValue } from "../buybusyContent/BuybusyContent";
import "./cart.css";
import { CartList } from "./cartitemList/cartItemList";
export function Cart(){
    const {total,handlePurchase,cartdata} = useValue();
    return(<>
    <div id="cart-aside">
            <div id="total">
                <h2>Total Price</h2>
                <strong><span>&#8377;{total}</span></strong>
            </div>
            <div id="purchase">
                <NavLink to="/myorder" ><button className="purchasebutton" type="submit" onClick={handlePurchase}>Purchase</button></NavLink>
            </div>
        </div>
    <div className="cart-container">
        {cartdata.length > 0?(<div id="data-display">
            <CartList />
        </div>):(<div id="data-display">
            <h1 style={{textAlign:"center"}}>No Item in cart</h1>
        </div>)}
    </div>
    </>);
}
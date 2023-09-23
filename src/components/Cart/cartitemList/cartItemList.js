import { useValue } from "../../buybusyContent/BuybusyContent";
import { CartItem } from "../CartItem/cartItem";
import "./cartItemList.css"
export function CartList(){
    const {cartdata} = useValue()
    return(
        <>
        <div id="card-item-container">
            {cartdata.map((d,i)=><CartItem d={d} key={i}/>)}
        </div>
        </>
    )
}
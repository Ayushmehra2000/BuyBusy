import { useState } from "react";
import { useValue } from "../../buybusyContent/BuybusyContent";
import "./cartitem.css"
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
export function CartItem({d}){
    const { handlequantityupdateindb,handleRemoveCart} = useValue();
    const [count, setCount] = useState(d.quantity);
    
    const handlequantity=(check)=>{
        if(check === "a"){
            setCount(count+1);
            handlequantityupdateindb({...d,quantity: count});
        }
        else{
            if(count>1){
                setCount(count-1);
                handlequantityupdateindb({...d,quantity: count});
            }
        }
    }
    return(
        <>
        <div id="card-item-containers">
            <div id="item-images">
                <img src={d.productImage} alt={d.ProductName}  />
            </div>
            <div id="item-details">
                <div className="details-items">{d.ProductName}</div>
                <div className="item-prices"><div>&#8377; {d.ProductPrice}</div><div className="quantity"><span>Quantity</span> <span className="add-sub"><GrSubtractCircle onClick={()=>handlequantity("s")} /></span> {d.quantity} <span className="add-sub"><GrAddCircle onClick={()=>handlequantity("a")} /></span></div></div> 
                <button onClick={()=>{handleRemoveCart(d.cartid)}} >Remove From Cart</button>
            </div>
        </div>
        </>
    )
}
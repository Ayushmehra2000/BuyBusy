import { useValue } from "../buybusyContent/BuybusyContent";
import "./myorders.css";
import { Bill } from "./bill/Bill";
export function Orders(){
    const {purchasedata , purchaselength} = useValue();
    return(<>
    <div className="container"><h1 style={{textAlign:"center"}}>Orders</h1></div>
    {purchaselength<1? (
    <div className="cart-container">
        {purchasedata.map((data,i)=> <Bill data={data} key={i}/>)}
    </div>
    ):(<div className="cart-container">
        <h1 style={{textAlign:"center"}} >No Orders Purchase</h1><br/>
    </div>)}
    
    </>);
}
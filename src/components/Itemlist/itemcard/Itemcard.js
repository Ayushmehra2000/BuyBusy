import "./Itemcard.css";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useValue } from "../../buybusyContent/BuybusyContent";

export function ItemCard({d}){
    const {isLoggedIn,currentlogincustomer} = useValue();
    const navigate = useNavigate();
    const handleaddcart = async(addacart)=>{
        const docRef = await addDoc(collection(db, "Cart "+ currentlogincustomer), {quantity:1,totalPrice:d.ProductPrice,...addacart});
    }
    const checkfirstandthenadd = (d)=>{
        if (!isLoggedIn) {
            return navigate("/login");
        }else{
            handleaddcart(d);
        }
    }
    return(<>
    <div id="Card-container">
        <div id="item-image">
            <img src={d.productImage} alt={d.ProductName} />
        </div>
        <div id="item-detail">
            <div className="details-item">{d.ProductName}</div>
            <div className="item-price">&#8377;{d.ProductPrice}</div>
            <button onClick={()=>checkfirstandthenadd(d)}>Add to cart</button>
        </div>
    </div>
    </>);
}
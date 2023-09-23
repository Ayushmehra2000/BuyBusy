import { createContext,useState, useContext, useEffect } from "react";
import { collection, doc,updateDoc,deleteDoc, onSnapshot,addDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,  signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { Navigate } from "react-router-dom";


const buyBusyContext = createContext();

export function useValue() {
    const value = useContext(buyBusyContext);
    return value;
}

export function BuyBusyContext({children}){
    const [isLoggedIn , setIsloggedIn]  =useState(false);
    const [productdata , setProductdata] = useState([]);
    const [cartdata , setCartdata] = useState([]);
    const [count,setCount]=useState(1);
    const [total,setTotal] = useState(0);
    const [purchasedata,setPurchasedata] = useState([]);
    const [purchaselength, setPurchaselength] = useState(0);
    const [currentlogincustomer, setCurrentlogincustomer] = useState("");
    const [Error, setError] = useState("");

    // firebase Authentication for user login , logout , signup
    const Signup= (email, password)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(()=> {return <Navigate to="/" />}).catch((error)=> setError(error.code));
    }
    const Login= (email, password)=>{
        setError("");
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(()=> {return <Navigate to="/" />}).catch((error)=> setError(error.code)); 
        
    }
    const logout = ()=>{
        signOut(auth);
    }
    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsloggedIn(true);
                setCurrentlogincustomer(user.uid);
            } else {
                setIsloggedIn(false);
                setCurrentlogincustomer("");
            }
        })
    },[]);


    // cart function starts from here 
    const handlequantityupdateindb = async(data)=>{
        const updateRef = doc(db,"Cart "+ currentlogincustomer,data.cartid);
        await updateDoc(updateRef,{...data,totalPrice: data.quantity*data.ProductPrice});
    }
    const handleRemoveCart = async(id)=>{
        await deleteDoc(doc(db,"Cart "+ currentlogincustomer,id));
    }

    // handle purchase here 
    const addPurchasedata = async(cartdata,total)=>{
        const docRef = await addDoc(collection(db, "purchasedata "+ currentlogincustomer), {
                                                                                            total:total,
                                                                                            Date:new Date().getDate(),
                                                                                            Month:new Date().getMonth(),
                                                                                            Year:new Date().getFullYear()
                                                                                            ,cartdata});
    }
    const handlePurchase = ()=>{
        addPurchasedata(cartdata,total);
        setTotal(0);
        cartdata.map((data)=> handleRemoveCart(data.cartid));
    }
    // Calculate Total Price 
    useEffect(()=>{
        setTotal(0);
        cartdata.map((data)=> {return setTotal((prev)=>prev+data.totalPrice)});
    },[cartdata])

    // getting realtime from firebase 
    const getDataofCart = ()=>{
        const unsub = onSnapshot(collection(db, "Cart "+currentlogincustomer), (Snapshot) => {
            const data = Snapshot.docs.map((doc) => (
            {
              cartid: doc.id,
              ...doc.data()
            }));
            setCartdata(data,...cartdata);
        });
    };
    const getPurchasedata = ()=>{
        const unsub = onSnapshot(collection(db, "purchasedata "+currentlogincustomer), (Snapshot) => {
            const data = Snapshot.docs.map((doc) => ({
              Purchaseid: doc.id,
              ...doc.data()
            }));
            setPurchasedata(data,...productdata);
        });

        setPurchaselength(purchasedata.length);
    };
    const getDataofProduct = ()=>{
        const unsub = onSnapshot(collection(db, "Products"), (Snapshot) => {
            const data = Snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }));
            setProductdata(data,...productdata);
        });
    };
    useEffect(()=>{
        getDataofProduct();
        getDataofCart();
        getPurchasedata();
    },[]);
    return(
        <buyBusyContext.Provider value={{
            isLoggedIn, setIsloggedIn,currentlogincustomer,
            productdata, cartdata,count,setCount,handlequantityupdateindb,handleRemoveCart,handlePurchase,
            purchaselength,purchasedata,total,setTotal ,Signup ,Login ,logout , Error, setError
        }}>
            {children}
        </buyBusyContext.Provider>
    );   
}
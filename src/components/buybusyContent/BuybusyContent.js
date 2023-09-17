import { createContext,useState, useContext, useEffect } from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebase";
import { data } from "../../data/data";

const buyBusyContext = createContext();

export function useValue() {
    const value = useContext(buyBusyContext);
    return value;
}

export function BuyBusyContext({children}){
    const [isLoggedIn , setIsloggedIn]  =useState (true);
    const [userdata, setUserdata] = useState([]);

    const getDataofUser = ()=>{
        const unsub = onSnapshot(collection(db, "Userdata"), (Snapshot) => {
            const data = Snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }));
            setUserdata(data,...userdata);
        });
    };

    useEffect(()=>{
        getDataofUser();
    },[]);
    return(
        <buyBusyContext.Provider value={{
            isLoggedIn, setIsloggedIn, userdata, setUserdata , data
        }}>
            {children}
        </buyBusyContext.Provider>
    );   
}
import "./listitem.css"
import { ItemCard } from "./itemcard/Itemcard";
import { useValue } from "../buybusyContent/BuybusyContent";

export function ListItem(){
    const {data} = useValue();
    return(<>
    <div id="List-items">
        {data.map((d,i)=><ItemCard d={d} key={i}/>)}
    </div>
    </>)
}
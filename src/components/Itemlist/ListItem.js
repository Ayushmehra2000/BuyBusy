import "./listitem.css"
import { ItemCard } from "./itemcard/Itemcard";

export function ListItem({category,length,selectedprice,filteredList}){
    return(<>
    <div id="List-items">
        {filteredList.map((d,i)=>{
            return(<>
            {length === 0 && selectedprice>d.ProductPrice ? (<ItemCard d={d} key={i}/>):(<>{category.includes(d.productcategory) && selectedprice>d.ProductPrice?(<ItemCard d={d} key={i}/>):(null)}</>)}
            </>)
        }
        )}
    </div>
    </>)
}
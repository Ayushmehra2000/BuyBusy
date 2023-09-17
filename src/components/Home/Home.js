import { ListItem } from "../Itemlist/ListItem";
import { Navbar } from "../Navbar";
import "./home.css"
export function Home({isLoggedIn , setIsloggedIn}){
    return(<>
    <div id="home-container">
        <div id="search-Box" >
            <input type='text' placeholder = "Search By Name"/>
        </div>
        <div id="aside">
            <div id="range">
                <h2>Filter</h2>
                <h3>Price: 2000</h3>
                <input type="range" />
            </div>
            <div id="category">
                <h2>Categories</h2>
                <ul>
                    <li><input type="checkbox" /><span>Men's</span></li>
                    <li><input type="checkbox" /><span>Women's</span></li>
                    <li><input type="checkbox" /><span>Electronic</span></li>
                    <li><input type="checkbox" /><span>Foods</span></li>
                    <li><input type="checkbox" /><span>Kids</span></li>
                    <li><input type="checkbox" /><span>Furniture</span></li>
                </ul>
            </div>
        </div>
        <div id="data-display">
            <ListItem />
        </div>
    </div>
    </>);
}
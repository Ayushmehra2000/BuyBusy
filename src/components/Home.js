import { ListItem } from "./ListItem";
import "./home.css"
export function Home(){
    return(<>
    <div id="home-container">
        <div id="aside">
            <div id="range">
                <h3>Price-range</h3>
                <input type="range" />
            </div>
            <div id="category">
                <h3>Categories</h3>
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
import { useState } from "react";
import { ListItem } from "../Itemlist/ListItem";
import "./home.css"
import { useValue } from "../buybusyContent/BuybusyContent";


export function Home(){
    const {productdata} = useValue();
    const [category, setCategory] = useState([]);
    const [length,setLength] = useState(0);
    const [pricefilter, setPricefilter] = useState(8000);
    const [selectedprice,setSelectedPrice] = useState(8000);
    const [filteredList, setFilteredList] = new useState(productdata);

    const filterBySearch = (event) => {
      const query = event.target.value;
      var updatedList = [...productdata];
      updatedList = updatedList.filter((item) => {
        return item.ProductName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      setFilteredList(updatedList);
    };

    // handle Price filter 
    const priceFilterHandler=(e)=>{
        setPricefilter(e.target.value);
        setSelectedPrice(pricefilter*10*pricefilter);
    }

    // handlecategory 
    const handleCategory=(e)=>{
        const {value,checked} = e.target ;
        console.log(value , checked);
        // user checked the category
        if(checked){
            setCategory([...category,value]);
            setLength(category.length);
            console.log(category);
        }else{
            //user unchecked the category
            let filter = category.filter((data)=> data !== value);
            setCategory(filter);
            setLength(category.length);
            console.log(category);
        }
    }
    return(
    <div id="home-container">
        <div id="search-Box" >
            <input type='text' placeholder="Search By Name" onChange={filterBySearch}/>
        </div>
        <div id="aside">
            <div id="range" onInput={priceFilterHandler}>
                <h2>Filter</h2>
                <h3>Price: {selectedprice}</h3>
                <input type="range" />
            </div>
            <div id="category">
                <h2>Categories</h2>
                <ul>
                    <li><input type="checkbox" name="category" value="man" onChange={(e)=>handleCategory(e)} /><span>Men's</span></li>
                    <li><input type="checkbox" name="category" value="women" onChange={(e)=>handleCategory(e)} /><span>Women's</span></li>
                    <li><input type="checkbox" name="category" value="electronic" onChange={(e)=>handleCategory(e)} /><span>Electronic</span></li>
                    <li><input type="checkbox" name="category" value="jewellery" onChange={(e)=>handleCategory(e)} /><span>Jewellery</span></li> 
                </ul>
            </div>
        </div>
        <div id="data-display">
            <ListItem filteredList={filteredList} category={category} length={length} selectedprice={selectedprice} />
        </div>
    </div>
    );
}
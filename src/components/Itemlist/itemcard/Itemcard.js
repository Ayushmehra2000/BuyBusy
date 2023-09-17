import "./Itemcard.css"
export function ItemCard({d}){
    return(<>
    <div id="Card-container">
        <div id="item-image">
            <img src={d.productImage} alt={d.ProductName} />
        </div>
        <div id="item-detail">
            <div className="details-item">{d.ProductName}</div>
            <div className="item-price">&#8377;{d.ProductPrice}</div>
            <button>Add to cart</button>
        </div>
    </div>
    </>);
}
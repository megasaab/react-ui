import {useEffect, useState} from "react";
import {getProducts} from "../http";

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((response) => {
            setProducts(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    const onAddToCartClicked = () => {
            // logic for add to cart
    }
    return (
        <div className="d-flex gap-5">
            {products.map((product) => {
               return (
                   <div className="card" key={product._id}>
                       <div className="card-body">
                           <h5 className="card-title">{product.name}</h5>
                           <p className="card-text">{product.price} $</p>
                           <p className="btn btn-warning" onClick={onAddToCartClicked}>Add to cart</p>
                       </div>
                   </div>
               )
            })}
        </div>
    )
}
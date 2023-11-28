import { useParams } from "react-router-dom"
import { useRouteLoaderData } from "react-router-dom";
const Product = () => {
    const ProductData = useRouteLoaderData("products");
    console.log("Product.jsx: ", ProductData)
    const {id} = useParams();
    return(
        <div>
            <div>This will be my individual product.</div>
            <div>Product ID: {id} </div>
        </div>
    )
}

export default Product
import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const Products = () => {
    const productData = useLoaderData();
    
    console.log(productData)

    return (
        <div>
            I will put my products here.
            <Outlet/>
        </div>
    )
}

export default Products;

export const ProductsLoader = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    .then((result) => {
        return result.json()
    })
    .catch((error) => {
        console.error("An error occurred: ", error)
    })
    return res;
}


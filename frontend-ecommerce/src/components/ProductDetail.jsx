import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProductById} from "../store/productSlice.jsx";
import Cart from "./Cart.jsx";
import {addToCart} from "../store/cartSlice.jsx";
const ProductDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selectedProduct);
    const  status=useSelector((state) => state.products.status);
    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch,id]);
    const handleAddToCart=()=>{
        dispatch(addToCart(product));
    };

    if(status === 'loading'){
        return <div className="flex justify-center items-center h-screen">Loading.....</div>
    }

    if(!product){
        return <div className="flex items-center justify-center h-screen">Product not found..</div>
    }
  return (
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover rounded-md"/>
              <div>
                  <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
                  <div className="flex items-center">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={handleAddToCart}>
                          Add to Cart
                      </button>
                  </div>
              </div>
          </div>
          <Cart/>
      </div>
  )
}
export default ProductDetail;

import {useDispatch, useSelector} from "react-redux";
import {clearCart, removeFromCart} from "../store/cartSlice.jsx";

const Cart = () => {
    const items=useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };
    const handleClear=()=>{
        dispatch(clearCart());
    };
    return(
        <div className="bg-white max-w-4xl mx-auto my-10 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Cart Items</h2>
            {items.length === 0 ? (
                <p className="text-gray-700">No items in the cart</p>
            ):(
                <div>
                    {items.map((item) => (
                        <div key={item.id} className="flex justify-center items-center mb-4">
                            <div className="flex items-center">
                                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-700">${item.price} x {item.quantity}</p>
                                </div>
                            </div>
                            <button onClick={()=>handleRemove(item.id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-900 transition ml-5">Remove</button>
                        </div>
                    ))}
                    <button onClick={handleClear} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition ml-5">Clear cart</button>
                </div>
            )}
        </div>
    )
}
export default Cart;
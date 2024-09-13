import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../store/productSlice.jsx";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);
  return(
      <>
          <div>
              <SearchBar/>
          </div>
          <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-28">
              {products.map((product) => (
                  <div key={product.id} className="bg-white mx-auto justify-center items-center shadow-md rounded p-4">
                      <Link to={`/products/${product.id}`}>
                          <img src={product.imageUrl} alt={product.name} className="w-72 h-72 object-cover"/>
                          <div className="flex justify-between w-9/12 items-center ">
                              <h3 className="font-semibold text-lg">{product.name}</h3>
                              <p className='text-red-800 text-md'>${product.price}</p>
                          </div>

                      </Link>
                  </div>
              ))}
          </div>
      </>

  )
}
export default Home;
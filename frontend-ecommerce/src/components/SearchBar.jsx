import {useState} from "react";
import {useDispatch} from "react-redux";
import {searchProducts} from "../store/productSlice.jsx";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchProducts(searchTerm));
  }
  return(
      <div className="flex items-center mb-4 pt-10 mx-auto justify-center">
      <input type='text' placeholder='Search products...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
             className="border border-gray-300 rounded-lg outline-none focus:outline-none px-4 py-2 mr-2 w-9/12 "
      />
          <button onClick={handleSearch} className="px-4 py-2 bg-blue-300" >Search</button>
                                                                                                                                            </div>
  )
}
export default SearchBar
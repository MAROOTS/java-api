import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL ="http://localhost:9090/api/products";
const initialState = {
    items:[],
    selectedProduct:null,
    categories:[],
    status:'idle',
    error:null
};
export const fetchProducts= createAsyncThunk('/products/fetchProducts', async ()=>{
    const response = await axios.get(API_URL);
    return response.data;
});
export const fetchProductById= createAsyncThunk('/products/fetchProductById', async (id)=>{
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
});
export const fetchCategories = createAsyncThunk('/products/fetchCategories', async ()=>{
    const response = await axios.get('http://localhost:9090/api/categories');
    return response.data;
});
export const searchProducts= createAsyncThunk('/products/searchProducts', async (keyword)=>{
    const response = await axios.get(`${API_URL}/search?keyword=${keyword}`);
    return response.data;
});
export const filterProductByCategory= createAsyncThunk('/products/filterProductByCategory', async (category)=>{
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;
});

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchProducts.pending,(state)=>{
                state.status='loading';
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.status='idle';
                state.items=action.payload;
            })
            .addCase(fetchProductById.pending,(state)=>{
                state.status='loading';
            })
            .addCase(fetchProductById.fulfilled,(state,action)=>{
                state.status='idle';
                state.selectedProduct=action.payload;
            })
            .addCase(fetchCategories.pending,(state)=>{
                state.status='loading';
            })
            .addCase(fetchCategories.fulfilled,(state,action)=>{
                state.status='idle';
                state.categories=action.payload;
            })
            .addCase(searchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            })
            .addCase(filterProductByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(filterProductByCategory.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            });
    }
})
export default productSlice.reducer;








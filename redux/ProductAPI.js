import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const getProduct=createAsyncThunk(
    "products",
    async(data,{rejectWithValue})=>{
        try {
            const response=await AxiosInstance().get('/products');
            console.log('response:'+response);
            const result=response.data;
            return result
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
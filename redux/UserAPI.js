import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";
import { useDispatch,useSelector } from "react-redux";
const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export const login=createAsyncThunk(
    "user/login",
    async(data,{rejectWithValue})=>{
        try {
            const response=await AxiosInstance().post('/users/login',data);
            console.log('response:'+response);
            const result=response.data;
            return result
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const register=createAsyncThunk(
    "user/register",
    async(data,{rejectWithValue})=>{
        try {
            const response=await AxiosInstance().post('/users/register',data)
            console.log('response:'+response.data);
            const result=response.data;
            return result
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

/**
  {
  "user_id":"660a56399be3698724510180",
  "product":
  [
      {
        "_id":"6607d076cdea946c667c1fe9",
        "name":"Product 19",
        "quantity":1  
      }
      
  ],
  "total":19000
  
}
 */

export const addcart=createAsyncThunk(
    "user/addcart",
    async(data,{rejectWithValue})=>{
        try {

            const response=await AxiosInstance().post('/carts/addcart',data)
            console.log('response:'+response.data);
            const result=response.data;
            return result
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

// const edit=async(data)=>{
//     try {
//         const dispatch = useAppDispatch();
//         const appState = useAppSelector((state) => state.App);
//         const id=appState.user._id
//         const response= await AxiosInstance().put('users/Edit/'+id,{data});
//         console.log('edit',response.data)
//         return response
//     } catch (error) {
//         return error
//     }
// }
// export const eDit=createAsyncThunk(
//     "user/edit",
//     async(data,{rejectWithValue})=>{
//         try {

//             const response=await edit(data);
//             console.log('response:'+response.data);
//             const result=response.data;
//             return result
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )
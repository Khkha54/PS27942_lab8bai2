import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";
import { login,register,addcart } from "./UserAPI";
import { getProduct } from "./ProductAPI";
import { AppState, ToastAndroid } from "react-native";

const appSlice=createSlice({
    name:"App" ,
    initialState:{
        carts:[],
        user:null,
        initialRouterNameUser:"Login"
    },
    reducers:{
        addItemToCart:(state,action)=>{
            const index=state.carts
            .findIndex((item)=>item._id==action.payload._id);
            if(index>=0){
                state.carts[index].quantity+=action.payload.quantity;
            }else{
                state.carts.push(action.payload)
            }
        },
        removeItemFromCart:(state,action)=>{
            const id=state.carts.findIndex((index)=>index._id===action.payload)
            if(id>=0){
              const neW= state.carts.filter(value=>value._id!=action.payload)
              state.carts=neW
                console.log('cart',state.carts)
            }else{
                ToastAndroid.show('Item do not exist')
            }
        },
        increseItemCount:(state,action)=>{
            const id=state.carts.findIndex((item)=>item._id === action.payload)
            // state.carts[id].quantity+=1;
            console.log('reducer',id)
            // console.log(id)
                if(id>=0){
                    state.carts[id].quantity= state.carts[id].quantity+ 1
                }else{
                    
                }
        },
        decreseItemCount:(state,action)=>{
            const id=state.carts.findIndex((item)=>item._id === action.payload)
            // state.carts[id].quantity+=1;
            console.log('reducer',id)
            // console.log(id)
                if(id>=0){
                    if(state.carts[id].quantity==1){
                        const neW= state.carts.filter(value=>value._id!=action.payload)
                        state.carts=neW
                    }else{
                        state.carts[id].quantity= state.carts[id].quantity- 1
                    }
                }else{
                    
                }
        },
        logout:(state)=>{
            state.user=null;
            state.initialRouterNameUser="Login";
        },
        chageuser:(state,action)=>{
            state.user.name=action.payload.name;
            state.user.email=action.payload.email;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            console.log('login pending>>>')
        });
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log('login fulfilled>>>')
            state.user=action.payload;
        });
        builder.addCase(login.rejected,(state,action)=>{
            console.log('login rejected>>>',action)
            ToastAndroid.show('Đăng nhập thất bại',ToastAndroid.SHORT)
        })
        builder.addCase(register.pending,(state)=>{
            console.log('register pending>>>')
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            console.log('register fulfilled>>>')
        })
        builder.addCase(register.rejected,(state,action)=>{
            console.log('register rejected>>>'+action.payload)
            ToastAndroid.show('Đăng ký thất bại',ToastAndroid.SHORT)
        });
        builder.addCase(addcart.fulfilled,(state,action)=>{
            const date=new Date.now()
            state.user.cart.push({
                "user_id":action.payload.user_id,
                "product":action.payload.product,
                "total":action.payload.total,
                "update_at":date
            })
            state.carts=[]
        });
        // builder.addCase(eDit.fulfilled,(state,action)=>{
        //    console.log('reduce' ,action.payload)
        // })
    }
})

export const {addItemToCart,removeItemFromCart,increseItemCount,decreseItemCount,logout,chageuser} =appSlice.actions;
export default appSlice.reducer;
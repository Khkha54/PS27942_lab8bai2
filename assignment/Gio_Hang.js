import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItemFromCart, increseItemCount, decreseItemCount } from '../redux/Reducer'
import { addcart } from '../redux/UserAPI';

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const Gio_Hang = () => {
    const remove = (id) => {
        dispatch(removeItemFromCart(id))
        // console.log('id ',id)
        // console.log(appState.carts[0]._id)
    }
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.App);
    const [data, setdata] = useState([])
    const [total, settotal] = useState(0)
    useEffect(() => {
        setdata(appState.carts)
        tot()
    }, [appState.carts])

    const increse = (id) => {
        dispatch(increseItemCount(id))
    }
    const decrese = useCallback((id) => {
        dispatch(decreseItemCount(id))
    })
    const tot =() => {
        let a = 0;
        appState.carts.forEach(element => {

            a = a + (element.price * element.quantity)
            // console.log(element.price," ",element.quantity)
        });
        
        settotal(a)
    }
    const checkOut=async()=>{
        try {
            const cart={
                user_id:appState.user._id,
                product:data.map((element)=>{
                        return {
                            _id:element._id,
                            price:element.price,
                            quantity:element.quantity
                        }
                    }),
                total:total
            }
            console.log('cart',cart.product)
            dispatch(addcart(cart))
        } catch (error) {
            console.log('error',error)
        }
        
    }
    return (
        <View style={{height:800}}>
            <View style={{ height: 600 }}>
                <ScrollView contentContainerStyle={{}}>
                    {/* <FlatList
                data={data}
                renderItem={({ item }) => (
                
                )}
                keyExtractor={(item) => item._id}
            /> */}
                    {
                        data.map((item) => {
                            return <View style={{ width: "90%", flexDirection: "row", marginTop: 20, marginStart: 30, height: 150 }}>
                                <Image style={{ width: 150, height: 150 }} source={{ uri: item.images == null ? 'https://picsum.photos/200' : item.images[0] }} />
                                <View>
                                    <View style={{ height: "40%", flexDirection: "column" }}>
                                        <Text style={{ fontFamily: "Poppy-Regular", fontSize: 20, color: "black", marginStart: 15 }}>{item.name}</Text>
                                        <Text style={{ fontFamily: "Poppy-Regular", fontSize: 20, color: "#009245", marginStart: 15 }}>{item.price * item.quantity}</Text>
                                    </View>
                                    <View style={{ height: "60%", flexDirection: "row", alignItems: "center", }}>
                                        <Pressable style={{ marginStart: 15 }} onPress={() => dispatch(decreseItemCount(item._id))} >
                                            <Image source={require('../image/minus.png')} />
                                        </Pressable>
                                        <Text style={{ fontFamily: "Poppy-Regular", fontSize: 20, color: "black", width: 30, textAlign: "center" }}>{item.quantity}</Text>
                                        <Pressable onPress={() => dispatch(increseItemCount(item._id))} >
                                            <Image source={require('../image/plus.png')} />
                                        </Pressable>
                                        <Pressable style={{ marginStart: "40%" }} onPress={() => { remove(item._id) }}>
                                            <Text style={{ fontFamily: "Poppy-Regular", fontSize: 15, color: "black", textDecorationLine: "underline" }}>Xoá</Text>
                                        </Pressable>
                                    </View>
                                </View>

                            </View>
                        })
                    }


                </ScrollView>
            </View>
            <View style={{ width: "80%", alignSelf: "baseline", position: "absolute", bottom: 100,marginStart:50 }}>
                <Text style={{ width: "100%", color: "black", fontSize: 25 }} >
                    Total:{total}
                </Text>
                <Pressable
                    onPress={()=>checkOut()}
                    style={{ width: "100%", height: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#009245" }}>
                    <Text style={{ color: "white", fontSize: 20, fontFamily: "Poppins-Medium" }}>Thanh toán</Text>
                </Pressable>
            </View>
        </View>

    )
}



export default Gio_Hang

const styles = StyleSheet.create({})
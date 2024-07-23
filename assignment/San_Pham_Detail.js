import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PagerView from 'react-native-pager-view'
import AxiosInstance from '../helpers/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/Reducer'


const San_Pham_Detail = (props) => {
    const { route } = props;
    const id = route?.params?.id;
    const useAppDispatch=()=>useDispatch();
    const useAppSelector=useSelector;
    const dispatch=useAppDispatch();
    const appState=useAppSelector((state)=>state.App);

    // const pagerView = () => {
    //     return img.map((item, index) => {
    //         return (
    //             <View key={index}>
    //                 <Image source={item}
    //                     resizeMode='contain'
    //                 />
    //             </View>
    //         )
    //     })

    // }
    const [quantity, setquantity] = useState(1)
    const [product, setproduct] = useState({})
    const [image, setimage] = useState([])
    const total=quantity*product.price;
    const getOneProduct = async () => {
        try {
            const response = await AxiosInstance().get(`/products/${id}`);
            if (response.status) {
                setproduct(response.data)
            }
        } catch (error) {
            console.log("getOneProduct error:", error)
        }
    }
    useEffect(() => {
        getOneProduct()
        setimage(product.images)
    }, [])
    const changeQuant=(i)=>{
        if(quantity==1 && i<0){
            return quantity
        }else{
            setquantity(quantity+i)
        }
    }
    const addItem = () => {
        const item = {
            _id: product._id,
            name: product.name,
            price: product.price,
            images:product.images,
            quantity: quantity
        }
        console.log('add item',item)
        dispatch(addItemToCart(item))
        console.log(appState.carts)
    }
    return (
        <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
            <Image style={{ height: 350, width: 400 }} source={{ uri:product.images==null? 'https://picsum.photos/200' : product.images[0] }} alt='N/A' />
            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "baseline",
                    marginStart: 50,
                    marginTop: 30,
                    justifyContent: "space-around",
                    width: "50%"

                }}>
                <Text style={styles.productTag}>San_Pham_Detail</Text>
                <Text style={styles.productTag}>Ưa bóng</Text>
            </View>
            <Text style={styles.productPrice}>{product.price}</Text>
            <View style={{ width: "80%" }}>
                <View style={{ height: 30, width: "100%", borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 20, color: "black", marginStart: 5 }}>Chi tiết sản phẩm</Text>
                </View>
                <View style={{ height: 40, width: "100%", borderBottomWidth: 0.5, paddingTop: 15 }}>
                    <Text style={styles.txtProDetes}>{product.description}</Text>
                </View>
            </View>
            <View style={{ height: 150, backgroundColor: "lightblue", width: "100%", position: "absolute", bottom: 0, alignItems: "center" }}>
                <View style={{ height: 30, width: "90%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={styles.txta}>Đã chọn sản phẩm</Text>
                    <Text style={styles.txta}>Tạm tính</Text>
                </View>
                <View style={{ width: "90%", flexDirection: "row", alignItems: "center",justifyContent:"space-between" }}>
                    <View style={{ width: "60%", flexDirection: "row", alignItems: "center",marginStart:10 }}>
                        <Pressable onPress={()=>{changeQuant(-1)}}>
                            <Image style={styles.img} source={require('../image/minus.png')} />
                        </Pressable>
                        <Text style={{ width: 60, fontSize: 25, color: "black", textAlign: "center" }}>{quantity}</Text>
                        <Pressable onPress={()=>{changeQuant(1)}}>
                            <Image style={styles.img} source={require('../image/plus.png')} />
                        </Pressable>
                    </View>
                    <Text style={{fontSize:30,color:"#009245"}}>{total}</Text>
                </View>
                <Pressable onPress={addItem} style={styles.btnBuy}>
                    <Text style={{fontSize:30,fontFamily:"Poppins-Regular",color:"white",paddingTop:10}}>CHỌN MUA</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default San_Pham_Detail

const styles = StyleSheet.create({
    productTag: {
        height: 25,
        fontSize: 15,
        backgroundColor: "#009245",
        color: "white",
        borderRadius: 5,
        padding: 5,
        lineHeight: 18,
        textAlignVertical: "center"
    },
    productPrice: {
        fontSize: 35,
        color: "#009245",
        alignSelf: "baseline",
        marginStart: 60,
        marginVertical: 20,
        fontWeight: "500"
    },
    txtProDetes: {
        color: "black",
        fontSize: 15,
        marginStart: 15,
        fontFamily: "Poppins-Medium"
    },
    txta: {
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        color: "black"
    },
    img: {
        width: 40,
        height: 40
    },
    btnBuy:{
    width:"90%",
    height:60,
    backgroundColor:"#009245",
    marginTop:10,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
    }
})
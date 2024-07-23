import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const Lich_Su = (props) => {
    const {navigation} =props;
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.App);
    const [cartH, setcartH] = useState([])
    const [products, setproducts] = useState([])
    useEffect(() => {
        setcartH(appState.user.cart)
    }, [])
    const getP = (arr) => {
        // return arr.map((item,index)=>{
        //     return <View>
        //         <Text>{item._id}</Text>
        //     </View>
        // })
        return <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
            <Image source={require('../image/img_list_1.png')} />
            <View>
                <Text style={[styles.txt]} >{arr.length} sản phẩm</Text>
                <Text style={[styles.txt]} >Tổng số lượng: {arr.reduce(function (acc, obj) {
                    return acc + obj.quantity;
                }, 0)
                }
                </Text>
            </View>
        </View>
    }
    
    const formatDate=(date)=> {
        const a=new Date(date);
        // const day = a.getDate();
        // const month = a.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
        // const year = a.getFullYear();
        // const hour=a.getHours();
        // const minutes=a.getMinutes();
        // console.log(a.toLocaleString())
        // // Đảm bảo định dạng dd/mm/yyyy
        // const formattedDate = `${day}/${month}/${year} `+ `${hour}:${minutes}`;
        // return formattedDate;
        var dayNames = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const newdate=dayNames[a.getDay()]+" "+a.toLocaleString();
        return newdate
            
            
        
      }
    
    const satusB=()=>{
        return <View style={{width:"90%",alignItems:"center",flexDirection:"row",height:60,alignSelf:"center",backgroundColor:"white",marginVertical:20}} >
            <Pressable onPress={()=>navigation.navigate('User')} style={{height:40,width:40}} >
            <Image style={{height:"100%",width:"100%"}} source={require('../image/backicon.png')} />
            </Pressable>
            <Text style={{fontFamily:"Poppins-Regular",color:"black",fontSize:24,lineHeight:30,left:"100%"}} >Lịch sử giao dịch</Text>
        </View>
    }

    return (
        <View style={{height:"auto",backgroundColor:"white"}} >
            {satusB()}
            <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:"center"}} >
                {
                    cartH.map((item, index) => {
                        return <View style={{ width: "90%", backgroundColor: "white" }} key={index} >
                            <Text style={[styles.txt, { marginStart: 20 }]} >{formatDate(item.update_at)}</Text>
                            <View
                                style={{
                                    width: "90%", height: 150,
                                    borderTopWidth: 1, borderTopColor: "gray",
                                    alignSelf: "center"
                                }} >
                                {console.log(item.product)}
                                {
                                    getP(item.product)
                                }

                            </View>
                            <Text style={[styles.txt, { color: "#009245", marginStart: 50 }]} >Tổng tiền:{item.total}</Text>
                        </View>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Lich_Su

const styles = StyleSheet.create({
    txt: {
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        marginTop: 10,
        color: "black"
    }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../redux/Reducer';

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const Thong_Tin = (props) => {
  const {navigation} =props
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.App);
  const name=useMemo(()=>{
      const a=appState.user.name;
      return a
  });
  const mail=useMemo(()=>{
    const a=appState.user.email;
    return a
})
  return (
    <View style={{width:"100%",alignItems:'center'}} >
      <Text style={{fontSize:25,fontFamily:"Poppins-Regular",marginTop:20,color:"black"}} >PROFILE</Text>
      <View style={{flexDirection:"row",width:"75%",height:70,marginTop:20}} >
        <Image style={{height:70,width:70}} source={require('../image/user.png')}/>
        <View style={{height:"100%",justifyContent:"space-evenly"}}>
          <Text style={[styles.txt,{fontFamily:"Poppins-Bold"}]} >{name}</Text>
          <Text style={[styles.txt,{fontSize:15,color:"gray"}]} >Email:{mail}</Text>
        </View>
      </View>
      <Text style={[styles.txt,
        {color:"gray",alignSelf:"baseline",marginStart:70,marginTop:20}]} >Chung</Text>
      <View style={{width:"80%",borderTopWidth:1,borderTopColor:"gray",paddingTop:20,paddingStart:15}} >
      <TouchableOpacity onPress={()=>navigation.navigate('EditUser')} style={styles.touch}>
          <Text style={styles.txtT} >Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.txtT} >Cẩm nang trồng cây</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('History')} style={styles.touch}>
          <Text style={styles.txtT} >Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.txtT} >Q & A</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.txt,
        {color:"gray",alignSelf:"baseline",marginStart:70,marginTop:20}]} >Bảo mật và điều khoản</Text>
      <View style={{width:"80%",borderTopWidth:1,borderTopColor:"gray",paddingTop:20,paddingStart:15}} >
      <TouchableOpacity style={styles.touch}>
          <Text style={styles.txtT} >Điều khoản và điều kiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.txtT} >Chính sách quyền riêng tư</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch(logout())} style={styles.touch}>
          <Text style={[styles.txtT,{color:"red"}]} >Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Thong_Tin

const styles = StyleSheet.create({
  txt:{
    fontFamily:"Poppins-Regular",
    color:"black",
    fontSize:20,
    marginStart:15
  },
  touch:{
    // flex:1,
    // height:30
  },
  txtT:{
    fontFamily:"Poppins-Regular",
    color:"black",
    fontSize:19,
  }
})
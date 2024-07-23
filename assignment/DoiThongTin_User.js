import { StyleSheet, Text, View, Pressable, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../helpers/AxiosInstance';
import { eDit } from '../redux/UserAPI';
import { chageuser } from '../redux/Reducer';


const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

const DoiThongTin_User = (props) => {
  const { navigation } = props;

  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.App);
  const [name, setname] = useState(appState.user.name)
  const [mail, setmail] = useState(appState.user.email)
  const satusB = () => {
    return <View style={{ width: "90%", alignItems: "center", flexDirection: "row", height: 60, alignSelf: "center", backgroundColor: "white", marginVertical: 20 }} >
      <Pressable onPress={() => navigation.navigate('User')} style={{ height: 40, width: 40 }} >
        <Image style={{ height: "100%", width: "100%" }} source={require('../image/backicon.png')} />
      </Pressable>
      <Text style={{ fontFamily: "Poppins-Regular", color: "black", fontSize: 24, lineHeight: 30, left: "100%" }} >CHỈNH SỬA THÔNG TIN</Text>
    </View>
  }
  const edit = async () => {
    try {
      const id = appState.user._id
      const data = {
          name: name,
          email: mail
        
      }
      const response= await AxiosInstance().put('users/Edit/'+appState.user._id,{
        data:data
      });
      console.log('response:'+response.data);
      if(response.status==true){
        ToastAndroid.show('Đổi thông tin thành công',ToastAndroid.SHORT)
        dispatch(chageuser(data))
      }
    } catch (error) {
      console.log('edit error:', error)
      ToastAndroid("Lỗi email đã tồn tại",ToastAndroid.SHORT)
    }
  }
  return (
    <View style={{ height: "100%",backgroundColor:"white" }} >
      {
        satusB()
      }
      <View style={styles.viewb} >
        <Image style={styles.img} source={require('../image/user.png')} />
        <TextInput value={name} onChangeText={(e) => setname(e)} placeholder='Name' style={styles.txtIn} />
        <TextInput value={mail} onChangeText={(e) => setmail(e)} placeholder='Email' style={styles.txtIn} />
      </View>
      <Pressable
        disabled={name == '' && mail == '' ? true : false}
        onPress={() => edit()}
        style={[styles.press, { backgroundColor: name == '' || mail == '' ? "gray" : "#009245" }]} >
        <Text style={[styles.txt, {}]} >LƯU THÔNG TIN</Text>
      </Pressable>
    </View>
  )
}

export default DoiThongTin_User

const styles = StyleSheet.create({
  viewb: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "white"
  },
  img: {
    width: 120,
    height: 120,
    backgroundColor: "lightgray",
    borderRadius: 100
  },
  txtIn: {
    width: "60%",
    height: 50,
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    marginTop: 25,
    borderBottomWidth: 1,
    textAlignVertical: "center",
    lineHeight: 25,
    padding: 0,
    paddingStart: 10,
    borderBottomColor: "gray"
  },
  press: {
    height: 80,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    top: 300,
    alignSelf: "center",
    borderRadius: 25
  },
  txt: {
    fontSize: 25,
    fontFamily: "Poppins-Regular",
    color: "white",
    lineHeight: 80,
    paddingTop: 5,
    fontWeight: "600"
  }
})
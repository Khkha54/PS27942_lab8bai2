import { Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React,{useState} from 'react'
import ButtonDN from './custom_compo/ButtonDN'
import TextIn from './custom_compo/TextIn'
import { LinearGradient } from 'react-native-linear-gradient'
import { login } from '../redux/UserAPI'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Dang_Nhap = (props) => {
    const {navigation}=props;
    const useAppDispatch = () => useDispatch();
    const useAppSelector = useSelector;
    const dispatch = useAppDispatch();
    const appState = useAppSelector((state) => state.App);

    const [email, setemail] = useState('k1@gmail.com')
    const [password, setpassword] = useState('123')
    const [showPass, setshowPass] = useState(true)
    const dangnhap =async()=>{
        try {
            const body={
                email:email.toString(),
                password:password.toString()
            }
            const result=  dispatch(login(body))
            // const a=await axios.post("http://192.168.207.2:3001/users/login",body)
            // console.log(a.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{}}>
            <ScrollView contentContainerStyle={{ width: "100%", alignItems: "center",paddingBottom:15 }}>
                <Image style={styles.imgMain} source={require('../image/ing_DN.png')} />
                <Text style={styles.txtWelcome}>Chào mừng bạn</Text>
                <Text style={styles.txtWelcome2}>Đăng nhập tài khoản</Text>
                <KeyboardAvoidingView style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{alignSelf:"baseline",marginStart:30,fontSize:17,color:"black",fontWeight:"600"}}>Nhập Email</Text>
                    <TextIn
                        value={email}
                        onChangeText={setemail}
                        placeholder='Nhập email hoặc số điện thoại'
                        secureTextEntry={false}
                    />
                    <Text style={{alignSelf:"baseline",marginStart:30,fontSize:17,color:"black",marginTop:15,fontWeight:"600"}}>Nhập Password</Text>
                    <TextIn
                        value={password}
                        onChangeText={setpassword}
                        placeholder='Mật khẩu'
                        secureTextEntry={true}
                        // onPress={setshowPass(!showPass)}
                    />

                </KeyboardAvoidingView>
                <View style={styles.viewRememberPass}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('../image/checkbox_icon.png')} />
                        <Text>Nhớ tài Khoản</Text>
                    </View>
                    <Text style={{ color: "#007537" }}>Forgot password?</Text>
                </View>
        
                    <ButtonDN
                        onPress={dangnhap}
                        value="Đăng nhập"
                    />
              
                <View style={styles.viewLine}>
                    <Image style={{ width: "43%" }} source={require('../image/line.png')} />
                    <Text style={{ color: "black", fontSize: 17 }}>Hoặc</Text>
                    <Image style={{ width: "43%" }} source={require('../image/line.png')} />
                </View>
                <View style={styles.viewFB_GG}>
                    <Image source={require('../image/google_icon.png')} />
                    <Image source={require('../image/logos_facebook.png')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17 }}>Bạn không có tài khoản?</Text>
                    <Pressable style={{}} onPress={()=>{navigation.navigate('Register')}}>
                        <Text style={{ fontSize: 17, color: "#009245" }}>Tạo tài khoản</Text>
                    </Pressable>
                </View>



            </ScrollView>
        </View>
    )
}

export default Dang_Nhap

const styles = StyleSheet.create({
    imgMain: {
        width: "100%",
        height: 320
    },
    txtWelcome: {
        fontSize: 40,
        color: "black",
        fontWeight: "800",
        fontFamily: "Poppins-Regular"
    },
    txtWelcome2: {
        fontSize: 20,
        color: "black",
        fontWeight: "500",
        fontFamily: "Poppins-Regular",
        marginBottom: 40
    },
    viewRememberPass: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15
    },
    viewLine: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:20
    },
    viewFB_GG: {
        width: "30%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 25
    },


})

// const viewInPutStyle = () => {
//     return {
//         width: "90%",
//         height: 50,
//         borderWidth: 1.5,
//         borderRadius: 13,
//         marginVertical: 5
//     }
// }
// const viewBtnDNStyle = () => {
//     return {
//         width: "80%",
//         height: 50,
//         borderRadius: 15

//     }
// }
// const btnDNstyle = () => {
//     return {
//         width: "100%",
//         height: "100%",
//         borderRadius: 15,
//         alignItems: "center",
//         justifyContent: "center"
//     }
// }

// const pressTXTstyle =()=>{
//     return {
//         color:"white",
//         fontSize:23,
//         fontWeight:"500"
//     }
// }
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, Pressable, ToastAndroid } from 'react-native'
import React from 'react'
import TextIn from './custom_compo/TextIn'
import ButtonDN from './custom_compo/ButtonDN'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { register } from '../redux/UserAPI'

const Dang_Ky = (props) => {
    const {navigation}=props;
    const useAppDispatch=()=>useDispatch();
    const useAppSelector=useSelector;
    const dispatch=useAppDispatch();
    const appState=useAppSelector((state)=>state.App);
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const registerUser=async()=>{
        try {
            const body={
                name:name.toString(),
                email:email.toString(),
                password:password.toString()
            }
             dispatch(register(body))
             ToastAndroid.show('Đăng ký thành công',ToastAndroid.SHORT)
        } catch (error) {
            console.log('registerUser error'+error)
        }
    }
    return (
        <View>
            <ScrollView contentContainerStyle={{ alignItems: "center", width: "100%", paddingBottom: 15 }}>
                <Image style={styles.imgMain} source={require('../image/img_DK.png')} />
                <Text style={styles.txtWelcome}>Đăng ký</Text>
                <Text style={styles.txtWelcome2}>Tạo tài khoản</Text>
                <KeyboardAvoidingView>
                    <TextIn
                        onChangeText={setname}
                        value={name}
                        img={null}
                        placeholder='Họ Tên'
                    />
                    <TextIn
                        onChangeText={setemail}
                        value={email}
                        img={null}
                        placeholder='Email'
                    />
                    {/* <TextIn
                        onChangeText={() => { }}
                        value=''
                        img={null}
                        placeholder='Số điện thoại'
                    /> */}
                    <TextIn
                        onChangeText={setpassword}
                        value={password}
                        img={null}
                        placeholder='Mật khẩu'
                        secureTextEntry={true}
                    />
                </KeyboardAvoidingView>
                <Text style={styles.txtCondition}>
                    Để đăng ký tài khoản, bạn đồng ý
                    <Text style={{ color: "#009245", textDecorationLine: "underline" }}> Terms & Conditions </Text>
                    and
                    <Text style={{ color: "#009245", textDecorationLine: "underline" }}> Privacy Policy </Text>
                </Text>
                <ButtonDN
                    onPress={registerUser}
                    value="Đăng ký"
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
                    <Text style={{ fontSize: 17 }}>Tôi đã có tài khoản?</Text>
                    <Pressable style={{}}>
                        <Text style={{ fontSize: 17, color: "#009245" }}>Đăng nhập</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default Dang_Ky

const styles = StyleSheet.create({
    imgMain: {
        width: "100%",
        height: 200,
        
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
    txtCondition: {
        color: "black",
        marginVertical: 10,
        width: "70%",
        textAlign: "center",
        fontFamily: "Poppins-Medium"
    },
    viewLine: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    viewFB_GG: {
        width: "30%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 25
    },

})
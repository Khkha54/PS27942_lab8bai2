import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import LinearGradient from 'react-native-linear-gradient'


const ButtonDN = memo((props) => {
    const {  onPress,value } = props
    return (
       <LinearGradient
       colors={['#007537', '#4CAF50']}
                    start={{ x: 0.7, y: 0.2 }}
                    end={{ x: 0, y: 0 }}
                    style={styles2.viewBtnDN}
       >
             <Pressable
                    style={styles2.btnDN}
                    onPress={onPress}
                >
                <Text style={styles2.pressTXT}>{value}</Text>
                </Pressable>
                </LinearGradient>
    )
}
)
export default ButtonDN

const styles2 = StyleSheet.create({
    viewBtnDN:{
        width: "80%",
        height: 50,
        borderRadius: 15

    },
    btnDN: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    pressTXT:{
        color:"white",
        fontSize:23,
        fontWeight:"500"
    }
})
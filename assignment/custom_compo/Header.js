import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'


const Header = (props) => {
  const { headerStyle, viewHeadContA } = props;
  return (
      <Animated.View style={[{ width: "100%", height: 320 } ,headerStyle]}>
        <View style={[styles.viewHeadCont]}>
          <Text style={[styles.txtHead]}>
            Planta- toả sáng
            không
            gian nhà bạn
          </Text>
          <Pressable
            onPress={() => { console.log('caaa') }}
            style={styles.pressHead}>
            <Image style={{ width: "50%", height: "50%" }} source={require('../../image/cart.png')} />
          </Pressable>
          
        </View>
        <Image
          style={styles.imgBgn}
          source={require('../../image/img_bgn_Main.png')} />
        <Text style={styles.txtHead2}>
          Xem hàng mới về
          <Image source={require('../../image/arrowright.png')} />
        </Text>
      </Animated.View>
      )
}

export default Header

const styles = StyleSheet.create({
  viewHeadCont: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 15,
    backgroundColor: "#F6F6F6",
    justifyContent: "space-around",
    height: "32%"
  },
  txtHead: {
    fontSize: 23,
    fontFamily: "Poppins-Regular",
    width: "69%",
    color: "black",
    verticalAlign: "middle",
    textAlignVertical: "bottom"
  },
  pressHead: {
    width: "12%",
    height: "65%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 10,
  },
  imgBgn: {
    width: "100%",
    height: "78%"
  },
  txtHead2: {
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: "#007537",
    marginStart: "5%",
    marginTop: 15,
    bottom: "70%"
  },

})
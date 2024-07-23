import { FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import Flat_TrangChu from './custom_compo/Flat_TrangChu'
import Header from './custom_compo/Header'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from "../helpers/AxiosInstance";
import ListM_Item from '../assignment/custom_compo/ListM_Item';


const Trang_Chu = (props) => {
  const { navigation } = props;

  const flatTranslateY = useSharedValue(0);
  const headerMaxHeight = 320;
  const headerMinHeight = 0;
  const onScroll = useAnimatedScrollHandler(event => {
    flatTranslateY.value = event.contentOffset.y;
  });
  const headerStyle = useAnimatedStyle(() => {
    const marginTop = interpolate(flatTranslateY.value,
      [0, 300],
      [0, -320],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP
      }
    );
    const opacity = interpolate(flatTranslateY.value,
      [0, 320],
      [1, 0],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP
      }
    );
    return {
      // height,
      opacity,
      marginTop
    }
  })
  
  const paddV = useAnimatedStyle(() => {
    const paddingTop = interpolate(flatTranslateY.value,
      [0, 320],
      [350, 10], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.CLAMP
    }
    );

    const opacity = interpolate(flatTranslateY.value,
      [0, 320],
      [1, 0],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP
      }
    );
    return {
      paddingTop,
      opacity
    }
  })

  const [productList, setproductList] = useState([])
  const [refresh, setrefresh] = useState(false)
  const getProducts = async () => {
    try {
      const response = await AxiosInstance().get('/products?page&limit=8&keyword');
      // console.log('response:',response.data);
      const result = response.data;
      setproductList(result)
    } catch (error) {
      console.log("getProducts error: ", error)
    }
  }
  useEffect(() => {
    // setrefresh(true)
    getProducts()

  }, [])

  return (
    <View style={styles.viewContainer}>
      <Header
        // viewHeadContA={viewHeadContA}
        headerStyle={headerStyle}
      />
      <View style={[{ marginBottom: 20, }]}>
        {/* <Animated.ScrollView 
        contentContainerStyle={{ minHeight: 10, paddingTop: 50,
          width:"100%",display:"flex",
          flexDirection:"row",flexWrap:"wrap", }}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}>
          {
            productList.map((item, index) => {
              return <TouchableOpacity
                style={{ width: "45%", marginHorizontal: 10 }}
                onPress={() => navigation.navigate('Detail', { id: item._id })} >
                <ListM_Item item={item} />
              </TouchableOpacity>
             
            })
          }
           
        </Animated.ScrollView> */}
            <Flat_TrangChu
          name='Cây trồng'
          data={productList}
          refreshing={refresh}
          getProducts={getProducts}
          navigation={navigation}
          onScroll={onScroll}
        />
      </View>
    </View>
  )
}

export default Trang_Chu

const styles = StyleSheet.create({
  viewContainer: {
    width: "100%",
    alignItems: 'center',
    backgroundColor: "white"
  },

})

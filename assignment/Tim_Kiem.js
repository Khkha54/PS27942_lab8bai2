import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AxiosInstance from '../helpers/AxiosInstance';

const Tim_Kiem = (props) => {
  const {navigation} =props
  const [search, setsearch] = useState('');
  const [product, setproduct] = useState([])
  const getdata = async () => {
    try {
      const response = await AxiosInstance().get('/products?keyword=' + search);
      console.log(response.data)
      setproduct(response.data);
    } catch (error) {
      console.log("error search:", error)
    }
  }
  return (
    <View style={{ width: "100%", alignItems: "center" }} >
      <View style={{ marginVertical: 30, width: "90%", flexDirection: "row", alignItems: "center", borderBottomWidth: 1 }} >
        <TextInput
          placeholder='Tìm kiếm'
          value={search}
          onChangeText={setsearch}
          onBlur={getdata}
          style={[{ height: 50, width: "90%", fontSize: 25, lineHeight: 40 }]}
        />
        <Image source={require('../image/search.png')} />
      </View>
      <View style={{ width: "100%", height: 500 }}>
        {
          search != '' ?
            <ScrollView contentContainerStyle={{ alignItems: "center" }} >
              {
                product.map((item, index) => {
                  return <TouchableOpacity style={{width:"80%"}} key={index} onPress={()=>navigation.navigate('Detail', { id: item._id })} >
                    <View
                    style={styles.viewL}  >
                    <Image style={{ width: 80, height: 80 }} source={require('../image/img_list_1.png')} />
                    <View style={{ height: "100%", justifyContent: "space-around" }} >
                      <Text style={[styles.txt1, { fontSize: 18, color: "#009245" }]} >Tên:{item.name}</Text>
                      <Text style={[styles.txt1, { color: "gray" }]} >{item.description}</Text>
                      <Text style={[styles.txt1, {}]} >Giá:{item.price}</Text>
                    </View>
                  </View>
                  </TouchableOpacity>
                })
              }
            </ScrollView>
            : <Text style={[styles.txt1, { marginStart: 50, color: "gray" }]} >Bắt đầu tìm kiếm</Text>

        }
      </View>
    </View>
  )
}

export default Tim_Kiem

const styles = StyleSheet.create({
  viewL: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 20
  },
  txt1: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "black"
  }
})
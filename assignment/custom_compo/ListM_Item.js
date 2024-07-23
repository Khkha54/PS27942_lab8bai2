import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListM_Item = (props) => {
    const {item} =props
  return (
    <View 
    style={{width:"100%",
    backgroundColor:"#F6F6F6",
    marginStart:"3%",
    marginVertical:15,
    paddingBottom:10
    }}>
        <Image style={{width:"100%",marginBottom:5,height:200}} source={{uri:item.images[0].toString()}}/>
      <Text style={{fontSize: 17, fontFamily: "Poppins-Regular",color:"black",marginStart:10}}>{item.name}</Text>
      <Text style={{fontSize:16,marginStart:10,marginBottom:5}}>{item.description}</Text>
      <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular", color: "#007537",marginStart:10}}>{item.price},000đ</Text>
    </View>
  )
}

export default ListM_Item

const styles = StyleSheet.create({})
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { memo, useState } from 'react'

const TextIn = memo((props) => {
  const { onChangeText, value, secureTextEntry, placeholder } = props
  const [focus, setfocus] = useState(false)
  const [secure, setsecure] = useState(secureTextEntry)
  return (
    <View style={[
      styles2.viewInPut,
      {
        borderColor: focus ? '#007537' : 'gray',
        borderWidth: focus ? 2 : 1.5,
      }]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles2.txtInPut}
        onFocus={() => setfocus(true)}
        onBlur={() => setfocus(false)}

        secureTextEntry={secure}
      />
      {
        secureTextEntry && <Pressable style={styles2.image} onPress={() => { setsecure(!secure) }}>
          <Image style={{ width: "100%", height: "100%" }} source={require('../../image/eye_icon.png')} />
        </Pressable>
      }
    </View>
  )
}
)

export default TextIn

const styles2 = StyleSheet.create({
  viewInPut: {
    maxWidth: "90%",
    minWidth:"90%",
    height: 46,
    borderRadius: 13,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: "center",
  },
  txtInPut: {
    width: "90%",
    height: "100%"
  },
  image: {
    width: "10%",
    height: "50%",

  }
})
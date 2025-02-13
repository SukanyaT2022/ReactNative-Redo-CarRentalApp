import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
interface checkBoxProp{
item:string;
}
const InputBox = ({item}:checkBoxProp) => {
  return (
    <View style={styles.mainInputStyle}>
<TextInput  placeholder={item}/>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  mainInputStyle:{
borderColor:'green',
borderWidth:2,
marginHorizontal:20,

  },


})
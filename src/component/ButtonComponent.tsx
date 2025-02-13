import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
interface ButtonProp{
text:string;
}
const ButtonComponent = ({text}:ButtonProp) => {
  return (

     <TouchableOpacity style={styles.mainInputStyle}><Text>{text}</Text></TouchableOpacity>

  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    mainInputStyle:{
  borderColor:'green',
  borderWidth:2,
  marginHorizontal:20,
  paddingVertical:10,
  
    },
  
  
  })
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
interface smallInputProp{
    text:string;
    nameIcon:string;
}
const SmallInputComponent = ({text, nameIcon}:smallInputProp) => {
  return (
    <View style={styles.inputStyle}>
<TextInput placeholder={text}/>
  <Icon name={nameIcon} size={30} color="#900" />
    </View>
  )
}

export default SmallInputComponent

const styles = StyleSheet.create({
    inputStyle:{
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'space-between',
borderColor:'pink',
borderWidth:2,
width:'100%',
padding:20,

    }
})
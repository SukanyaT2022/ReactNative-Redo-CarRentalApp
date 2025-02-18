import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
interface ExtraSmallBoxProp{
message:string;

}
const ExtraSmallBoxComp = ({message}:ExtraSmallBoxProp) => {
  return (
    <View style={styles.mainInput}>
   <TextInput placeholder={message}/>
    </View>
  )
}

export default ExtraSmallBoxComp
const styles = StyleSheet.create({
    mainInput:{
        borderColor:'green',
        borderWidth:2,
        padding:10     
    },
});
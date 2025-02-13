import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SecondScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>SecondScreen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text>Move to  first screen</Text></TouchableOpacity>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})
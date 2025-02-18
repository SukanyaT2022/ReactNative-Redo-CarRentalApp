import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ExtraSmallBoxComp from '../component/ExtraSmallBoxComp'
import DatePickerComp from '../component/DatePickerComp'

const SecondScreen = ({navigation}:any) => {
  return (
    <View>
      {/* <Text>SecondScreen</Text>
      <ExtraSmallBoxComp message = "pick the date"/>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text>Move to  first screen</Text></TouchableOpacity> */}
      <DatePickerComp />
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})
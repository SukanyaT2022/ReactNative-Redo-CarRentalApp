import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Datepicker2 from '../component/Datepicker2'
import OnlyTimePicker from '../component/OnlyTimePicker'

const ThirdScreen = ({navigation}:any) => {
  return (
    <View>
        <Text>Third screen</Text>
   <Datepicker2/>
   <OnlyTimePicker/>
   <TouchableOpacity onPress={()=>navigation.navigate("ApiScreen")}><Text>go to 4 screen</Text></TouchableOpacity>
   
    </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({


})
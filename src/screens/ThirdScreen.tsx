import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Datepicker2 from '../component/Datepicker2'
import OnlyTimePicker from '../component/OnlyTimePicker'

const ThirdScreen = () => {
  return (
    <View>
        <Text>Third screen</Text>
   <Datepicker2/>
   <OnlyTimePicker/>
    </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({


})
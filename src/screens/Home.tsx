import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputBox from '../component/InputBox'
import ButtonComponent from '../component/ButtonComponent'

const Home = ({navigation}:any) => {
  return (
    <View style={{  paddingHorizontal:20, gap:20}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("SecondScreen")}><Text>go to second screen</Text></TouchableOpacity>
      <InputBox item="User Name"/>
      <InputBox item="Password"/>
      <ButtonComponent text="click me"/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import InputBox from '../component/InputBox'
import ButtonComponent from '../component/ButtonComponent'
import SmallInputComponent from '../component/SmallInputComponent'

const Home = ({navigation}:any) => {
  return (
    <View style={{ gap:20,width:'100%', paddingHorizontal:20}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("SecondScreen")}><Text>go to second screen</Text></TouchableOpacity>
      <InputBox item="User Name"/>
      <InputBox item="Password"/>
      <ButtonComponent text="click me"/>

      <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
      {/* <SmallInputComponent text="date"/>
      <SmallInputComponent text="time"/> */}
      <View style={{width:'49%'}}>
       <SmallInputComponent nameIcon="rocket" text="User Name" />
       </View>
       <View style={{width:'49%'}}>
       <SmallInputComponent nameIcon="rocket" text="Password"/>
       </View>
      </View>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
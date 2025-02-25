import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { baseUrlVar } from '../utilsFolder/baseUrl';

const ApiScreen = () => {
const [data, setData] = useState<any>();
const [loading, setLoading] = useState<boolean>(true);
console.log(loading)
useEffect(()=>{
fetch(baseUrlVar)
.then(response => response.json())
.then(result => {
  setData(result);
  setLoading(false);
})
.catch(error =>{
  console.log(error)  
    setLoading(false); // Handle error
})
},[])
console.log(data)



  return (
    <View>
  <Text>4 Api Screen</Text>
      {/*skeleton get api call react native- search */}
      {/* https://crudcrud.com/api/e6216087b43e467eb9c8d01194c9f327 */}

    
    </View>
  )
}

export default ApiScreen

const styles = StyleSheet.create({})
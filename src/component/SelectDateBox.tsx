import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
interface SelectDateProp{
message:string
}
const SelectDateBox = ({message}:SelectDateProp) => {
        const [date, setDate] = useState(new Date())
        const [pickDate, setPickDate] = useState<any>()
        const [open, setOpen] = useState(false)
    
  return (
    <View>
    <TouchableOpacity
     style={styles.mainBox}
     onPress={()=>setOpen(true)}
     >
<Text style={styles.text}>{pickDate ?? message}</Text>
    </TouchableOpacity>
{/* modal for date picker */}
   <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => { 
          setOpen(false)
        //   setPickDate(date.toISOString())
        //do not forget to install npm moment first --  npm i moment
        setPickDate(moment(date).format("MM/DD/YYYY hh:mm A"))
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

    </View>

  )
}

export default SelectDateBox

const styles = StyleSheet.create({
mainBox:{
    borderColor:'green',
    borderWidth:2,
    padding:10    
},
text:{
    color:'blue'
}

})
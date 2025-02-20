import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const OnlyTimePicker = () => {
  const [date, setDate] = useState(new Date());
   //select date store date that user pick
   const [selectDate, setSelectDate] = useState<any>();
   const [open, setOpen] = useState(false);
   return (
     <>
       <TouchableOpacity onPress={() => setOpen(true)} style={styles.mainBox}>
         <Text>{selectDate ?? "Choose time"}</Text>
       </TouchableOpacity>
       <DatePicker
         modal
         mode='time'
         open={open}
         date={date}
         onConfirm={date => {
           setOpen(false);
           setDate(date);
            //do not forget to install npm moment first --  npm i moment
           setSelectDate(moment(date).format('hh:mm A'))
         }}
         onCancel={() => {
           setOpen(false);
         }}
       />
     </>
  )
}

export default OnlyTimePicker

const styles = StyleSheet.create({
    mainBox: {
        borderColor: 'pink',
        borderWidth: 2,
        padding: 15,
      },
})
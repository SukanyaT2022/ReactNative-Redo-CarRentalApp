import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {baseUrlVar} from '../utilsFolder/baseUrl';

const ApiScreen = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();
  console.log(loading);
  useEffect(() => {
    fetch(baseUrlVar)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        console.log('error fetching products from api', error);
        setLoading(false); // Handle error
        setError(error);
      });
  }, []);
  console.log(data);

  return (
    <View>
      <Text>4 Api Screen</Text>
      {/*skeleton get api call react native- search */}
      {/* https://crudcrud.com/api/e6216087b43e467eb9c8d01194c9f327 */}
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.wrapper}>
              <View style={styles.mainBoxImg}>
                <Image style={styles.imageStyle} source={{uri: item.image}} />
              </View>
              <View style={styles.mainBoxText}>
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={()=><View style={{marginTop:30}}/>}
        />
      </View>
    </View>
  );
};

export default ApiScreen;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection:'row',
    
    
  },
  imageStyle: {
    width: '80%',
    height: 200,
    resizeMode: 'cover'
  },
  mainBoxImg: {
    width: '50%',
  },
  mainBoxText: {
    width: '50%',
  },
});

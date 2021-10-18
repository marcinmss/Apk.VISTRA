import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image, Button } from 'react-native';
import Lp from './flatList.js'
import MapView, { Marker } from 'react-native-maps'

export default function App() {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style = {styles.logo}
      />
        </View> 
        <Lp/>
        <MapView
          style={styles.container}
          initialRegion={{
         
          latitude: -22.9558,
          longitude: -43.1657,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
         

         }}
        >
        <Marker coordinate={{ latitude: -22.9559, longitude: -43.1657 }}/>
        </MapView>
      </ScrollView>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor:'white',
    padding: 200,
    
  },
  txt1: 
  {
    color: 'black',
    fontSize: 55,
  },
  logo: 
  {
    resizeMode:'contain',
    height: 350,
  },
  map: {
    
    width: 100,
    height: 40
    
  },
});

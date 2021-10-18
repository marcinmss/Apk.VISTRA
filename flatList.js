import React from "react";
import {View,Text,StyleSheet,FlatList} from 'react-native';

const pessoas = [
    {
        id:"Rastreador 1",
        coordenadas : ['-22.9558','-43.1661'],
    },
    {
        id:"\nRastreador 2",
        coordenadas : ['***','***'],
    },
    {
        id:"\nRastreador 3",
        coordenadas : ['***','***'],
    },
    {
        id:"\nRastreador 4",
        coordenadas : ['***','***'],
    },
    {
        id:"\nRastreador 5",
        coordenadas : ['***','***'],
    },
]

export default function()
{
    return(
        <View>
            <FlatList
                data = {pessoas}
                keyExtractor = {item => item.id}
                renderItem = {({item}) => 
                <View style = {styles.container}>
                    <Text style = {styles.txt}>
                        {item.id} 
                    </Text>
                    <Text style = {styles.txt2}>
                        Lat: {item.coordenadas[0]}   Long:{item.coordenadas[1]} 
                    </Text>
                </View>
                }
            />  
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      backgroundColor:'#F2F2F2',
    },
    txt: 
    {
        fontFamily: 'sans-serif-condensed',
      color: 'black',
      fontSize: 40,

    },
    txt2:
    {
        fontFamily: 'sans-serif-thin',
      color: 'black',
      fontSize: 30,
    }
  });
  
   
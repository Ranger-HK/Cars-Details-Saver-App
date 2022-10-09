import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TouchableCard({nav,data}) {
  return (
    <TouchableOpacity
      style={style.card}
      activeOpacity={0.85}
      onPress={() => {
            nav.navigate('VehicleInfo',{obj:data,readOnlyProp:true});
      }}>
      <HStack style={{padding: 10}} space={2} alignItems="center">
        <View style={{width: '35%'}}>
          <Image
            style={style.logo}
            source={require('../screens/assets/img/git.png')}
          />
        </View>
        {/* <VStack w="100" justifyContent="center">
            <Heading>BMW</Heading>
            <Text style={{marginBottom:10,fontWeight:'bold'}} >Kandy</Text>
        </VStack> */}
        <View style={{width: '62%'}}>
          <Heading size="sm">{data.vehicleBrand}</Heading>
          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
          <Ionicons name={"location-outline"} size={18} color={"red"} /> {data.location}
          </Text>
        </View>
      </HStack>
      {/* <Heading>BMW</Heading>
    <Text style={{marginBottom:10,fontWeight:'bold'}} >Kandy</Text>
    <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.title}</Text>
    <Text style={{marginBottom:10}} >{item.body}</Text> */}
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        paddingTop: 20, 
        paddingHorizontal: 20,
        // width:'80%'
    },

    card:{
        // borderWidth:1,
        marginBottom:'5%',
        padding:5,
        backgroundColor:"white",
        borderRadius: 10,
        
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        
        elevation: 5,
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode:"contain",
        // backgroundColor:"pink"
      },
})
import { View } from 'react-native'
import React from 'react'
import { NativeBaseProvider,VStack,Text,Input } from "native-base";


export default function Login() {
  return (
       <NativeBaseProvider>
      
      <VStack space={2} alignItems="center">
      <Text bold fontSize="4xl" color="indigo.600">Welcome !</Text>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="outline" placeholder="Outline" />
      <Input variant="outline" placeholder="Outline" />

      
         </VStack>
 
  </NativeBaseProvider>
  )
}
import { View } from 'react-native'
import React from 'react'

import {NativeBaseProvider,Text,VStack,Input,Button,Link,HStack,Avatar,Center,Image}from 'native-base'

export default function Loging_Page() {
  return (
    <NativeBaseProvider>

        <VStack space={4} alignItems="center" mt="5%">
        <Text bold fontSize="7xl" color="purple.700">Welcome Back</Text>
        </VStack>

            <Center>
            <Image size="350px"
            Thumbnail source= {require('../images/Login.png')} alt="Login" />
            </Center>

        <VStack space={4} alignItems="center" >
        <Input variant="filled"  size="lg" w="75%" mx="auto" placeholder="Username" />
        <Input type="password" size="lg" w="75%" mx="auto" variant="filled" placeholder="Password" /> 
        <Button w="50%" mx="auto" fontSize="lg" alignItems="center" h="13%" variant="solid" size="xsm" onPress={() => console.log("hello world")}>Login</Button>
        

        <HStack space={4} justifyContent="center">
        <Link href="https://github.com/Ranger-HK">
        <Avatar  bg="white" size="sm"  Thumbnail source= {require('../images/githubIcon.png') }  >  
        </Avatar>
        </Link>

        <Link href="https://www.google.com/">
        <Avatar bg="white" size="sm"  Thumbnail source= {require('../images/GoogleIcon.png') }  >  
        </Avatar>
        </Link>


        <Link href="https://www.facebook.com/ravindu.0">
        <Avatar bg="white" size="sm"  Thumbnail source= {require('../images/FacebookIcon.png') }  >  
        </Avatar>
        </Link>
        </HStack>

    
        <HStack space={3} justifyContent="center">
        <Text  bold>You Don't Have An Account ? </Text>
        <Link href="https://github.com/Ranger-HK" isExternal _text={{color: "blue.600"}}>Register Please</Link>  
        </HStack>

        </VStack>

        <VStack space={3} alignItems="center" mt="10%">
        <Text fontSize="xs"  bold>Designed By : Ravindu Prathibha </Text>
        </VStack>
       
    </NativeBaseProvider>
  )
}


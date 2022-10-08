import { View,StyleSheet } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image,Avatar}from 'native-base'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      
    <NativeBaseProvider>
      
      
        <VStack space={4} alignItems="center" mt="20%">
        <Text  bottom={10} bold fontSize="6xl" color="#16a085" underline >Welcome Back</Text>
        

        <Text top="90px" marginRight="83%" bold fontSize="sm" color="#079992">Email</Text>
        <Input  mt="20%" h="40px" w="90%" variant="underlined"  placeholder="Enter Email" />
        <Text top="20px" marginRight="77%" bold fontSize="sm" color="#079992">Password</Text>
        <Input w="90%" h="40px" variant="underlined" placeholder="Enter Password" />
        <Button mt="5%" w="70%" h="10%" backgroundColor="#16a085"  borderRadius="10" size="lg"onPress={()=>{navigation.navigate("Home")}}>LOGIN</Button>
        
           </VStack>
           <Text bottom={"12px"} left="75px" color={"#2f3640"}  bold fontSize="sm">Don't have an account ?</Text>
          
           <Link href="" bottom="30px" left="200" bold fontSize="xs" sExternal _text={{
        color: "#079992"}} onPress={()=>{navigation.navigate("Register")}}>
           Register Now!
      </Link>
     

      <Divider mt="10%" left="20px" w="80px"  top="4px"  h="2px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Text bottom="19px" left="125px" color={"#1e272e"} fontSize="lg">Or continue with</Text>

      <Divider bottom="36px" left="260px" h="2px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />

<Link href='https://www.google.com/'> <Image  left="75px" bottom="10px" size="50px"Thumbnail source= {require('./assets/img/google-logo.png')} alt="car logo" /></Link>
<Link href='www.facebook.com'> <Image  left="160px" bottom="56px" size="40px"Thumbnail source= {require('./assets/img/Facebook-logo.png')} alt="car logo" /></Link>
<Link href='https://www.apple.com/'>  <Image  left="231px" bottom="100px" size="46px"Thumbnail source= {require('./assets/img/apple-logo.png')} alt="car logo" /></Link>

          
           
    </NativeBaseProvider>
    </View>
  )

}

const styles =StyleSheet.create({
  container:{
    flex: 1,
  }
})
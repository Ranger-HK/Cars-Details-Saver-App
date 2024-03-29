import { View ,StyleSheet} from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Image,Link,HStack,Avatar,Center,Divider}from 'native-base'

export default function Register() {
  return (
    <View style={styles.container}>
    <NativeBaseProvider>
        <VStack space={4} alignItems="center" mt="10%">
        <Text bold fontSize="3xl" color="#16a085" underline>Registration from</Text>

        <Text top="40px" marginRight="71%" bold fontSize="sm" color="#079992">User Name</Text>
        <Input  mt="6%" w="85%" variant="underlined" placeholder="Enter User Name" />
        <Text top="20px" marginRight="78%" bold fontSize="sm" color="#079992">Email</Text>
        <Input w="85%" variant="underlined" placeholder="Enter Email" />
        <Text top="20px" marginRight="72%" bold fontSize="sm" color="#079992">Password</Text>
        <Input w="85%" variant="underlined" placeholder="Enter Password" />
        <Button mt="5%" w="50%" h="10%" backgroundColor="#16a085" borderRadius="10" size="lg">Create account</Button>
        </VStack>

        <Divider mt="10%"  bottom="-3px"  left="20px" h="2px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Text bottom="19px" left="127px"  fontSize="lg">Or continue with</Text>

      <Divider bottom="37px" left="260px" h="2px" w="80px" my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />

<Link href='https://www.google.com/'><Image  left="80px" bottom="12px" size="52px"Thumbnail source= {require('./assets/img/google-logo.png')} alt="car logo" /></Link>
<Link href='www.facebook.com'> <Image  left="158px" bottom="59px" size="40px"Thumbnail source= {require('./assets/img/Facebook-logo.png')} alt="car logo" /></Link>
<Link href='https://github.com/'> <Image borderRadius={"25px"} left="235px" bottom="99px" size="40px"Thumbnail source= {require('./assets/img/git.png')} alt="car logo" /></Link>

            <Text bottom="80px" left="80px" fontSize="sm">By creating an account, you agree to the </Text>
            <Text bottom="80px" left="75px" color="#16a085" fontSize="xs"> Free Membership Agreement </Text>
            <Text bottom="97px" left="203px" fontSize="sm">&</Text>
            <Text bottom="112px" left="218px" color="#16a085" fontSize="xs">Privacy Policy </Text>
            
    </NativeBaseProvider>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
  }
})
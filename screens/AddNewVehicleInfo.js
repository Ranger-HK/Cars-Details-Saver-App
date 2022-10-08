import { View,StyleSheet } from 'react-native'
import React from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image,Box}from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AddNewVehicleInfo({navigation}) {
  return (
    <View style={styles.container}>
     <NativeBaseProvider>
     <VStack space={4} alignItems="center" mt="10%">
     <Text bold fontSize="3xl" bottom="15px" underline color="#16a085">Add New Vehicle Information</Text>

     <Box mt="5%" height="20%" bottom="15px" width="70%" alignSelf="center" borderWidth="3" borderColor="#485460" borderRadius="20" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }} icon={<Ionicons color="black" name={"duplicate-outline"} size={18}/>}>
      </Box>
    
        <Text top="30px" left="-98" bold fontSize="sm" color="#16a085">Vehicle Brand Name</Text>
        <Input  bottom="-11" w="80%" variant="underlined" placeholder="Vehicle Brand Name" />
        <Text top="20px" left="-98" bold fontSize="sm" color="#16a085">Registation Number</Text>
        <Input  bottom="0" w="80%" variant="underlined" placeholder="Enter Registation Number" />
        <Text top="10px" left="-104" bold fontSize="sm" color="#16a085">Other Infomation</Text>
        <Input  bottom="2" w="80%" variant="underlined" placeholder="Enter Other Infomation" />
        {/* <Text top="-15px" left="-103" bold fontSize="sm" color="#16a085">Other Infomation</Text>
        <Input bottom="85" w="80%" h="20%" variant="underlined" placeholder="Enter Other Infomation" /> */}
        <Button top="22px" mt="0%" w="50%" h="8%" backgroundColor="#16a085" borderRadius="10" size="lg" onPress={()=>{navigation.navigate("Home")}}>Save</Button>
     
     </VStack>
      </NativeBaseProvider> 
      
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
    flex: 1,
  }
})
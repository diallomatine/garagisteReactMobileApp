import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { Box, Heading, FlatList, HStack } from "native-base";
import Garage from "./garage";

const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ]

const ListGarage = ({navigation})=>{

    const addGarage = () => {
        //console.log(navigation);
        navigation.navigate("AddGarage")
    }
    return (
        <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
        <View style={styles.header}>
            <Heading fontSize="xl" p="0" pb="0">
                Mes Garages
            </Heading>
            <TouchableOpacity onPress={()=> addGarage()}>
                <Image style = {styles.addIcon} source = {require("../../../../assets/add.png")}/>
            </TouchableOpacity>
        </View>
      
      <FlatList
        data={data}
        renderItem={( item ) => <Garage item={item}   />}
        keyExtractor={(item) => item.id}
    />
    </Box>
    )
}

const styles = StyleSheet.create({
    header : {
        flexDirection : "row",
        padding : 5,
        justifyContent : "space-between"
    },
    addIcon: {
        width : 35,
        height : 35,
        borderRadius : 35/2,
        marginLeft : 10,
        alignSelf : "flex-end"
    }
})

export default ListGarage;
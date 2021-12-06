import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { Box, Heading, FlatList, HStack } from "native-base";
import Garage from "./garage";
import { getUserGarages } from "../../../api/garagiste";


const ListGarage = ({navigation})=>{
  const [garages, setGarages] = useState([])

    const addGarage = () => {
        //console.log(navigation);
        navigation.navigate("AddGarage")
    }

    const handleGarageClicked = (garage)=>{
      navigation.navigate("GarageDetail", {
        garage : garage
      })
    }

    useEffect(()=>{
      getUserGarages(1)
            .then(response =>{ 
              setGarages(response.data)
              //console.log(response.data);
            })
            .catch(err => console.error(err))
    }, [])
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
        data={garages}
        renderItem={( item ) => <Garage item={item}  handleGarageClicked={handleGarageClicked} />}
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
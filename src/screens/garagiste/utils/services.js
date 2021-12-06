import { View , Text, Heading, FlatList,Box, HStack, Spacer, 
  VStack, Button, Modal, FormControl, Input} from "native-base";
import React, {useEffect, useState} from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { getGarageService } from "../../../api/garagiste";
import AddService from "../service/addService";

const Services = (props)=>{

  const [services, setServices] = useState([])
    const handleDeleteService = ()=> {
        Alert.alert("Suppression du service", "voulez-vous supprimer ce service", [
          {text : "Oui"},
          {text : "Annuler"}
        ])
    }

    useEffect(()=>{
      getGarageService(props.garageId)
          .then(res => setServices(res.data.services))
          .catch(err => console.error(err))
    }, [])

    return (
        <Box
          w={{
            base: "100%",
            md: "25%",
          }}
      >
        <View style={styles.title}>
            <Heading fontSize="xl" p="4" pb="3">
            List des services du garage
            </Heading>

            <AddService  services = {services}/>
            
        </View>

      <FlatList
        data={services}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.description}
                </Text>
              </VStack>
              <Spacer />
              
              <TouchableOpacity  onPress={handleDeleteService}>
                    <Image style={styles.deleteIcon} source={require("../../../../assets/delete.png")}/>
                </TouchableOpacity>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
    )
    
}

const styles = StyleSheet.create({
    title : {
        flexDirection :"row", 
    },
    addIcon : {
        width : 27,
        height : 27,
        borderRadius : 27/2,
        margin  : 15,
        alignSelf : "stretch"

    },
    deleteIcon : {
        width : 25,
        height : 25,
    }
})

export default Services;
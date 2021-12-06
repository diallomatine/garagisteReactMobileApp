import { View , Text, Heading, FlatList,Box, HStack, Spacer, 
  VStack, Button, Modal, FormControl, Input} from "native-base";
import React, {useState} from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

const Services = (props)=>{
    //console.log(props.services);
    const addService = ()=>{
        console.log("add Service");
    }
    const handleDeleteService = ()=> {
        Alert.alert("Suppression du service", "voulez-vous supprimer ce service", [
          {text : "Oui"},
          {text : "Annuler"}
        ])
    }

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

            <AddService />
            
        </View>

      <FlatList
        data={props.services}
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

export const AddService = () => {
  const [showModal, setShowModal] = useState(false)
  
  const addService = ()=>{
    //<Button onPress={() => setShowModal(true)}>Button</Button>
  }
  return (
    <View>
      
      <TouchableOpacity onPress={()=> setShowModal(true)}>
          <Image style = {styles.addIcon} source = {require("../../../../assets/add.png")}/>
      </TouchableOpacity>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      </View>
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
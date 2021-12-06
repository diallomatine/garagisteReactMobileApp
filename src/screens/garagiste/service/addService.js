import React, { useEffect } from "react"
import {
  Button,
  Modal,
   VStack, Heading,Select, CheckIcon,
  View,
} from "native-base"
import  { useState } from "react"
import { TouchableOpacity, Image, StyleSheet } from "react-native"
import { getServices } from "../../../api/garagiste"

export const AddService = (props) => {
  const [showModal, setShowModal] = useState(false)

  const [service, setService] = React.useState(-1)
  const [services, setServices] = useState([])


  const handleAddService = ()=> {
      //console.log(services);
  }

  const getUnUsedService = (data) => {
    const result = data.filter(({ id: id1 }) => !props.services.some(({ id: id2 }) => id1 === id2));
    return result;
  }

  useEffect(()=> {
    getServices()
        .then(res => {
          setServices(getUnUsedService(res.data))
        })
        .catch(err=> console.error(err))
  }, [])

  return (
    <View>

      <TouchableOpacity onPress={()=> setShowModal(true)}>
          <Image style = {styles.addIcon} source = {require("../../../../assets/add.png")}/>
      </TouchableOpacity>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Ajouter un service</Modal.Header>
          <Modal.Body>
            <VStack space={2}>
            <Heading fontSize="xl" p="5" pb="2">
              Choisir un service
            </Heading>

            <View >
              <Select
                    selectedValue={service}
                    minWidth="90%"
                    accessibilityLabel="Chosir un service"
                    placeholder="Chosir un service"
                    _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(service) => setService(service)}
                >
                    {services.map((e,i) => <Select.Item label={e.name}  value={e.id} key={e.id}/>)}

                </Select>
            </View>
                
              
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => handleAddService()}
            >
              Ajouter
            </Button>
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

export default AddService;

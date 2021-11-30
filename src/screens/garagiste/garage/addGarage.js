import { FormControl, Stack, Input, Box, WarningOutlineIcon, Button } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

const AddGarage = (props) => {
    const [garagename, setGarageName] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    const handleNameChanged = (text) => {
        if (condition) {
            
        }
    }
    return (
        <Box
      w={{
        base: "90%",
        md: "25%",
      }}
      style={styles.main}
    >
      <FormControl isRequired isInvalid={false}>
        <Stack mx="4">
          <FormControl.Label style={styles.formLabel}>Name</FormControl.Label>
          <Input style={styles.input} type="number"  placeholder="name" 
          onChangeText={text => handleNameChanged(text)}/>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl   >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Description</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="description" />
          
        </Stack>
      </FormControl>

      <FormControl isRequired isInvalid={false} >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Email</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="email" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            le mail n'est pas valide
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl isRequired isInvalid={false} >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Téléphone</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="telephone 0867897878" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Le numero de téléphone n'est pas valide
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>


      <FormControl isRequired isInvalid={false} >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Longitude</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="longitude" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            La longitude n'est pas valide
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl isRequired isInvalid={false} >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Latitude</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="latitude" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            La latitude n'est pas valide
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <Button style={styles.valideButton}>Ajouter le garage</Button>

      
    </Box>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection :"column",
        alignSelf : "center"
    }, 
    formLabel : {
        alignSelf : "center"
    },
    input : {
        fontSize : 20,
        borderColor : "rgba(215, 23, 23, 0.67)"
    }, 
    valideButton : {
        margin : 12
    }
})

export default AddGarage;
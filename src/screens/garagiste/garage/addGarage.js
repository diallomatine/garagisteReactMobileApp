import { FormControl, Stack, Input, Box, WarningOutlineIcon, Button } from "native-base";
import React, { useState } from "react";
import { Alert, StyleSheet, Text } from "react-native";
import { addGarageToServer } from "../../../api/garagiste";

const AddGarage = (props) => {
    const [formData, setData] = useState({user : 1})
    const [errors, setErrors] = useState({})

    const checkMail = (email) =>{
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email) === false) {
        return false;
      }
      return true
    }
    const mobilePhoneValid = (phoneNumber) =>{
      const reg = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
      if (reg.test(phoneNumber) === false) {
        return false;
      }
      return true;
    }

    const handleValidateGarage = () => {
        if (formData.name === undefined  || formData.name.trim() === "") {
          setErrors({
            ...errors, name : "Le nom est obligatoire"
          });
          return false
        }
        if (formData.email === undefined || formData.email.trim() === "") {
          setErrors({
            ...errors, email : "Le mail est oblgatoire"
          });
          return false;
        }
        if (!checkMail(formData.email)) {
          setErrors({
            ...errors, email : "Le mail n'est pas valide"
          });
          return false;
        }
        if (formData.phone_number === undefined || formData.phone_number.trim() === "") {
          setErrors({
            ...errors, phone_number : "Le télephone est obligatoire"
          });
          return false;
        }
        if (!mobilePhoneValid(formData.phone_number)) {
          setErrors({
            ...errors, phone_number : "Le numero saisi n'est pas valide"
          });
          return false
        }
        if (formData.longitude !== undefined ){
          if (isNaN(formData.longitude)) {
            setErrors({
              ...errors, longitude : "La longitude doit être un nombre"
            });
            return false
          }
          else if(parseFloat(formData.longitude) < -180 || parseFloat(formData.longitude) > 180){
            setErrors({
              ...errors, longitude : "La longitude n'est pas valide"
            });
            return false
          }
          
        }
        if (formData.latitude !== undefined ){
          if (isNaN(formData.latitude)) {
            setErrors({
              ...errors, latitude : "La latitude doit être un nombre"
            });
            return false
          }
          else if(parseFloat(formData.latitude) < -90 || parseFloat(formData.latitude) > 90){
            setErrors({
              ...errors, latitude : "La latitude n'est pas valide"
            });
            return false
          }
          
        }

        addGarageToServer(formData).then(res => {
          Alert.alert("Garage ajouté avec succés")
        }).catch(Alert.alert("un problème est survenu"))
        
        
    }
    return (
        <Box
      w={{
        base: "90%",
        md: "25%",
      }}
      style={styles.main}
    >
      <FormControl isRequired isInvalid={'name' in errors}>
        <Stack mx="4">
          <FormControl.Label style={styles.formLabel}>Name</FormControl.Label>
          <Input  style={styles.input} type="text"  placeholder="name"
              
             onChangeText={value => setData({...formData, name: value})}
             onChange={()=> delete errors.name}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.name}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl   >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Description</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="description" 
            onChangeText={value => setData({...formData, description: value})}
          />
          
        </Stack>
      </FormControl>

      <FormControl isRequired isInvalid={'email' in errors} >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Email</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="email" 
            onChangeText={value => setData({...formData, email: value})}
            onChange={()=> delete errors.email}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.email}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl isRequired isInvalid={'phone_number' in errors} >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Téléphone</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="0867897878" 
            onChangeText={value => setData({...formData, phone_number: value})}
            onChange={()=> delete errors.phone_number}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.phone_number}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl   >
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Adresses</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="address" 
            onChangeText={value => setData({...formData, address: value})}
          />
          
        </Stack>
      </FormControl>


      <FormControl  isInvalid={'longitude' in errors}>
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Longitude</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="longitude"
           onChangeText={value => setData({...formData, longitude: value})} 
           onChange = {()=> delete errors.longitude}
           />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.longitude}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl isInvalid={'latitude' in errors}>
        <Stack mx="3">
          <FormControl.Label style={styles.formLabel}>Latitude</FormControl.Label>
          <Input style={styles.input} type="text"  placeholder="latitude" 
            onChangeText={value => setData({...formData, latitude: value})}
            onChange ={()=> delete errors.latitude}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errors.latitude}
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <Button style={styles.valideButton}
        onPress = {() =>handleValidateGarage()}
      >Ajouter le garage
      </Button>

      
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
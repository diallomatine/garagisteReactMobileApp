import React, {useEffect} from "react";
import {  Button, Heading, VStack , TextArea, Text, Input, Center} from "native-base";
import { View, StyleSheet, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import GarageService from "../garage/garageservice";
import {addBooking, baseUrl} from "../../../api/garagiste";


const PlanAppointement = ({route, navigation}) =>{
    const {garages} = route.params

    let [commentaire, setCommentaire] = React.useState("")
    let [currentGarageId, setCurrentGarageId] = React.useState(-1);
    let [currentServiceId, setCurrentServiceId] = React.useState(-1)
    let [date, setDate] = React.useState(new Date())
    const [price, setPrice] = React.useState("");
    

    const onDateTimeChange =  (event, selectedDate) =>{
        setDate(selectedDate)
    }

    /**
     * Authorization: `Bearer ${store.getState().jwt}`,
     */
    const handleValidateBooking =  () =>{
        const data = {service : currentServiceId, garage : currentGarageId,
            date : date, description : commentaire, price : price, status : "VALIDATED"};
        
            addBooking(data)
                .then(res => {
                    Alert.alert("réservation ajouté avec sccé")
                })
                .catch(err => console.error(err))


    }

    return(
        <Center flex={0.8} px="0" width="100%">
        <VStack
            mt={3}
            space={5}
            w={{
                base: "75%",
                md: "25%",
            }}$

            style={styles.main_container}
        >
            <View>
                <Heading textAlign="center" mb="10">
                    Planifier un RDV
                </Heading>
            </View>

            <View >
                
                <GarageService garages={garages} setCurrentGarageId= {setCurrentGarageId} setCurrentServiceId = {setCurrentServiceId}/>
            </View>

            <DateTimePicker
                style={styles.dateTime}
                value={date}
                mode={"datetime"}
                is24Hour={true}
                display="compact"
                onChange={onDateTimeChange}
                />
            
            <View>
                <Text bold fontSize="sm" mb="4">
                    Ajouter un commentaire
                </Text>
                <TextArea style={styles.textArea}
                    aria-label="t1Disabled"
                    placeholder="Ajouter un commentaire"
                    value={commentaire}
                    onChangeText={coment => setCommentaire(coment)}
                    w={{
                        base: "70%",
                        md: "25%",
                    }}
                />
            </View>

            <View>
                    <Heading textAlign="center" mb="2">
                        Tarif
                    </Heading>
                <Input isRequired={true} size="xl" placeholder="xs Input" style={{borderColor : "#5dcfe3"}}
                onChangeText={price => setPrice(price)} />
                
            </View>
      
            <View>
                <Button onPress= {() => handleValidateBooking()}>Valider le rendez-vous</Button>
            </View>
        
    </VStack>
    </Center>
    );

}

const styles = StyleSheet.create({
    main_container : {
        justifyContent : "center",
        alignContent : "center"
    },
    textArea : {
        borderColor : "#5dcfe3",
        
    },
    dateTime:{
    }
    
});

export default PlanAppointement;


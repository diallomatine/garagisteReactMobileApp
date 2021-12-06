import { Text, View, Radio } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Clients from "../utils/clients";
import Services from "../utils/services";


const GarageDetail = ({route, navigation})=>{
    const {garage} = route.params
    const [state, setState] = React.useState("clients")

    const handleStateChange = (state)=>{
        setState(state)
    }
    useEffect(()=>{
        //console.log(garage.services);
    }, [state])

    return (
        <View>
            <View>
                <Radio.Group 
                    style={styles.radio}
                    name="myRadioGroup"
                    accessibilityLabel="favorite number"
                    value={state}
                    defaultValue = {state}
                    onChange={(state) => {
                        handleStateChange(state)
                    
                    }}
                >
                <Radio value="clients" my={1} colorScheme="yellow" size="lg">
                    Clients
                </Radio>
                <Radio value="services" my={1} colorScheme="yellow" size="lg">
                    Services
                </Radio>

                
                </Radio.Group>
            </View>
            
            {
                state == "services" && (
                    <Services  garageId={garage.id}/>
                )
            }
            {
                state == "clients" && (
                    <Clients  bookings = {garage.bookings} garageId={garage.id}/>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    radio : {
        flexDirection : "row",
        justifyContent : "space-around"
    }
})
export default GarageDetail;
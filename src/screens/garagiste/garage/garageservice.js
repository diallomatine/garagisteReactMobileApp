import React , {useEffect} from "react";
import { StyleSheet, View } from "react-native";
import { Select,  CheckIcon} from "native-base";
import {baseUrl} from '../../../api/garagiste'

const GarageService = (props)=>{
    const setCurrentServiceId = props.setCurrentServiceId;
    const setCurrentGarageId = props.setCurrentGarageId;

    const [garage, setGarage] = React.useState(-1)
    const [garages, setGarages] = React.useState(props.garages)
    
    const [service, setService] = React.useState(-1)
    const [services, setServices] =  React.useState([]);

    const setCurrentGarage = (garageId) => {
        setGarage(garageId)
        setCurrentGarageId(garageId)

    }
    const setCurrentService = (serviceId) => {
        setService(serviceId)
        setCurrentServiceId(serviceId)
    }

    useEffect(()=>{
        const selectedGrage = garages.filter(e => e.id == parseInt(garage))
        if (selectedGrage.length > 0) {
            setServices(selectedGrage.pop().services);
        }

    }, [garage])


    return (
        <View>
                <Select
                    style={styles.service}
                    
                    selectedValue={garage}
                    minWidth="90%"
                    accessibilityLabel="Chosir un garage"
                    placeholder="Chosir un garage"
                    _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setCurrentGarage(itemValue)}
                >
                    {garages.map((e,i) => <Select.Item label={e.name}  value={e.id} key={e.id}/>)}

                </Select>

                <Select
                    style={styles.service}
                    selectedValue={service}
                    minWidth="200"
                    accessibilityLabel="Chosir un service"
                    placeholder="Chosir un service"
                    _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setCurrentService(itemValue)}
                    >
                    {services.map((e,i) => <Select.Item label={e.name}  value={e.id} key={e.id}/>)}

                </Select>
        </View>
    );

}

const styles=StyleSheet.create({
    service : {
        borderWidth : 1,
        borderColor : "#5dcfe3",
        fontSize : 18
    }
})

export default GarageService;


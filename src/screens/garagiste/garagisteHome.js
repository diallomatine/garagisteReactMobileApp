import React, {useEffect} from "react";
import { Center, Select, CheckIcon, Alert } from "native-base";
import { StyleSheet } from "react-native";
import ListBooking from "./booking/listBooking";
import BookingSorter from "./booking/bookingSorter";
import {getUserGarages} from "../../api/garagiste";

const GaraGisteHome = ({navigation})=>{
    const [garages, setGarages] = React.useState([])
    const [garage, setGarage] = React.useState(-1)
    const [bookingDateState ,setBookingDateState] = React.useState("venir");

    
    const planRdvHandler =() =>{
        navigation.navigate("PlanRdv", {
            garages : garages
        })
    }

    const handleBookingClicked = (booking) =>{
        navigation.navigate("detailBooking", {
            booking: booking
        })
    }


    useEffect( () => {
        getUserGarages(1).then(response=> {
            setGarages(response.data)

        })
        .catch(err=> console.error())
        
        /*const focus = navigation.addListener('focus', () => {
            const currentGarage = garage;
            //setGarage(-1).then(setGarage(currentGarage))
            
        })*/
    }, []);


    return (
        <Center flex={0} px="1">
          <BookingSorter planRdvHandler={planRdvHandler}  setBookingDateState = {setBookingDateState}/>

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
                    onValueChange={(itemValue) => setGarage(itemValue)}
                >
                    {garages.map((e,i) => <Select.Item label={e.name}  value={e.id} key={e.id}/>)}

                </Select>

          <ListBooking  idGarage= {garage} dateState= {bookingDateState} handleBookingClicked= {handleBookingClicked}/>
        </Center>
    );

}

const styles=StyleSheet.create({
    service : {
        borderWidth : 1,
        borderColor : "#5dcfe3",
        fontSize : 18
    }
})

export default GaraGisteHome;
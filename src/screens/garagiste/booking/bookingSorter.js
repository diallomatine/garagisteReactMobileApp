import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Radio , View} from "native-base";


const BookingSorter = (props)=>{
    

    const [state, setState] = React.useState("venir")
    const setBookingDateState = props.setBookingDateState;
    const planRdvHandler = props.planRdvHandler;

    const handleStateChange = (state)=>{
        setBookingDateState(state)
        setState(state)
    }

    return (
        <View style={styles.main_container}>
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
        <Radio value="venir" my={1} colorScheme="yellow" size="lg">
            A VENIR
        </Radio>
        <Radio value="passe" my={1} colorScheme="yellow" size="lg">
            PASSE
        </Radio>
        <Radio value="futur" my={1} colorScheme="yellow" size="lg">
            NON PRIS
        </Radio>

        
        </Radio.Group>

        <TouchableOpacity onPress={()=> planRdvHandler()}>
            <Image style = {styles.addIcon} source = {require("../../../../assets/add.png")}/>
        </TouchableOpacity>
        
        </View>
        
    );

}

const styles = StyleSheet.create({
    main_container : {
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center"
    },
    radio : {
        flexDirection : "row",
    }, 
    addIcon : {
        width : 25,
        height : 25,
        borderRadius : 25/2,
        marginLeft : 10,
        alignSelf : "flex-end"
    }
});

export default BookingSorter;
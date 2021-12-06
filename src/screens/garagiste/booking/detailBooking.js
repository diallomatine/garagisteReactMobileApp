import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Avatar, Heading } from "native-base";
import {baseUrl, deleteBooking, upDateBookingDate} from "../../../api/garagiste";
import moment from "moment";
require('moment/locale/fr');
import BookingEditor from './bookingEditor'


const DetailBooking = ({route, navigation})=>{

    const {booking} = route.params
    let userBooker = booking.user ? booking.user : {firstname : "Non", lastname : "Reservé"}
    const [modalVisible, setModalVisible] = useState(false)
    const [date, setDate] = useState(booking.date)

    const AvatarAdapter = ()=>{
        try {
          const avatarUrl =booking.user.avatar.formats.thumbnail.url
          return (
                    <Avatar
                        size="130px"
                        source={{
                        uri: baseUrl + avatarUrl,
                        }}
                    />              
          );
        } catch (error) {
          return (
            <View>
              <Image  style = {styles.profil} source = {require("../../../../assets/user.png")}/>
            </View>
  
          );
        }
    }

    const handleUpdateBookingDate = (newDate)=>{
        booking.date = newDate
        upDateBookingDate(booking.id, booking)
            .then(res => {
                setDate(newDate);
                setModalVisible(false)
                Alert.alert("Modifier avec succés")
            })
            .catch(err => console.error(err))

        
    }
    const handleDeletebooking =  ()=>{
        deleteBooking(booking.id)
            .then(res => {
                Alert.alert("Supprimer avec succés")
                navigation.goBack()
            })
            .catch(err=> console.error(err))        
    }
    

    
    const handleEditClicked = ()=> {
        setModalVisible(true)
    }

    const handleDeleteClicked = ()=>{
        Alert.alert("Suppression", "Voulez-vous supprimer ce RDV", [
            {text : "Oui", onPress : () => {handleDeletebooking()}},
            {text : "Annuler"}
        ])
    }

    
    return (
        <View >
            <BookingEditor modalVisible={modalVisible} date = {date} 
                setModalVisible = {setModalVisible} updateBookingDate ={handleUpdateBookingDate}
                />

            <View style={styles.user_container}>
                <View>
                    {AvatarAdapter()}
                </View>

                <View>
                    <Heading fontSize="4xl" p="8" pb="2">
                        {userBooker.firstname + "  "}
                        {userBooker.lastname}
                    </Heading>
                </View>
                <View>
                    <Heading fontSize="xl" p="5" pb="2">
                        {booking.service.name + " - "}
                        {moment(date).format("dddd")}
                        {" " +moment(date).format("DD-MM-YYYY")}
                        {" - "+ moment(date).format("HH:MM")}
                    </Heading>
                </View>
                <View style={{flexDirection : "row"}}>
                    <Image style={styles.moneyAvatar} source={require("../../../../assets/orange_money.png")}/>
                    <Image style={styles.moneyAvatar} source={require("../../../../assets/credit-card.png")}/>
                    <Image style={styles.moneyAvatar} source={require("../../../../assets/moneyespece.png")}/>
                </View>
                
            </View>

            <View style={styles.booking_description}>
                <View>
                    <Heading fontSize="xl" p="5" pb="2">
                        Commentaire
                    </Heading>
                </View>
                <View>
                    <Heading fontSize="sm" p="1" >
                        {booking.usercomment}
                    </Heading>
                </View>
            </View>

            <View style={styles.booking_edit}>
                <TouchableOpacity onPress= {handleEditClicked}>
                    <Image  style={styles.edit_icon} source={require("../../../../assets/pencil.png")}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress= {handleDeleteClicked}>
                    <Image style={styles.edit_icon} source={require("../../../../assets/delete.png")}/>
                </TouchableOpacity>
                

            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    user_container : {
        alignItems : "center",
        backgroundColor : "#fffdf8",
        borderWidth : 1,
        borderColor : "#fffdf8",
        borderRadius : 20,
        paddingBottom : 10,
        paddingTop : 10
    },
    profil : {
        width : 130,
        height : 130,
        borderRadius : 130/2,
    },
    moneyAvatar : {
        width : 48,
        height : 48,
    },
    booking_description : {
        alignItems : "center",
        borderWidth : 1,
        borderColor : "#fffdf8",
        borderRadius : 20,
        paddingBottom : 10,
        paddingTop : 10
    },
    booking_edit : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
        borderTopWidth : 1,
        borderTopColor : "#fffdf8",
        borderTopLeftRadius : 100,
        borderTopEndRadius : 100,
        paddingBottom : 10,
        paddingTop : 10
    },
    edit_icon : {
        width : 47,
        height : 47,
    }
})

export default DetailBooking;
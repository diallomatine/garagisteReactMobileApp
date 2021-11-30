import React from "react";
import { StyleSheet, TouchableOpacity , Image} from "react-native";
import {
    Box,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    View,
  } from "native-base";

import {baseUrl} from "../../api/garagiste";
import moment from "moment";

const Service = (props)=>{
    const item = props.item.item;
    // pour rendez-vous qui n'ont pris
    let userBooker = item.user ? item.user : {firstname : "", lastname : ""}
    const handleBookingClicked = props.handleBookingClicked

    


    const AvatarAdapter = ()=>{
      

      try {
        const avatarUrl =item.user.avatar.formats.thumbnail.url
        return (
          <View>
            <Avatar
                  size="48px"
                  source={{
                    uri: baseUrl + avatarUrl,
                  }}
                />
          </View>
        );
      } catch (error) {
        return (
          <View>
            <Image  style = {styles.avatar} source = {require("../../../assets/user.png")}/>
          </View>

        );
      }
      
    }

    


    return (
      <TouchableOpacity onPress= {()=> handleBookingClicked(item)}>
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="4"
          >
            <HStack space={3} justifyContent="space-between">
              {AvatarAdapter()}
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {userBooker.firstname} 
                  {'  ' + userBooker.lastname}
                  {'  -  ' +item.service.name}

                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {moment(item.date).format("DD-MM-YYYY")}
                </Text>
              </VStack>

              <Spacer />

              <VStack>
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {moment(item.date).format("HH:MM")}
              </Text>

              <Text  fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                        {item.price} €
              </Text>
              </VStack>
              

            </HStack>
          </Box>
  
      </TouchableOpacity>
        
    );

}

const styles = StyleSheet.create({
  avatar : {
    width : 47,
    height : 47,
    borderRadius : 47/2,
}
})

export default Service;

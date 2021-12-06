import { View , Text, Heading, Box, FlatList, HStack, 
    VStack, Spacer, Avatar, Modal, FormControl, Button } from "native-base";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";
import { getGarageBookings } from "../../../api/garagiste";
import { baseUrl } from "../../../api/garagiste";

const Clients = (props) => {
    const [users, setUsers] = useState([]);

    const filterUser = (bookings)=> {
        const result = [];
        const map = new Map();
        for (const item of bookings) {
            if (item.user) {
                if (!map.has(item.user.id)) {
                    map.set(item.user.id, true);
                    result.push(item)
                }
            }
        }
        return result;
    }

    const AvatarAdapter = (item)=>{
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
              <Image  style = {styles.avatar} source = {require("../../../../assets/user.png")}/>
            </View>
  
          );
        }
        
      }

    useEffect(()=>{
        getGarageBookings(props.garageId)
            .then(res => setUsers(filterUser(res.data)))
            .catch(err => console.error(err))
    }, [])
    return(
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Liste des clients du garage
      </Heading>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              {AvatarAdapter(item)}
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.user.firstname}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.user.lastname}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
    )
}



  

const styles = StyleSheet.create({
    avatar : {
      width : 47,
      height : 47,
      borderRadius : 47/2,
  }
  })

export default Clients; 
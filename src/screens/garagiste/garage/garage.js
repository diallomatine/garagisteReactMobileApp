import React, {useEffect} from "react";
import { Box, HStack, VStack, Text, Avatar, Spacer, Button } from "native-base";
import { View } from "react-native";
import { baseUrl } from "../../../api/garagiste";

const Garage = (props)=> {
    const item = props.item.item

    useEffect(()=>{
      //console.log(baseUrl + item.logo.formats.thumbnail.url);
    }, [])

    return (
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
              <Avatar
                size="48px"
                source={{
                  uri: baseUrl + item.logo.formats.thumbnail.url
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.name}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.address}
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
                <Button>details</Button>
              </Text>
            </HStack>
          </Box>
        
    );

}

export default Garage;
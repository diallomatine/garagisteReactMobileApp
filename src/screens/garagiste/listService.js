import React, {useEffect} from "react"
import {Box, Heading, FlatList} from 'native-base'
import Service from "./service";
import {baseUrl} from "../../api/garagiste";
import moment from "moment";
//http://localhost:1337/bookings?id=2&date_gt=2021-11-17T11:00:00.000Z

const ListService = (props)=>{
    const idGarage= props.idGarage;
    const dateState = props.dateState;

    const midnightTime = moment(new Date().setUTCHours(0,0,0,0))
    const date = {venir : midnightTime, passe: midnightTime.add(-1, "days"), 
                    futur : midnightTime.add(1, "days")}


    const [data, setData] = React.useState([]);

    const dateUrlFilter = () => {
        let res = ""
        if (dateState === "venir") {
            res = "date_gt=" +date[dateState]+"&user_null=false"
        }
        else if (dateState === "passe") {
            res = "date_lt=" +date[dateState]+"&user_null=false"
        }
        else {
            res = "date_gt=" +date[dateState]+"&user_null=true"
        }
        return res;
    }
    useEffect(()=>{
        const url = baseUrl+'/bookings?garage='+ idGarage+'&'+ dateUrlFilter()
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setData(res)
            })
            .catch(err => console.error(err))
    }, [idGarage, dateState]);

    return (
        <Box
            w={{
                base: "100%",
                md: "25%",
            }}
            >
            <Heading fontSize="xl" p="4" pb="3">
                Inbox
            </Heading>
            <FlatList
                data={data}
                renderItem={( item ) => <Service item={item} handleBookingClicked = {props.handleBookingClicked} />}
                keyExtractor={(item) => item.id}
            />
    </Box>
    );
}

export default ListService;


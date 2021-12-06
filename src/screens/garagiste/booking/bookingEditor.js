import React, {useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Modal, VStack, Button, Heading } from "native-base";
import { StyleSheet, View } from "react-native";

const BookingEditor = (props) => {
  const [date, setDate] = useState(props.date)

  const onDateTimeChange = (event, newDate)=>{
    setDate(newDate)
  }
  const validateDateChange = ()=>{
    props.updateBookingDate(date)
  }

  return (
    <Modal isOpen={props.modalVisible} onClose={() => props.setModalVisible(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Voulez-vous modifier ce RDV ??</Modal.Header>
          <Modal.Body>
            <VStack space={2}>
            <Heading fontSize="xl" p="5" pb="2">
              Choisir une nouvelle date
            </Heading>
            <View style={styles.date}>
              <DateTimePicker
                    value={new Date(date)}
                    mode={"datetime"}
                    is24Hour={true}
                    display="compact"
                    onChange={onDateTimeChange}
                    />
            </View>
                
              
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => validateDateChange()}
            >
              Valider
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
  );
};
const styles = StyleSheet.create({
  date : {
    justifyContent : "flex-start",
  }
})


export default BookingEditor;
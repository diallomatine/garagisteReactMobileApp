import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import GaraGisteHome from "../screens/garagiste/garagisteHome";
//import PlanAppointement from "../screens/garagiste/booking/planAppointement";
import PlanAppointement from '../screens/garagiste/booking/planAppointement';
import DetailBooking from '../screens/garagiste/booking/detailBooking';

const GaragisteScreenStack = () =>{
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={GaraGisteHome}
            options={
              {headerShown : false}
            }
          />
          <Stack.Screen
              name="PlanRdv"
              component={PlanAppointement}
              options={
                {headerBackTitle : ""}
              }
              
          />
          <Stack.Screen 
            name="detailBooking"
            component={DetailBooking}
            options={
              {headerBackTitle : ""},
              {title : ""}
            }
            
          />
        </Stack.Navigator>
    );
}

/*const screens = {
    GaraGisteHome : {
        screen : GaraGisteHome
    },
    PlanAppointement : {
        screen : PlanAppointement
    }
}

const GaragisteScreenStack = createStackNavigator(screens);
export default createAppContainer(GaragisteScreenStack); */

export default GaragisteScreenStack;
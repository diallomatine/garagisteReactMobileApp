//import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import GaraGisteHome from "../screens/garagiste/garagisteHome";
import PlanAppointement from "../screens/garagiste/planAppointement";
import DetailBooking from '../screens/garagiste/detailBooking';

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
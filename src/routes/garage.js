import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListGarage from '../screens/garagiste/garage/listGarage';
import AddGarage from '../screens/garagiste/garage/addGarage';
import GarageGestionHome from '../screens/garagiste/garage/garageGestionHome';

const GarageGestion = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen  
                name="Home"
                component={ListGarage}
                options={
                    {headerShown : false}
                  }
            />
            <Stack.Screen 
                name="AddGarage"
                component={AddGarage}
                
            />
           

        </Stack.Navigator>
    );
}

/*
 <Stack.Screen 
                name="AddGarage"
                component={AddGarage}
            />*/

export default GarageGestion;
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListGarage from '../screens/garagiste/garage/listGarage';
import AddGarage from '../screens/garagiste/garage/addGarage';
import GarageDetail from '../screens/garagiste/garage/garageDetail';

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
            <Stack.Screen
                name="GarageDetail"
                component={GarageDetail}
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
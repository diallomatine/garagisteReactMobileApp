//import {createDrawerNavigator} from 'react-navigation-drawer'
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GaragisteScreenStack from './garagiste';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GarageGestion from './garage';


const GaragisteHomeDrawer = ()=>{
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Mes Garages" 
                screenOptions={
                    {headerTitleAlign: "left"}                
                }
            >

                <Drawer.Screen name="Accueil"
                    options={
                        {drawerIcon : ({ tintColor }) =>(
                            <Image  source=  {require("../../assets/apple.png")}
                            style={[styles.icon, { tintColor: tintColor }]}
                            />
                        )}
                    }
                    component={GaragisteScreenStack}
                />
                <Drawer.Screen
                    name="Mes Garages"
                    component={GarageGestion}
                    options={
                        {drawerIcon : ({ tintColor }) =>(
                            <Image  source=  {require("../../assets/garage.png")}
                            style={[styles.icon, { tintColor: tintColor }]}
                            />
                        )}
                    }
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

export default GaragisteHomeDrawer;
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../Screens/Home';
import Historia from '../Screens/Historia';
import Npcs from '../Screens/Npcs';
import Chefes from '../Screens/Chefes';
import Armas from '../Screens/Armas';
import Equipamentos from '../Screens/Equipamentos';
import Lugares from '../Screens/Lugares';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(

        <Drawer.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if(route.name === "Historia"){
                        iconName = focused
                        ? 'menu-sharp'
                        : 'menu-outline'
                    } else if(route.name === "Home"){
                        iconName = focused
                        ? 'md-home-sharp'
                        : 'md-home-outline'
                    }

                    return <Icon name={iconName} size={size} color={color}></Icon>
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green'
            })} 
        >
            <Drawer.Screen component={Home} name='Home'/>
            <Drawer.Screen component={Historia} name='História'/>
            <Drawer.Screen component={Npcs} name='NPCs'/>
            <Drawer.Screen component={Chefes} name='Chefes'/>
            <Drawer.Screen component={Armas} name='Armas'/>
            <Drawer.Screen component={Equipamentos} name='Equipamentos'/>
            <Drawer.Screen component={Lugares} name='Lugares'/>
        </Drawer.Navigator>
    )
}
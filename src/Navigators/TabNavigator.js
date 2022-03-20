import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from '../Screens/Home';
import Historia from '../Screens/Historia';

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(

        <Tab.Navigator
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
                /* tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green' */
            })}
        >
            <Tab.Screen component={Home} name='Home'/>
            <Tab.Screen component={Historia} name='História'/>
        </Tab.Navigator>
    )
}
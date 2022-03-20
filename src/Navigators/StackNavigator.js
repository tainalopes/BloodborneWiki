import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import Historia from '../Screens/Historia';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(

        <Stack.Navigator>
            <Stack.Screen component={Home} name='Home'/>
            <Stack.Screen component={Historia} name='História'/>
        </Stack.Navigator>
    )
}
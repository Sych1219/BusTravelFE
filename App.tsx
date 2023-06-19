import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import nearbyScreen from "./src/screens/NearbyScreen";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavouriteScreen from "./src/screens/FavouriteScreen";
import NearbyScreen from "./src/screens/NearbyScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HeartIcon, MapIcon} from "react-native-heroicons/outline";

type RootParamList = {
    FavouriteScreen: undefined
    NearbyScreen: undefined
    Screen3: { paramB: string; paramC: number }
}

function App(): JSX.Element {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator<RootParamList>();
    const Root = createNativeStackNavigator<RootParamList>();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={'FavouriteScreen'}>
                <Tab.Screen name="FavouriteScreen" component={FavouriteScreen} options={{
                    title: 'Favourite',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <HeartIcon size={size} color={color}/>
                    ),
                    tabBarLabelPosition: 'beside-icon',
                }}/>
                <Tab.Screen name="NearbyScreen" component={NearbyScreen} options={{
                    title: 'Nearby',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MapIcon size={size} color={color}/>
                    ),
                    tabBarLabelPosition: 'beside-icon',
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default App;

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import nearbyScreen from "./src/screens/NearbyScreen";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavouriteScreen from "./src/screens/FavouriteScreen";
import NearbyScreen from "./src/screens/NearbyScreen";

type RootParamList = {
    FavouriteScreen: undefined
    NearbyScreen: undefined
    Screen3: { paramB: string; paramC: number }
}
function App(): JSX.Element {
    const Stack = createNativeStackNavigator();

    const Root = createNativeStackNavigator<RootParamList>();
    return (

        // <View className="flex-1 items-center justify-center bg-white">
        //    <Test></Test>
        // </View>
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="FavouriteScreen" component={FavouriteScreen} />
                <Root.Screen name="NearbyScreen" component={NearbyScreen} />
            </Root.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Home" component={nearbyScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
}


export default App;

import React from 'react';
import {StatusBar, Text, View,} from 'react-native';
import Test from "./src/components/Test";


function App(): JSX.Element {
    return (
        // <View>
        //     <Text>Test</Text>
        // </View>
        <View className="flex-1 items-center justify-center bg-white">
           <Test></Test>
        </View>
    );
}


export default App;

import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import {HeartIcon} from "react-native-heroicons/outline";
import BusItem, {BusItemProps} from "../components/BusItem";
import Divider from "../components/Divider";

const FavouriteScreen = () => {
    //based on BusItemProps to mock several data each inside is BusItemProps
    let data: BusItemProps[] = [
        {
            busCode: "117",
            busType: 'bendy',
            isWheelChairAccessible: true,
            load: 1,
            nextBus: 2,
            nextBus2: 3,
            nextBus3: 4
        },
        {
            busCode: "34",
            busType: 'double deck',
            isWheelChairAccessible: true,
            load: 1,
            nextBus: 2,
            nextBus2: 3,
            nextBus3: 4
        },
        {
            busCode: "33",
            busType: 'single deck',
            isWheelChairAccessible: false,
            load: 1,
            nextBus: 2,
            nextBus2: 3,
            nextBus3: 4
        },
    ]


    return (
        <SafeAreaView>
            {data.map((item, index) =>
                (<BusItem key={index}
                          busCode={item.busCode}
                          busType={item.busType}
                          isWheelChairAccessible={item.isWheelChairAccessible}
                          load={item.load} nextBus={item.nextBus}
                          nextBus2={item.nextBus2} nextBus3={item.nextBus3}
                />)
            )
            }


        </SafeAreaView>
    );


}

export default FavouriteScreen;

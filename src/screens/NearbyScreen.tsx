import {Animated, Dimensions, StyleSheet} from "react-native";
import React from "react";
import CustomerTabView from "@components/CustomerTabView";
import MockBusStops from "../models/MockBusStops";
import {BusType, LoadType, Service} from "@components/BusItem";


// Define the type for your tab routes
type Route = { key: string; title: string };

export interface BusStopWithBusesInfoProps {
    busStopRoadName: string;
    busStopCode: string;
    distanceToBusStop: number;
    services: Service[];
}

// export interface Service {
//     serviceNo: string;
//     operator: string;
//     nextBus: NextBus;
//     nextBus2: NextBus;
//     nextBus3: NextBus;
// }

// export interface NextBus {
//     countDown: number;
//     type: BusType;
//     estimatedArrival: string;
//     feature: string;
//     load: LoadType;
// }


export interface RouteProps {
    key: string;
    title: string;
}


// Define your initial state for the tab index and routes
const initialLayout = {width: Dimensions.get('window').width};
const NearbyScreen = () => {
    const stopsWithBusInfos = MockBusStops
    return (
        <CustomerTabView busStops={stopsWithBusInfos}/>
    );
}

export default NearbyScreen;

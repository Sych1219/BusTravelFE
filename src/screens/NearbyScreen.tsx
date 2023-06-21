import {Animated, Dimensions, StyleSheet} from "react-native";
import React from "react";
import CustomerTabView from "@components/CustomerTabView";
import MockBusStops from "../model/MockBusStops";


// Define the type for your tab routes
type Route = { key: string; title: string };

export interface BusStopWithBusesInfoProps {
    busStopRoadName: string;
    busStopCode: string;
    distanceToBusStop: number;
    services: Service[];
}

export interface Service {
    ServiceNo: string;
    Operator: string;
    NextBus: NextBus;
    NextBus2: NextBus;
    NextBus3: NextBus;
}

export interface NextBus {
    countDown: number;
    Type: string;
    EstimatedArrival: string;
    Feature: string;
}


export interface RouteProps {
    key: string;
    title: string;
}


// Define your initial state for the tab index and routes
const initialLayout = {width: Dimensions.get('window').width};
const NearbyScreen = () => {
    const busStops = MockBusStops
    return (
        <CustomerTabView busStops={busStops}/>
    );
}

export default NearbyScreen;

import {Animated, Dimensions, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import CustomerTabView from "@components/CustomerTabView";
import MockBusStops from "../models/MockBusStops";
import {BusType, LoadType, Service} from "@components/BusItem";
import  {fetchBusArrivingInfoData} from "@utils/AxiosClient";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios/index";
import mockBusStops from "../models/MockBusStops";
// import {fetchBusArrivingInfoData, fetchMockData} from "@utils/AxiosClient";


// Define the type for your tab routes
type Route = { key: string; title: string };

export interface BusStopWithBusesInfoProps {
    busStopRoadName: string;
    busStopCode: string;
    distanceToBusStop: number;
    services: Service[];
}


export interface RouteProps {
    key: string;
    title: string;
}
interface BusArrivingRequestParams {
    longitude: number;
    latitude: number;
    stopCount: number;
}

const baseUrl = 'http://localhost:8080/busStop';
const busArrivingInfoUrl = `${baseUrl}/getBusArrivingInfo`;

// Define your initial state for the tab index and routes
const initialLayout = {width: Dimensions.get('window').width};
const NearbyScreen = () => {
    // const stopsWithBusInfos = MockBusStops
    //
    // const [busData, setBusData] = useState<BusStopWithBusesInfoProps[]>([]);
    // useEffect(() => {
    //     try {
    //         axios.get('http://localhost:8080/busStop/getBusArrivingInfo', {
    //             params:  {
    //                 longitude: 103.9004605,
    //                 latitude: 1.4037280,
    //                 stopCount: 1,
    //             },
    //         }).then((response) => {
    //             setBusData(response.data);
    //             console.log("ttttt",response.data[0]);
    //         });
    //     } catch (error) {
    //        console.log("error11",error);
    //     }
    // }, []);
    // console.log("stopsWithBusInfos", busData)

    return (
        <CustomerTabView />
    );
}

export default NearbyScreen;

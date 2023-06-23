import React, {useEffect, useState} from "react";
import {SafeAreaView} from "react-native";
import BusItem, {Service, BusType, LoadType} from "../components/BusItem";
import axios, {AxiosRequestConfig} from "axios";
import {BusStopWithBusesInfoProps} from "./NearbyScreen";
const baseUrl = 'http://localhost:8080/busStop';
const busArrivingInfoUrl = `${baseUrl}/getBusArrivingInfo`;
interface BusArrivingRequestParams {
    longitude: number;
    latitude: number;
    stopCount: number;
}
const FavouriteScreen = () => {
    //based on BusItemProps to mock several data each inside is BusItemProps
    let data: Service[] = [
        {
            serviceNo: '117',
            operator: 'Operator 1',
            nextBus: {
                countDown: 5,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:30:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '1',
                load: LoadType.SEA,
                feature: 'WAB',
                type: BusType.SD,
            },
            nextBus2: {
                countDown: 10,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:35:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '2',
                load: LoadType.LSD,
                feature: 'Feature 2',
                type: BusType.DD,
            },
            nextBus3: {
                countDown: 15,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:40:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '3',
                load: LoadType.SDA,
                feature: 'Feature 3',
                type: BusType.BD,
            },
        },
        {
            serviceNo: '118',
            operator: 'Operator 1',
            nextBus: {
                countDown: 5,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:30:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '1',
                load: LoadType.SEA,
                feature: 'Feature 1',
                type: BusType.SD,
            },
            nextBus2: {
                countDown: 10,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:35:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '2',
                load: LoadType.LSD,
                feature: 'Feature 2',
                type: BusType.DD,
            },
            nextBus3: {
                countDown: 15,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:40:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '3',
                load: LoadType.SDA,
                feature: 'Feature 3',
                type: BusType.BD,
            },
        },
        {
            serviceNo: '34',
            operator: 'Operator 1',
            nextBus: {
                countDown: 5,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:30:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '1',
                load: LoadType.SEA,
                feature: 'Feature 1',
                type: BusType.SD,
            },
            nextBus2: {
                countDown: 10,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:35:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '2',
                load: LoadType.LSD,
                feature: 'Feature 2',
                type: BusType.DD,
            },
            nextBus3: {
                countDown: 15,
                originCode: 'OC1',
                destinationCode: 'DC1',
                estimatedArrival: '2023-06-11T09:40:00',
                latitude: '123.456',
                longitude: '789.012',
                visitNumber: '3',
                load: LoadType.SDA,
                feature: 'Feature 3',
                type: BusType.BD,
            },
        },
    ]
    // const [busData, setBusData] = useState<BusStopWithBusesInfoProps[]>([]);
    // useEffect(() => {
    //     const params: BusArrivingRequestParams = {
    //         longitude: 103.9004605,
    //         latitude: 1.4037280,
    //         stopCount: 1,
    //     }
    //     const config: AxiosRequestConfig = {
    //         params: params,
    //     };
    //     try {
    //         axios.get(busArrivingInfoUrl, config).then((response) => {
    //             // setBusData(response.data.json());
    //             // console.log("ttttt",response.data[0].services);
    //         });
    //     } catch (error) {
    //         throw new Error('Failed to fetch data');
    //     }
    // }, []);
    // // console.log("stopsWithBusInfos", busData)

    return (
        <SafeAreaView>
            {data.map((item, index) =>
                (<BusItem key={index}
                          serviceNo={item.serviceNo}
                          operator={item.operator}
                          nextBus={item.nextBus}
                          nextBus2={item.nextBus2}
                          nextBus3={item.nextBus3}
                />)
            )
            }


        </SafeAreaView>
    );


}

export default FavouriteScreen;

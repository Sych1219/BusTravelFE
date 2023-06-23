import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MockBusStops from "../models/MockBusStops";
import React, {useEffect, useState} from "react";
import BusItem from "@components/BusItem";
import {Route, SceneMap, TabBar, TabView} from "react-native-tab-view";
import {BusStopWithBusesInfoProps, RouteProps} from "../screens/NearbyScreen";
import axios from "axios";

type BusStopsProp = { busStops: BusStopWithBusesInfoProps[] };
// Define your initial state for the tab index and routes
const initialLayout = {width: Dimensions.get('window').width};
const CustomerTabView = () => {
    const [busStops, setBusStops] = useState<BusStopWithBusesInfoProps[]>([]);

    const routesInitial: RouteProps[] = busStops.map((busStop, index) => ({
        key: index.toString(),
        title: busStop.busStopRoadName
    }));

    console.log("routesInitial", routesInitial)
    const [routes, setRoutes] = useState<Route[]>([]);
    const [sceneMapProps, setSceneMapProps] = useState<{ [key: string]: React.ComponentType }>({});

    // const busStops = MockBusStops
    useEffect(() => {
        try {
            axios.get('http://localhost:8080/busStop/getBusArrivingInfo', {
                params: {
                    longitude: 103.9004605,
                    latitude: 1.4037280,
                    stopCount: 6,
                },
            }).then((response) => {
                //passing the response.data to the busStop obj
                const busStopsTemp = JSON.parse(JSON.stringify(response.data)) as BusStopWithBusesInfoProps[];
                setBusStops(busStopsTemp);

                const routesInitial: RouteProps[] = busStopsTemp.map((busStop, index) => ({
                    key: index.toString(),
                    title: busStop.busStopRoadName
                }));
                setRoutes(routesInitial);
                const tempSceneMapProps: { [key: string]: React.ComponentType } = {};
                busStopsTemp.forEach((busStop, index) => {
                    tempSceneMapProps[index.toString()] = (() => (<View>
                            {busStop.services.map((service, serviceIndex) => (
                                (<BusItem
                                    key={serviceIndex}
                                    serviceNo={service.serviceNo}
                                    operator={service.operator}
                                    nextBus={service.nextBus}
                                    nextBus2={service.nextBus2}
                                    nextBus3={service.nextBus3}
                                />)
                            ))}
                        </View>)

                    );
                });
                setSceneMapProps(tempSceneMapProps);
            });
        } catch (error) {
            console.log("error11", error);
        }
    }, []);

    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     busStops.forEach((busStop, index) => {
    //         const tempSceneMapProps: { [key: string]: React.ComponentType } = {};
    //         tempSceneMapProps[index.toString()] = (() => (<View>
    //                 {busStop.services.map((service, serviceIndex) => (
    //                     (<BusItem
    //                         key={serviceIndex}
    //                         serviceNo={service.serviceNo}
    //                         operator={service.operator}
    //                         nextBus={service.nextBus}
    //                         nextBus2={service.nextBus2}
    //                         nextBus3={service.nextBus3}
    //                     />)
    //                 ))}
    //             </View>)
    //
    //         );
    //
    //         setSceneMapProps(tempSceneMapProps);
    //     });
    // }, [busStops]);


    const insets = useSafeAreaInsets();
    const renderTabBar = (props: any) => (
        <TabBar {...props} activeColor={'black'} inactiveColor={'gray'} indicatorStyle={{backgroundColor: 'black'}}
                scrollEnabled={true}
            // labelStyle={{ flex: 1 }}
                renderLabel={({route, focused, color}) => (
                    <Text className={'font-extrabold text-lg'} numberOfLines={1} style={{color, width: '100%'}}>
                        {route.title}
                    </Text>
                )}
                style={[styles.tabBar, {paddingTop: insets.top}]}
        />
    );

    const handleIndexChange = (index: number) => {
        setIndex(index);
    };

    return (
        routes?.length > 0 && sceneMapProps && Object.keys(sceneMapProps).length > 0 &&
        <TabView
            navigationState={{index, routes}}
            renderScene={SceneMap(sceneMapProps)}
            onIndexChange={handleIndexChange}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />


    );
}
const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
    },
});
export default CustomerTabView;

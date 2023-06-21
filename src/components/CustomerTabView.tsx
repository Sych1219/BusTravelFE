import {Dimensions, StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MockBusStops from "../models/MockBusStops";
import React, {useState} from "react";
import BusItem from "@components/BusItem";
import {Route, SceneMap, TabBar, TabView} from "react-native-tab-view";
import {BusStopWithBusesInfoProps, RouteProps} from "../screens/NearbyScreen";

type BusStopsProp = { busStops: BusStopWithBusesInfoProps[] };
// Define your initial state for the tab index and routes
const initialLayout = {width: Dimensions.get('window').width};
const CustomerTabView = ({busStops}: BusStopsProp) => {
    const [index, setIndex] = useState(0);

    const routesInitial: RouteProps[] = busStops.map((busStop, index) => ({
        key: index.toString(),
        title: busStop.busStopRoadName
    }));

    const [routes] = useState<Route[]>(routesInitial);
    const SceneMapProps: { [key: string]: React.ComponentType } = {};
    busStops.forEach((busStop, index) => {
        SceneMapProps[index.toString()] = (() => (<View>
                {busStop.services.map((service, serviceIndex) => (
                    <BusItem
                        key={serviceIndex}
                        serviceNo={service.serviceNo}
                        operator={service.operator}
                        nextBus={service.nextBus}
                        nextBus2={service.nextBus2}
                        nextBus3={service.nextBus3}
                    />
                ))}
            </View>)

        );
    });

    const renderScene = SceneMap(SceneMapProps);

    const insets = useSafeAreaInsets();
    console.log("insets", insets)
    // style={[ {paddingTop: insets.top}]}
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

        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
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

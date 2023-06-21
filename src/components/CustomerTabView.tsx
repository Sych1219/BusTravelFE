import {Dimensions, StyleSheet, View} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MockBusStops from "../model/MockBusStops";
import React, {useState} from "react";
import BusItem from "@components/BusItem";
import {Route, SceneMap, TabBar, TabView} from "react-native-tab-view";
import {RouteProps} from "../screens/NearbyScreen";


// Define your initial state for the tab index and routes
const initialLayout = {width: Dimensions.get('window').width};
const CustomerTabView = () => {
    const busStops = MockBusStops
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
                        busCode={service.ServiceNo}
                        busType={service.NextBus.Type}
                        isWheelChairAccessible={true}
                        load={service.NextBus.countDown}
                        nextBus={service.NextBus.countDown}
                        nextBus2={service.NextBus2.countDown}
                        nextBus3={service.NextBus3.countDown}
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

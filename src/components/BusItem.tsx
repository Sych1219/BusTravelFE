import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import wheelChairImage from '@assets/wheelchair.jpg';
import Divider from "./Divider";


export interface BusItemProps {
    busCode: string;
    busType: string;
    isWheelChairAccessible: boolean;
    load: number;
    nextBus: number;
    nextBus2: number;
    nextBus3: number;
}

const BusItem = ({
                     busCode,
                     busType,
                     isWheelChairAccessible,
                     load,
                     nextBus,
                     nextBus2,
                     nextBus3
                 }: BusItemProps) => {
    return (
        <View className={'mt-1'}>
            <View className={'flex-row justify-between'}>
                <View className={'justify-center mx-2'}>
                    <Text className={'font-extrabold text-2xl'}>{busCode}</Text>
                </View>

                <View className={'flex-row space-x-2'}>
                    <View className="relative">
                        <Text>{busType}</Text>
                        {isWheelChairAccessible &&
                            <Image className="w-5 h-5 absolute bottom-0 right-0" source={wheelChairImage}/>}
                    </View>
                    <TouchableOpacity>
                        <View className="w-20 h-10 bg-black flex items-center justify-center rounded mx-1">
                            <View className="flex-row absolute bottom-0 right-0 ">
                                <Text className="text-xs text-white">{nextBus2}, </Text>
                                <Text className="text-xs text-white">{nextBus3}</Text>
                            </View>
                            <Text className="text-center text-white text-2xl font-extrabold">{nextBus}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            <Divider color={'gray'} height={1}/>
        </View>

    )
}

export default BusItem;

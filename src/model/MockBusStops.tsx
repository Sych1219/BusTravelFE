import {BusStopWithBusesInfoProps} from "../screens/NearbyScreen";

const busStops: BusStopWithBusesInfoProps[] = [
    {
        busStopRoadName: 'Blk 272C',
        busStopCode: '12345',
        distanceToBusStop: 0.5,
        services: [
            {
                ServiceNo: '117',
                Operator: 'Operator 1',
                NextBus: {
                    countDown: 5,
                    Type: 'Double deck',
                    EstimatedArrival: '2023-06-10T10:00:00',
                    Feature: 'Feature 1'
                },
                NextBus2: {
                    countDown: 10,
                    Type: 'Type 2',
                    EstimatedArrival: '2023-06-10T10:05:00',
                    Feature: 'Feature 2'
                },
                NextBus3: {
                    countDown: 15,
                    Type: 'Type 3',
                    EstimatedArrival: '2023-06-10T10:10:00',
                    Feature: 'Feature 3'
                }
            }
        ]
    },
    {
        busStopRoadName: 'Punggol Temp Int',
        busStopCode: '54321',
        distanceToBusStop: 1.2,
        services: [
            {
                ServiceNo: '34',
                Operator: 'Operator 2',
                NextBus: {
                    countDown: 3,
                    Type: 'Type 4',
                    EstimatedArrival: '2023-06-10T10:15:00',
                    Feature: 'Feature 4'
                },
                NextBus2: {
                    countDown: 8,
                    Type: 'Type 5',
                    EstimatedArrival: '2023-06-10T10:20:00',
                    Feature: 'Feature 5'
                },
                NextBus3: {
                    countDown: 13,
                    Type: 'Type 6',
                    EstimatedArrival: '2023-06-10T10:25:00',
                    Feature: 'Feature 6'
                }
            },
            {
                ServiceNo: '55',
                Operator: 'Operator 3',
                NextBus: {
                    countDown: 7,
                    Type: 'Type 7',
                    EstimatedArrival: '2023-06-10T10:30:00',
                    Feature: 'Feature 7'
                },
                NextBus2: {
                    countDown: 12,
                    Type: 'Type 8',
                    EstimatedArrival: '2023-06-10T10:35:00',
                    Feature: 'Feature 8'
                },
                NextBus3: {
                    countDown: 17,
                    Type: 'Type 9',
                    EstimatedArrival: '2023-06-10T10:40:00',
                    Feature: 'Feature 9'
                }
            }
        ]
    },
    {
        busStopRoadName: 'Opp Blk 272C',
        busStopCode: '54321',
        distanceToBusStop: 1.2,
        services: [
            {
                ServiceNo: '34',
                Operator: 'Operator 2',
                NextBus: {
                    countDown: 3,
                    Type: 'Type 4',
                    EstimatedArrival: '2023-06-10T10:15:00',
                    Feature: 'Feature 4'
                },
                NextBus2: {
                    countDown: 8,
                    Type: 'Type 5',
                    EstimatedArrival: '2023-06-10T10:20:00',
                    Feature: 'Feature 5'
                },
                NextBus3: {
                    countDown: 13,
                    Type: 'Type 6',
                    EstimatedArrival: '2023-06-10T10:25:00',
                    Feature: 'Feature 6'
                }
            },
            {
                ServiceNo: '55',
                Operator: 'Operator 3',
                NextBus: {
                    countDown: 7,
                    Type: 'Type 7',
                    EstimatedArrival: '2023-06-10T10:30:00',
                    Feature: 'Feature 7'
                },
                NextBus2: {
                    countDown: 12,
                    Type: 'Type 8',
                    EstimatedArrival: '2023-06-10T10:35:00',
                    Feature: 'Feature 8'
                },
                NextBus3: {
                    countDown: 17,
                    Type: 'Type 9',
                    EstimatedArrival: '2023-06-10T10:40:00',
                    Feature: 'Feature 9'
                }
            }
        ]
    },
    {
        busStopRoadName: 'Opp Blk 273C',
        busStopCode: '54321',
        distanceToBusStop: 1.2,
        services: [
            {
                ServiceNo: '34',
                Operator: 'Operator 2',
                NextBus: {
                    countDown: 3,
                    Type: 'Type 4',
                    EstimatedArrival: '2023-06-10T10:15:00',
                    Feature: 'Feature 4'
                },
                NextBus2: {
                    countDown: 8,
                    Type: 'Type 5',
                    EstimatedArrival: '2023-06-10T10:20:00',
                    Feature: 'Feature 5'
                },
                NextBus3: {
                    countDown: 13,
                    Type: 'Type 6',
                    EstimatedArrival: '2023-06-10T10:25:00',
                    Feature: 'Feature 6'
                }
            },
            {
                ServiceNo: '55',
                Operator: 'Operator 3',
                NextBus: {
                    countDown: 7,
                    Type: 'Type 7',
                    EstimatedArrival: '2023-06-10T10:30:00',
                    Feature: 'Feature 7'
                },
                NextBus2: {
                    countDown: 12,
                    Type: 'Type 8',
                    EstimatedArrival: '2023-06-10T10:35:00',
                    Feature: 'Feature 8'
                },
                NextBus3: {
                    countDown: 17,
                    Type: 'Type 9',
                    EstimatedArrival: '2023-06-10T10:40:00',
                    Feature: 'Feature 9'
                }
            }
        ]
    }
];

export default busStops;

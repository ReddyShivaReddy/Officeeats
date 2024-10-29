import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
const starImgFilled = require('../assets/images/star_filled.png');
const starImgCorner = require('../assets/images/star.png');
const MyOrders = () => {
    type orders = {
        'Counter': string,
        'CounterID': number,
        'Category': string,
        'OrderId': string,
        'OTP': number,
        'OrderedAt': string,
        'Status': string,
        'Rating': number,
    }
    type orderTypes = orders[]
    const ordersData: orderTypes = [
        {
            'Counter': 'Tea point',
            'CounterID': 1,
            'Category': 'Coffee',
            'OrderId': 'AQS2222',
            'OTP': 19373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Pending',
            'Rating': 0
        },
        {
            'Counter': 'Lunch/Dinner',
            'CounterID': 3,
            'Category': 'Lunch',
            'OrderId': 'AQS2818',
            'OTP': 39373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
            'Rating': 4
        },
        {
            'Counter': 'Juice point',
            'CounterID': 2,
            'Category': 'Grape Juice',
            'OrderId': 'AQS2037',
            'OTP': 29373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Canceled',
            'Rating': 0
        },
        {
            'Counter': 'Snacks',
            'CounterID': 4,
            'Category': 'Sandwich',
            'OrderId': 'AQS2838',
            'OTP': 19333,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
            'Rating': 1
        },
        {
            'Counter': 'Snacks',
            'CounterID': 4,
            'Category': 'Sandwich',
            'OrderId': 'AQS2839',
            'OTP': 19333,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
            'Rating': 5
        },
    ]

    const [orders, setOrders] = useState(ordersData);

    const CustomRatingBar = ({ orderId, currentRating }: any) => {
        const handleRatingPress = (rating: number) => {
            setOrders(prevOrders =>
                prevOrders.map(order =>
                    order.OrderId === orderId ? { ...order, rating } : order
                )
            );
        };

        return (
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <TouchableOpacity
                        key={item}
                        activeOpacity={0.7}
                        onPress={() => handleRatingPress(item)}>
                        <Image
                            style={{ width: 25, height: 25, resizeMode: 'cover' }}
                            source={
                                item <= currentRating
                                    ? starImgFilled
                                    : starImgCorner
                            }
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const RenderItem = ({ item }: any) => (
        <View style={{ flexDirection: 'column', marginVertical: 10, marginHorizontal: 10, borderWidth: 0.1, elevation: 1, borderColor: '#ccc' }}>
            <View style={styles.Card}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'semibold' }}>{item.Counter}</Text>
                    <Text style={{ fontSize: 15 }}>{item.Category} x 1</Text>
                    <Text>Order ID: <Text style={{ fontWeight: 'bold' }}>{item.OrderId}</Text></Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>OTP: <Text style={{ fontSize: 20 }}>{item.OTP}</Text></Text>
                    <Text>{item.OrderedAt}</Text>

                    <Text style={{
                        color: item.Status === 'Canceled' ? 'red' :
                            item.Status === 'Delivered' ? 'green' :
                                item.Status === 'Pending' ? '#0000FF' : '#000000', fontSize: 19, fontWeight: 'semibold', marginTop: 5
                    }}>{item.Status}</Text>
                </View>

                <View>
                    <Image
                        source={
                            item.CounterID === 1
                                ? require('../assets/images/tea.jpg')
                                : item.CounterID === 2
                                    ? require('../assets/images/Juice.jpg')
                                    : item.CounterID === 3
                                        ? require('../assets/images/Lunch.jpg')
                                        : require('../assets/images/Maggie.jpg')
                        }
                        style={{ width: 120, height: 120, borderRadius: 10 }}
                    />
                </View>
            </View>

            {item.Status !== "Canceled" && item.Status !== "Pending" &&
                <View style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                    borderStyle: "dashed",
                    marginHorizontal: 10,
                }} />
            }

            {item.Status !== "Pending" && item.Status !== "Canceled" &&
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, marginVertical: 15 }}>
                    <View>
                        <Text style={{ fontSize: 15, marginBottom: 5 }}>Rate your order!</Text>
                        <CustomRatingBar orderId={item.OrderId} currentRating={item.rating} />
                    </View>
                    <View style={{alignSelf:'center'}}>
                        <Text style={{textAlign:'center',color:'#3468C0',fontSize:15
                        }}>Submit</Text>
                    </View>
                </View>
            }
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 30, fontWeight: "medium", marginHorizontal: 10 }}>My Orders</Text>
            <View style={{ marginTop: 10 }}>
                <FlatList
                    data={orders}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={RenderItem}
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
                <View style={{ marginTop: 100 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        borderWidth: 0,
        borderRadius: 8,
        padding: 15,
    },
});

export default MyOrders;
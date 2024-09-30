import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const MyOrders = () => {
    type orders = {
        'Counter': string,
        'CounterID': number,
        'Category': string,
        'OrderId': string,
        'OTP': number,
        'OrderedAt': string,
        'Status': string,
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
        },
        {
            'Counter': 'Lunch/Dinner',
            'CounterID': 3,
            'Category': 'Lunch',
            'OrderId': 'AQS2818',
            'OTP': 39373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
        },
        {
            'Counter': 'Juice point',
            'CounterID': 2,
            'Category': 'Grape Juice',
            'OrderId': 'AQS2038',
            'OTP': 29373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Not Picked',
        },
        {
            'Counter': 'Snacks',
            'CounterID': 4,
            'Category': 'Sandwich',
            'OrderId': 'AQS2838',
            'OTP': 19333,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
        },
        {
            'Counter': 'Snacks',
            'CounterID': 4,
            'Category': 'Sandwich',
            'OrderId': 'AQS2838',
            'OTP': 19333,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
        },
    ]

    type RenderItemProps = {
        item: orders;
    };

    const RenderItem = ({ item }: RenderItemProps) => (
        <View style={{ flexDirection: 'column', marginVertical: 10, marginHorizontal: 10, borderWidth: 0.1, elevation: 1, borderColor: 'white', }}>
            <View style={styles.Card}>

                <View style={{}}>
                    <Text style={{ fontSize: 18, fontWeight: 'semibold' }}>{item.Counter}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'light' }}>{item.Category} x 1</Text>
                    <Text>Order ID: <Text style={{ fontWeight: 'bold', }}>{item.OrderId}</Text></Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>OTP: <Text style={{ fontSize: 20 }}>{item.OTP}</Text></Text>
                    <Text>{item.OrderedAt}</Text>

                    <Text style={{
                        color: item.Status === 'Not Picked' ? 'red' :
                            item.Status === 'Delivered' ? 'green' :
                                item.Status === 'Pending' ? 'blue' : 'black', fontSize: 19, fontWeight: 'semibold', marginTop: 5
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
                        style={{ width: 120, height: 120, borderRadius: 10, }}
                    />
                </View>

            </View>
            {item.Status != 'Not Picked' &&
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        borderStyle: 'dashed',
                        marginHorizontal: 10
                    }} />
            }
            {/* {item.Status === 'Not Picked' &&
                <View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            borderStyle: 'dashed',
                            marginHorizontal: 10
                        }} />
                        <View style={{justifyContent:'center',alignSelf:'center'}}>
                    <Text>Order is not picked</Text>
                    </View>
                </View>
            } */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginVertical: 15 }}>
                <View>
                    {item.Status != 'Not Picked' &&
                        <Pressable style={{ padding: 8, borderRadius: 8, borderColor: '#1E2A5E', borderWidth: 1, }}>
                            <Text style={{ fontSize: 15, color: '#1E2A5E' }}>Rate order</Text>
                        </Pressable>
                    }


                </View>
                <View>
                    {item.Status === 'Pending' &&
                        <Pressable style={{ padding: 7, borderRadius: 8, borderWidth: 1, borderColor: 'red' }}>
                            <Text style={{ color: 'red', fontSize: 15 }}>Cancel Order</Text>
                        </Pressable>
                    }

                </View>

            </View>
        </View>

    )
    return (
        <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 30, fontWeight: 'medium', marginHorizontal: 10 }}>My Orders</Text>
            <View style={{ marginTop: 10, }}>
                <FlatList
                    data={ordersData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={RenderItem}
                />
                <View style={{ marginTop: 100 }} />
            </View>

        </View>
    )
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
})

export default MyOrders
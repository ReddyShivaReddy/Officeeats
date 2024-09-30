import { View, Text, StatusBar, Pressable, FlatList, Modal, ScrollView, TextInput } from 'react-native'
import React, { useState, } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Orders = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>({});
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
            'Counter': 'Tea Point',
            'CounterID': 1,
            'Category': 'Green Tea',
            'OrderId': 'AQS2818',
            'OTP': 39373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
        },
        {
            'Counter': 'Tea point',
            'CounterID': 1,
            'Category': 'Coffee',
            'OrderId': 'AQS2038',
            'OTP': 29373,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Not Picked',
        },
        {
            'Counter': 'Tea point',
            'CounterID': 1,
            'Category': 'Tea',
            'OrderId': 'AQS2838',
            'OTP': 19333,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Delivered',
        },
        {
            'Counter': 'Tea Point',
            'CounterID': 1,
            'Category': 'Boost',
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
        <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 5, justifyContent: 'space-between',borderWidth:0.9,borderRadius:8,borderColor:'grey',padding:15, }}>
                <View>
                    <Text style={{ fontSize: 20 }}>OTP : <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.OTP}</Text></Text>
                    <Text style={{ fontSize: 17 }}>{item.Category} x 1</Text>
                    <Text style={{
                        color: item.Status === 'Not Picked' ? 'red' :
                            item.Status === 'Delivered' ? 'green' :
                                item.Status === 'Pending' ? 'blue' : 'black', fontSize: 19,
                    }}>{item.Status}</Text>
                </View>

                <View style={{ alignSelf: 'center', borderWidth:0.9, padding: 7, borderRadius: 8, }}>
                    <Pressable onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }}>
                        <Text style={{ fontSize: 17 }}> View </Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
    return (
        <View>
            <StatusBar />
            <View style={{ gap: 15 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 15 }}>
                        Search Orders
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, borderWidth: 0.9, marginHorizontal: 15, padding: 7, borderRadius: 8 }}>
                    <Ionicons name="search" size={24} color="black" />
                    <TextInput placeholder='Search...' style={{ height: 30, fontSize: 20 }} />
                </View>
                <View>
                    <FlatList
                        data={ordersData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderItem}
                    />
                </View>
                <Modal
                    // contentContainerStyle={styles.modalContent}
                    visible={modalVisible}
                    animationType='fade'
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ScrollView style={{ marginHorizontal: 15, }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>
                            Order Details
                        </Text>
                        {selectedItem &&
                            <View style={{ gap: 10 }}>
                                <View>

                                    <Text style={{ fontSize: 17, fontWeight: 'semibold' }}>{selectedItem.Counter}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}><Text>{selectedItem.Category}</Text> x 1</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>Order ID: <Text style={{ fontWeight: 'bold' }}>{selectedItem.OrderId}</Text></Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>OTP :
                                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{selectedItem.OTP}</Text></Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.OrderedAt}</Text>
                                </View>
                                <View style={{ borderWidth: 0.7, borderRadius: 8, padding: 7 ,width:100,backgroundColor:'#88D66C'}}>
                                    <Pressable style={{}} onPress={() => {
                                        setModalVisible(false);
                                    }}>
                                        <Text style={{ fontSize: 15,alignSelf:'center' }}>Delivered</Text>
                                    </Pressable>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>
                                        <Text style={{ color: 'red' }}>*</Text> Click delivered button to mark as delivered
                                    </Text>
                                </View>
                            </View>
                        }
                    </ScrollView>
                </Modal>
            </View>
        </View>
    )
}

export default Orders
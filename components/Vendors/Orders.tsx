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
            'Status': 'Canceled',
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
            'Status': 'Pending',
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
            'OTP': 19370,
            'OrderedAt': '10th Sep24 - 7:30PM',
            'Status': 'Pending',
        },
        {
            'Counter': 'Tea point',
            'CounterID': 1,
            'Category': 'Tea',
            'OrderId': 'AQS2838',
            'OTP': 19338,
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
            <View style={{ flexDirection: 'row',shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:5, marginHorizontal: 20, marginVertical: 5, justifyContent: 'space-between', borderWidth: 0, borderRadius: 8, borderColor: 'grey', padding: 15,elevation:5,backgroundColor:'white', }}>
                <View>
                    <Text style={{ fontSize: 20 }}>OTP : <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.OTP}</Text></Text>
                    <Text style={{ fontSize: 17 }}>{item.Category} x 1</Text>
                    <Text style={{
                        color: item.Status === 'Canceled' ? 'red' :
                            item.Status === 'Delivered' ? 'green' :
                                item.Status === 'Pending' ? 'blue' : 'black', fontSize: 19,
                    }}>{item.Status}</Text>
                </View>

                <View style={{ alignSelf: 'center', borderWidth: 0.9, padding: 7, borderRadius: 8, }}>
                    <Pressable onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }}>
                        <Text style={{ fontSize: 15 }}>View</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar />
            <View style={{ gap: 15 }}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginHorizontal: 15 }}>
                        Search Orders
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, borderWidth: 0.9, marginHorizontal: 15, padding: 7, borderRadius: 8 }}>
                    <Ionicons name="search" size={24} color="black" />
                    <TextInput placeholder='Search...' style={{ height: 30, fontSize: 20 }} />
                </View>
                <View style={{paddingBottom:100}}>
                    <FlatList
                        data={ordersData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderItem}
                        contentContainerStyle={{paddingBottom:200}}
                        
                    />
                </View>
                <Modal
                    // contentContainerStyle={styles.modalContent}
                    visible={modalVisible}
                    animationType='fade'
                    onRequestClose={() => setModalVisible(false)}
                    transparent

                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center' }}>
                        {selectedItem &&
                            <View style={{ marginHorizontal: 15, gap: 15, backgroundColor: '#fff', justifyContent: "center", alignSelf: "center", width: "90%", padding: 15, borderRadius: 10, elevation: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>
                                    Order Details
                                </Text>
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
                                <View style={{}}>
                                    {selectedItem.Status != 'Delivered' && selectedItem.Status != 'Canceled' &&
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                            <Pressable style={{ backgroundColor: '#88D66C', borderWidth: 0.7, borderRadius: 8, padding: 7, width: 100 }} onPress={() => {
                                                setModalVisible(false);
                                            }}>
                                                <Text style={{ fontSize: 15, alignSelf: 'center' }}>Delivered</Text>
                                            </Pressable>
                                            <Pressable style={{ backgroundColor: 'black', borderWidth: 0.7, borderRadius: 8, padding: 7, width: 100 }} onPress={() => {
                                                setModalVisible(false);
                                            }}>
                                                <Text style={{ fontSize: 15, alignSelf: 'center', color: 'white' }}>Back</Text>
                                            </Pressable>

                                        </View>
                                    }
                                    {selectedItem.Status == 'Delivered' &&
                                        <View>
                                            <Text style={{ fontSize: 17, color: 'red', marginBottom: 5 }}>Item delivered</Text>
                                            <Pressable style={{ backgroundColor: 'black', borderWidth: 0.7, borderRadius: 8, padding: 7, width: 100 }} onPress={() => {
                                                setModalVisible(false);
                                            }}>
                                                <Text style={{ fontSize: 15, alignSelf: 'center', color: 'white' }}>Back</Text>
                                            </Pressable>

                                        </View>
                                    }
                                    {selectedItem.Status == 'Canceled' &&
                                        <View>
                                            <Text style={{ fontSize: 17, color: 'red', marginBottom: 5 }}>Item Canceled</Text>
                                            <Pressable style={{ backgroundColor: 'black', borderWidth: 0.7, borderRadius: 8, padding: 7, width: 100 }} onPress={() => {
                                                setModalVisible(false);
                                            }}>
                                                <Text style={{ fontSize: 15, alignSelf: 'center', color: 'white' }}>Back</Text>
                                            </Pressable>
                                        </View>
                                    }
                                </View>
                                <View>
                                    {selectedItem.Status == 'Pending' &&
                                        <Text style={{ fontSize: 15 }}>
                                            <Text style={{ color: 'red' }}>*</Text> Click delivered button to mark as delivered
                                        </Text>
                                    }
                                </View>
                            </View>
                        }
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Orders
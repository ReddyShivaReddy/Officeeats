import { View, Text, StatusBar, Pressable, FlatList, Modal, ScrollView,TextInput } from 'react-native'
import React, { useState, } from 'react'



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
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text>{item.OTP}</Text>
                    <Text>{item.Category}</Text>
                    <Text>{item.Status}</Text>
                </View>
                <View>
                    <Pressable onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }}>
                        <Text>
                            View
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
    return (
        <View>
            <StatusBar />
            <View>
                {/* <Text>Orders</Text> */}
                <View>
                    <Text>
                        List of Orders
                    </Text>
                </View>
                {/* <View>
                <TextInput value={search}
                        onChangeText={}
                        placeholder='Search...'
                    />
                </View> */}
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
                    <ScrollView>
                        <Text>
                            Order Details
                        </Text>
                        {selectedItem &&
                            <View>
                                <View>

                                    <Text>{selectedItem.Vendor_Counter}</Text>
                                </View>
                                <View>
                                    <Text><Text>{selectedItem.Category}</Text> x 1</Text>
                                </View>
                                <View>
                                    <Text>Order ID<Text>{selectedItem.OrderId}</Text></Text>
                                </View>
                                <View>
                                    <Text>OTP :
                                        <Text>{selectedItem.OTP}</Text></Text>
                                </View>
                                <View>
                                    <Text>{selectedItem.OrderedAt}</Text>
                                </View>
                                <View>
                                    <Pressable>
                                        <Text>Delivered</Text>
                                    </Pressable>
                                </View>
                                <View>
                                    <Text>
                                        * Click delivered button to mark as delivered
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
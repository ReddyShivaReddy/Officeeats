import { View, Text, StatusBar, Pressable, FlatList, Modal, ScrollView } from 'react-native'
import React, { useState, } from 'react'



const ManageVendors = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>({});
    type Vendors = {
        'Counter_ID': number
        'Vendor_Name': string
        'Vendor_Counter': string
        'Vendor_Email': string
        'Vendor_Contact': string
        'Categories': string
    }
    type VendorsTypes = Vendors[]
    const VedndorDetails: VendorsTypes = [{
        'Counter_ID': 1,
        'Vendor_Name': 'Shiva',
        'Vendor_Counter': 'Tea point',
        'Vendor_Email': 'Shiva@gmail.com',
        'Vendor_Contact': '9876543210',
        'Categories': 'Tea, coffee, Boost, Horlicks, Green Tea'
    },
    {
        'Counter_ID': 2,
        'Vendor_Name': 'Reddy',
        'Vendor_Counter': 'Juice point',
        'Vendor_Email': 'reddy@gmail.com',
        'Vendor_Contact': '9876543210',
        'Categories': 'Orange, ButterMilk, Grapes, Pine Apple'
    },
    {
        'Counter_ID': 3,
        'Vendor_Name': 'Shiva Reddy',
        'Vendor_Counter': 'Lunch/Dinner',
        'Vendor_Email': 'ShivaReddy@gmail.com',
        'Vendor_Contact': '9876543210',
        'Categories': 'Veg Thali, Non-Veg Thali'
    },
    {
        'Counter_ID': 4,
        'Vendor_Name': 'SR',
        'Vendor_Counter': 'Snacks point',
        'Vendor_Email': 'Shiva@gmail.com',
        'Vendor_Contact': '9876543210',
        'Categories': 'Dosa, Maggie, Sandwich'
    },
    ]

    type RenderItemProps = {
        item: Vendors;
    };

    const RenderItem = ({ item }: RenderItemProps) => (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text>{item.Vendor_Counter}</Text>
                    <Text>{item.Vendor_Name}</Text>
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
                <Text>ManageVendors</Text>
                <View>
                    <Text>
                        List of Vendors
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={VedndorDetails}
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
                            Vendor Details
                        </Text>
                        {selectedItem &&
                            <View>
                                <View>
                                    <Text>Vendor Counter ID</Text>
                                    <Text>{selectedItem.Counter_ID}</Text>
                                </View>
                                <View>
                                    <Text>Vendor Name</Text>
                                    <Text>{selectedItem.Vendor_Name}</Text>
                                </View>
                                <View>
                                    <Text>Vendor Counter Name</Text>
                                    <Text>{selectedItem.Vendor_Counter}</Text>
                                </View>
                                <View>
                                    <Text>Vendor Email</Text>
                                    <Text>{selectedItem.Vendor_Email}</Text>
                                </View>
                                <View>
                                    <Text>Vendor Contact</Text>
                                    <Text>{selectedItem.Vendor_Contact}</Text>
                                </View>
                                <View>
                                    <Text>Categories</Text>
                                    <Text>{selectedItem.Categories}</Text>
                                </View>
                            </View>
                        }
                    </ScrollView>
                </Modal>
            </View>
        </View>
    )
}

export default ManageVendors
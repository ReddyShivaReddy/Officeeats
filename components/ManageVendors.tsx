import { View, Text, StatusBar, Pressable, FlatList, Modal, ScrollView } from 'react-native'
import React, { useState, } from 'react'



const ManageVendors = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>({});
    type Vendors = {
        'Counter_ID': number,
        'Vendor_Name': string,
        'Vendor_Counter': string,
        'Vendor_Email': string,
        'Vendor_Contact': string,
        'Categories': string,
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
        <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',borderWidth:0.7,borderRadius:2,padding:15,
             }}>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 5 }}>{item.Vendor_Counter}</Text>
                    <Text>{item.Vendor_Name}</Text>
                </View>
                <View style={{ alignSelf: 'center', borderWidth: 0.7, padding: 7, borderRadius: 8 }}>
                    <Pressable onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }}>
                        <Text>  View  </Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
    return (
        <View>
            <StatusBar />
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ManageVendors</Text>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>
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
                    <ScrollView style={{}}>
                        {/* <Text>
                            Vendor Details
                        </Text> */}
                        {selectedItem &&
                            <View style={{ marginHorizontal:15, gap: 20 }}>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Vendor Counter ID</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.Counter_ID}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Vendor Name</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.Vendor_Name}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Vendor Counter Name</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.Vendor_Counter}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Vendor Email</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.Vendor_Email}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Vendor Contact</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.Vendor_Contact}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Categories</Text>
                                    <Text style={{ fontSize: 17, fontWeight: 'medium' }}>{selectedItem.Categories}</Text>
                                </View>
                                {/* {selectedItem.Categories && Object.keys(selectedItem.Categories).map((key) => {
                                    console.log(key)
                                    return (
                                        <View>

                                        </View>
                                    );
                                })} */}
                            </View>
                        }
                    </ScrollView>
                </Modal>
            </View>
        </View>
    )
}

export default ManageVendors
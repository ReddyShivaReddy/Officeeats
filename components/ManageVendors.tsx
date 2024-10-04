import { View, Text, StatusBar, Pressable, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

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
    };

    type VendorsTypes = Vendors[];

    const VendorDetails: VendorsTypes = [
        {
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
    ];

    type RenderItemProps = {
        item: Vendors;
    };

    const RenderItem = ({ item }: RenderItemProps) => (
        <View style={{ marginVertical: 10 }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.7, borderRadius: 10, padding: 15,
            }}>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 5 }}>{item.Vendor_Name}</Text>
                    <Text>{item.Vendor_Counter}</Text>
                </View>
                <View style={{ alignSelf: 'center', borderWidth: 0.7, padding: 7, borderRadius: 8 }}>
                    <Pressable onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }}>
                        <Text>View</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <View style={{flex:1}}>
            <StatusBar />
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Manage Vendors</Text>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17 }}>List of Vendors</Text>
                </View>
                <FlatList
                    data={VendorDetails}
                    keyExtractor={(item) => item.Counter_ID.toString()} 
                    renderItem={RenderItem}
                />
                <Modal
                    visible={modalVisible}
                    animationType='fade'
                    onRequestClose={() => setModalVisible(false)}
                    transparent

                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center' }}>
                        {selectedItem && (
                            <View style={{ marginHorizontal: 15, gap: 15, backgroundColor: '#fff', justifyContent: "center", alignSelf: "center", width: "90%", padding: 15, borderRadius: 10, elevation: 10 }}>
                                {/* Vendor Details */}
                                <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Vendor Details</Text>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="information-circle-outline" size={24} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15,color:'grey'  }}>Vendor Counter ID</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Counter_ID}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="person-outline" size={20} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15 ,color:'grey' }}>Vendor Name</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Name}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="fast-food-outline" size={20} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15,color:'grey'  }}>Vendor Counter Name</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Counter}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="mail-outline" size={20} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15 ,color:'grey' }}>Vendor Email</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Email}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="call-outline" size={19} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15,color:'grey' }}>Vendor Contact</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Contact}</Text>
                                    </View>

                                </View>


                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View>
                                        <Ionicons name="reader-outline" size={24} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15,color:'grey'  }}>Categories</Text>
                                        {selectedItem.Categories ? (
                                            selectedItem.Categories.split(', ').map((category: string, index: number) => (

                                                <Text key={index} style={{ fontSize: 17 }}>{` - ${category}`}</Text> 
                                            ))
                                        ) : (
                                            <Text>No categories available</Text>
                                        )}
                                    </View>
                                </View>

                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <Pressable style={{borderColor:'red',backgroundColor:'#FF0000',padding:7,borderRadius:7}}>
                                        <Text style={{color:'white'}}>
                                            Deactivate
                                        </Text>
                                    </Pressable>
                                    <Pressable style={{borderColor:'#55679C',borderWidth:1,padding:7,backgroundColor:'#55679C',width:70,borderRadius:7}} onPress={() => setModalVisible(false)}>
                                        <Text style={{color:'white',textAlign:'center'}}>
                                            Edit
                                        </Text>

                                    </Pressable>
                                    <Pressable style={{borderColor:'black',borderWidth:1,padding:7,backgroundColor:'black',width:70,borderRadius:7}} onPress={() => setModalVisible(false)}>
                                        <Text style={{color:'white',textAlign:'center'}}>
                                            Back
                                        </Text>

                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default ManageVendors;
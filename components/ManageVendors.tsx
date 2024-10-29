import { View, Text, StatusBar, Pressable, FlatList, Modal, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const ManageVendors = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleForEdit, setModalVisibleForEdit] = useState(false);

    const [selectedItem, setSelectedItem] = useState<any>({});
    const [selectedItemForEdit, setSelectedItemForEdit] = useState<any>({});
    console.log(selectedItemForEdit)
    const handleEditChange = (field: string, value: string) => {

        setSelectedItemForEdit((prev: any) => ({ ...prev, [field]: value }));
    };

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
            'Vendor_Name': 'Shiva R',
            'Vendor_Counter': 'Tea point',
            'Vendor_Email': 'Shiva@gmail.com',
            'Vendor_Contact': '9876543210',
            'Categories': 'Tea, coffee, Boost, Horlicks, Green Tea'
        },
        {
            'Counter_ID': 2,
            'Vendor_Name': 'Reddy S',
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

    const RenderItem = ({ item }: RenderItemProps) => {
        var Initials = item.Vendor_Name
            .split(' ')
            .slice(0, 2)
            .map(word => word.charAt(0).toUpperCase())
            .join('');
        return (
            <View style={{ marginVertical: 10 }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0, borderRadius: 10, padding: 15, elevation: 3, backgroundColor: 'white'
                }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <View style={{ justifyContent: 'center', borderWidth: 1, width: 55, borderRadius: 25, height: 55, alignSelf: 'center', backgroundColor: '#31363F' }}>
                            <Text style={{ fontSize: 20, fontWeight: '300', marginBottom: 5, textAlign: 'center', color: 'white' }}>{Initials}</Text>
                        </View>
                        <View>
                            <Text><Text style={{ fontSize: 19, fontWeight: '600', marginBottom: 5, }}>{item.Vendor_Counter}</Text></Text>
                            <Text style={{ fontWeight: '500' }}>Vendor: {item.Vendor_Name}</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', borderWidth: 0, padding: 7, borderRadius: 8, backgroundColor: 'white' }}>
                        <Pressable onPress={() => {
                            setSelectedItem(item);
                            setModalVisible(true);
                        }}>
                            <Text style={{ fontSize: 15, color: '#3468C0', fontWeight: '400' }}>View</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17 }}>List of Counters</Text>
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
                            <View style={{
                                marginHorizontal: 15, gap: 15, backgroundColor: '#fff', justifyContent: "center", alignSelf: "center", width: "90%", padding: 15, borderRadius: 10, elevation: 10, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}>
                                {/* Vendor Details */}
                                <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Vendor Details</Text>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="information-circle-outline" size={24} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, color: 'grey' }}>Vendor Counter ID</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Counter_ID}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="person-outline" size={20} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, color: 'grey' }}>Vendor Name</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Name}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="fast-food-outline" size={20} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, color: 'grey' }}>Vendor Counter Name</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Counter}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="mail-outline" size={20} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, color: 'grey' }}>Vendor Email</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Email}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View style={{ justifyContent: 'center' }}>
                                        <Ionicons name="call-outline" size={19} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, color: 'grey' }}>Vendor Contact</Text>
                                        <Text style={{ fontSize: 17 }}>{selectedItem.Vendor_Contact}</Text>
                                    </View>

                                </View>


                                <View style={{ flexDirection: 'row', gap: 10 }}>
                                    <View>
                                        <Ionicons name="reader-outline" size={24} color="black" />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 15, color: 'grey' }}>Categories</Text>
                                        {selectedItem.Categories ? (
                                            selectedItem.Categories.split(', ').map((category: string, index: number) => (

                                                <Text key={index} style={{ fontSize: 17 }}>{` - ${category}`}</Text>
                                            ))
                                        ) : (
                                            <Text>No categories available</Text>
                                        )}
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Pressable style={{ borderColor: 'red', backgroundColor: '#FF0000', padding: 7, borderRadius: 7 }}>
                                        <Text style={{ color: 'white' }}>
                                            Deactivate
                                        </Text>
                                    </Pressable>
                                    <Pressable style={{ borderColor: '#55679C', borderWidth: 1, padding: 7, backgroundColor: '#55679C', width: 70, borderRadius: 7 }}
                                        onPress={() => {
                                            setModalVisibleForEdit(true)
                                            setSelectedItemForEdit(selectedItem)
                                        }
                                        }>
                                        <Text style={{ color: 'white', textAlign: 'center' }}>
                                            Edit
                                        </Text>

                                    </Pressable>
                                    <Pressable style={{ borderColor: 'black', borderWidth: 1, padding: 7, backgroundColor: 'black', width: 70, borderRadius: 7 }} onPress={() => setModalVisible(false)}>
                                        <Text style={{ color: 'white', textAlign: 'center' }}>
                                            Back
                                        </Text>

                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </View>

                    <Modal
                        visible={modalVisibleForEdit}
                        animationType='fade'
                        onRequestClose={() => setModalVisibleForEdit(false)}
                        style={{ backgroundColor: '#EEF5FF' }}
                    >
                        <ScrollView style={{ flex: 1, backgroundColor: '#EEF5FF' }}>
                            <View style={{ backgroundColor: 'white' }}>
                                <View style={{ flexDirection: 'row', gap: 15, marginBottom: 10, marginHorizontal: 13 }}>
                                    <Pressable style={{ justifyContent: 'center' }} onPress={() => {
                                        setModalVisibleForEdit(false)
                                    }}>
                                        <Ionicons name="arrow-back" size={25} color="black" />
                                    </Pressable>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Edit Vendor Details</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 25 }}>
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: '500' }}>
                                        Contact Info
                                    </Text>
                                </View>
                                <View style={{ gap: 1 }}>
                                    <Text style={{ fontSize: 15, color: 'grey', marginTop: 15 }}>Vendor Name</Text>
                                    <TextInput
                                        // placeholder="Vendor Name"
                                        value={selectedItemForEdit.Vendor_Name}
                                        onChangeText={(value) => handleEditChange('Vendor_Name', value)}
                                        style={{ borderBottomWidth: 0.9, borderColor: 'grey', fontSize: 15 }}
                                    />
                                    <Text style={{ fontSize: 15, color: 'grey', marginTop: 20 }}>Vendor Email</Text>
                                    <TextInput
                                        value={selectedItemForEdit.Vendor_Email}
                                        onChangeText={(value) => handleEditChange('Vendor_Email', value)}
                                        style={{ borderBottomWidth: 0.9, borderColor: 'grey', fontSize: 15 }}
                                    />
                                    <Text style={{ fontSize: 15, color: 'grey', marginTop: 20 }}>Vendor Contact Number (+91)</Text>
                                    <TextInput
                                        value={selectedItemForEdit.Vendor_Contact}
                                        onChangeText={(value) => handleEditChange('Vendor_Contact', value)}
                                        style={{ borderBottomWidth: 0.9, borderColor: 'grey', fontSize: 15, }}
                                    />
                                </View>
                            </View>

                            <View style={{ marginTop: 10, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 25 }}>
                                <View style={{ marginVertical: 10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: '500' }}>
                                        Counter Info
                                    </Text>
                                </View>
                                {/* <View>
                                <Text style={{ fontSize: 15, color: 'grey', marginTop: 20 }}>Counter ID</Text>
                                <TextInput
                                keyboardType="numeric"
                                value={selectedItemForEdit.Counter_ID}
                                onChangeText={(value) => handleEditChange('Counter_ID', value)}
                                style={{ borderBottomWidth: 0.9, borderColor: 'grey', fontSize: 15 }}
                                />
                            </View> */}
                                <View>
                                    <Text style={{ fontSize: 15, color: 'grey', marginTop: 20 }}>Counter Name</Text>
                                    <TextInput
                                        value={selectedItemForEdit.Vendor_Counter}
                                        onChangeText={(value) => handleEditChange('Vendor_Counter', value)}
                                        style={{ borderBottomWidth: 0.9, borderColor: 'grey', fontSize: 15 }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15, color: 'grey', marginTop: 20 }}>Categories (comma-separated)</Text>
                                    <TextInput
                                        multiline
                                        numberOfLines={3}
                                        value={selectedItemForEdit.Categories}
                                        onChangeText={(value) => handleEditChange('Categories', value)}
                                        style={{ borderBottomWidth: 0.9, borderColor: 'grey', fontSize: 15, textAlignVertical: 'center', }}
                                    />
                                    <Text style={{ marginTop: 7 }}><Text style={{ color: 'red' }}>* </Text>Please fill Categories with comma seperation</Text>

                                </View>
                            </View>
                            <View style={{ alignSelf: 'center', width: '90%', marginVertical: 30, borderRadius: 8, borderWidth: 1, backgroundColor: 'black' }}>
                                <Pressable style={{}}
                                    onPress={() => { setModalVisibleForEdit(false); }}>
                                    <Text style={{ color: 'white', padding: 10, textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Save Details</Text>
                                </Pressable>

                            </View>
                        </ScrollView>
                    </Modal>
                </Modal>
            </View>
        </View>
    );
};

export default ManageVendors;
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StatusBar, Image, FlatList, Modal, Button, TouchableOpacity, Pressable, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { JumpingTransition } from "react-native-reanimated";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import LottieView from 'lottie-react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
const starImgCorner = require('../assets/images/star.png');
type propType = {
    'CounterID': number,
    'CounterName': string,
    'Timings': string
}
type ItemProps = {
    CounterData: propType;
};

function FoodCounters() {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState<any>({})
    const [orderItem, setOrderItem] = useState<any>({})
    const [orderConfirmationPopup, setOrderConfirmationPopup] = useState<boolean>(false)
    const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false)
    const [orderDetails, setOrderDetails] = useState<any>({})
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredCategories, setFilteredCategories] = useState<any>([]);
    type counter = {
        'CounterID': number,
        'CounterName': string,
        'Timings': string
    }
    type countersTypes = counter[]
    const counters: countersTypes = [{
        CounterID: 1,
        CounterName: 'Tea Point',
        Timings: '9:00 AM - 5:00 PM'
    },
    {
        CounterID: 2,
        CounterName: 'Juice Point',
        Timings: '9:00 AM - 5:00 PM'
    },
    {
        CounterID: 3,
        CounterName: 'Lunch/Dinner',
        Timings: '9:00 AM - 5:00 PM'
    },
    {
        CounterID: 4,
        CounterName: 'Snacks',
        Timings: '9:00 AM - 5:00 PM'
    },
    ]
    type RenderItemProps = {
        item: counter;
    };

    type counterItemTypes = {
        'Counter_Name': string,
        'Counter_ID': number,
        'Category': string,
        'Available_Status_from_Vendor': boolean,
        'Available_Status_from_Admin': boolean,
        'type': string,
        'Rating': number
    }
    type counterItemsTypes = counterItemTypes[]
    const CounterItems: counterItemsTypes = [
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 5


        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Coffee',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4.6

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Boost',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4

        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Horlicks',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 3.9


        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Lemon Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4.3


        },
        {
            'Counter_Name': 'Tea Point',
            'Counter_ID': 1,
            'Category': 'Green Tea',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 5


        },

        {
            'Counter_Name': 'Juice Point',
            'Counter_ID': 2,
            'Category': 'Orange',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4.8

        },
        {
            'Counter_Name': 'Juice Point',
            'Counter_ID': 2,
            'Category': 'Grapes',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4.9

        },
        {
            'Counter_Name': 'Juice Point',
            'Counter_ID': 2,
            'Category': 'Butter Milk',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4.1

        },
        {
            'Counter_Name': 'Lunch/Dinner',
            'Counter_ID': 3,
            'Category': 'Veg Meal',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 5

        },
        {
            'Counter_Name': 'Lunch/Dinner',
            'Counter_ID': 3,
            'Category': 'Non-Veg Meal',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Non-Veg',
            'Rating': 4.7

        },
        {
            'Counter_Name': 'Snacks',
            'Counter_ID': 4,
            'Category': 'Dosa',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 3.8

        },
        {
            'Counter_Name': 'Snacks',
            'Counter_ID': 4,
            'Category': 'Sandwich',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 4.5

        },
        {
            'Counter_Name': 'Snacks',
            'Counter_ID': 4,
            'Category': 'Maggie',
            'Available_Status_from_Vendor': true,
            'Available_Status_from_Admin': true,
            'type': 'Veg',
            'Rating': 5

        },
    ]



    function shuffleArray(CounterItems: counterItemsTypes) {
        for (let i = CounterItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [CounterItems[i], CounterItems[j]] = [CounterItems[j], CounterItems[i]];
        }
        return CounterItems;
    }

    const shuffledItems = shuffleArray([...CounterItems]);

    const uniqueCategories = shuffledItems.slice(0, 7).map((item) => item.Category);

    var ordered: boolean = false
    const submitOrder = () => {
        ordered = true
        setOrderDetails({
            'orderTime': new Date().toLocaleString()
        })
        {
            ordered &&
                setOrderConfirmed(true)
                setOrderConfirmationPopup(false)
        }
    }
    const GoBackHome = () => {
        setOrderConfirmed(false);
        setOrderConfirmationPopup(false);
        setModalVisible(false)
    }
    type RenderItemPropsView = {
        item: counterItemTypes;
    };
    const RenderItemView = ({ item }: RenderItemPropsView) => {
        return (
            <View style={{ marginHorizontal: 15 }}>
                {
                    item.Counter_ID == selectedItem.CounterID && item.Available_Status_from_Admin == true &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7 }}>
                        <View >
                            {item.type == 'Veg' ?
                                <MaterialCommunityIcons name="square-circle" size={17} color="green" /> :
                                <FontAwesome6 name="caret-square-up" size={17} color="red" />
                            }
                            <Text style={{ fontSize: 18, fontWeight: '400' }}>
                                {item.Category}
                            </Text>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image
                                    style={{ width: 15, height: 15, resizeMode: 'cover' }}
                                    source={starImgCorner}
                                />
                                <Text style={{ textAlign: 'center' }}>{item.Rating}/5</Text>
                            </View>
                        </View>
                        <Pressable
                            onPress={() => {
                                setOrderItem(item);
                                setOrderConfirmationPopup(true);
                            }}
                            style={{
                                justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderRadius: 10, width: '20%', backgroundColor: 'black',
                                elevation: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 5,
                            }}>
                            <Text style={{ fontSize: 15, padding: 5, textAlign: 'center', color: 'white' }}>Order</Text>
                        </Pressable>
                    </View>
                }
            </View>
        )
    }
    const RenderItem = ({ item }: RenderItemProps) => (
        <Pressable style={{ flexDirection: 'row', gap: 15, marginHorizontal: 17, elevation: 5, borderWidth: 0, backgroundColor: 'white', marginVertical: 10, borderRadius: 15 }} onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
        }} >
            <View style={{ justifyContent: 'center', alignSelf: 'center', padding: 7 }}>
                <Image
                    source={
                        item.CounterID === 1
                            ? require('../assets/images/tea.jpg')
                            : item.CounterID === 2
                                ? require('../assets/images/Juice.jpg')
                                : item.CounterID === 3
                                    ? require('../assets/images/Lunch.jpg')
                                    : item.CounterID === 4 ?
                                        require('../assets/images/Maggie.jpg')
                                        : require('../assets/images/counter.jpg')
                    }
                    style={{ width: 100, height: 100, borderRadius: 20 }}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: '500' }}>
                    {item.CounterName}
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Timings: {item.Timings}
                </Text>
            </View>
        </Pressable>
    )
    
    
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredCategories(selectedItem);
            console.log(selectedItem);
        } else {
            const filtered = selectedItem.filter((category: string) => 
                category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredCategories(filtered);
            console.log(filtered);
        }
    }, [searchQuery, selectedItem]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar />
            <View >
                <View style={{ marginHorizontal: 17 }}>
                    <Text style={{ fontSize: 30, marginTop: 10, fontStyle: 'italic' }}>Office Eats</Text>
                </View>
                <View style={{ marginHorizontal: 10, alignSelf: 'center', }}>
                    <View>
                        <Image source={require('../assets/images/Headline.png')} style={{ height: 200, aspectRatio: 2 }} resizeMode="contain" />
                    </View>
                    <View style={{ marginHorizontal: 10, }}>
                        <View style={{ flexDirection: 'row', gap: 7 }}>
                            <SimpleLineIcons style={{ alignSelf: 'center' }} name="fire" size={20} color="black" />
                            <Text style={{ fontSize: 18, marginVertical: 7, textAlign: 'center' }}>
                                Recommended for you
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 7 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ gap: 10 }}>
                                <Pressable style={{
                                    flexDirection: 'row', gap: 10
                                }}
                                >
                                    {uniqueCategories.map((category, index) => (
                                        <View style={{ borderWidth: 1, padding: 5, borderRadius: 8, gap: 2, flexDirection: 'row' }}>
                                            <Text key={index} style={{ padding: 2, textAlign: 'left', fontSize: 13 }}>{category}</Text>
                                            <View style={{ alignSelf: 'center' }}>
                                                <Ionicons name="add-outline" size={18} color="black" />
                                            </View>
                                        </View>
                                    ))}
                                </Pressable>
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10, borderBottomColor: 'black', borderBottomWidth: 1, gap: 10, flexDirection: 'row', marginHorizontal: 17 }}>
                    <Ionicons name="fast-food-outline" size={25} color="black" />
                    <Text style={{ fontSize: 18, marginVertical: 5, justifyContent: 'center' }}>Explore Food Counters</Text>
                </View>
                <View style={{ marginTop: 10, paddingBottom: 400 }}>
                    <FlatList
                        data={counters}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={RenderItem}
                        contentContainerStyle={{ paddingBottom: 500 }}
                    />
                </View>
            </View>
            <Modal
                visible={modalVisible}
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: 'row', gap: 15, marginBottom: 10, marginHorizontal: 17 }}>
                        <Pressable style={{ justifyContent: 'center' }} onPress={() => {
                            setModalVisible(false)
                        }}>
                            <Ionicons name="arrow-back" size={25} color="black" />
                        </Pressable>
                        <Text style={{ fontSize: 20, fontWeight: '500', }}>{selectedItem.CounterName}</Text>
                    </View>
                    <View style={{ flex: 1, paddingBottom: 100 }}>
                        <View style={{ alignSelf: 'center', marginTop: 5 }}>
                            <Image
                                source={
                                    selectedItem.CounterID === 1
                                        ? require('../assets/images/tea.jpg')
                                        : selectedItem.CounterID === 2
                                            ? require('../assets/images/Juice.jpg')
                                            : selectedItem.CounterID === 3
                                                ? require('../assets/images/Lunch.jpg')
                                                : selectedItem.CounterID === 4 ?
                                                    require('../assets/images/Sandwich.jpg')
                                                    : require('../assets/images/counter.jpg')
                                }
                                style={{ width: '100%', height: 275, aspectRatio: 1.5 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10, borderWidth: 0.9, marginHorizontal: 15, padding: 7, borderRadius: 8, marginTop: 10 }}>
                            <Ionicons name="search" size={24} color="black" />
                            <TextInput placeholder='Search Item...' style={{ height: 30, fontSize: 20 }}
                                value={searchQuery}
                                onChangeText={setSearchQuery} />
                        </View>
                        <View>
                            {selectedItem &&
                                <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                                    {selectedItem.CounterName == 'Tea Point' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Hot Beverages</Text> :
                                        selectedItem.CounterName == 'Juice Point' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Refreshing Juices</Text> :
                                            selectedItem.CounterName == 'Lunch/Dinner' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Meals</Text> :
                                                selectedItem.CounterName == 'Snacks' ? <Text style={{ fontSize: 18, fontWeight: '500' }}>Hot Snacks</Text> :
                                                    <Text>Counter Items</Text>
                                    }
                                    <View style={{ borderBottomWidth: 1, borderColor: 'black' }} />
                                </View>
                            }
                        </View>
                        <View style={{ paddingBottom: 200, marginTop: 20, }} >
                            <FlatList
                                data={CounterItems}
                                keyExtractor={(item, index: number) => index.toString()}
                                renderItem={RenderItemView}
                                contentContainerStyle={{ paddingBottom: 200 }}
                            />
                        </View>
                        <Modal
                            visible={orderConfirmationPopup}
                            animationType='fade'
                            onRequestClose={() => setOrderConfirmationPopup(false)}
                            transparent
                        >
                            { orderConfirmationPopup && 

                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center' }}>
                                <View style={{
                                    marginHorizontal: 15, gap: 15, backgroundColor: '#FFF8E8',
                                    justifyContent: "center", alignSelf: "center",
                                    width: "80%", padding: 15, borderRadius: 20,
                                    elevation: 10, shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 5,
                                }} >
                                    <View>
                                        <Text style={{ fontSize: 23, fontWeight: '500', textAlign: 'center' }}>Order Confirmation</Text>
                                        <View style={{ borderBottomWidth: 1, borderColor: 'black', backgroundColor: 'black' }} />
                                    </View>
                                    <View style={{ marginVertical: 10, gap: 10 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '500' }}>{orderItem.Counter_Name}</Text>
                                        <Text style={{ fontSize: 17 }}>
                                            Item: <Text style={{ fontSize: 18, fontWeight: '500' }}>{orderItem.Category}</Text> x 1
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Pressable style={{ borderWidth: 1, borderColor: '#3EC70B', backgroundColor: '#3EC70B', width: '30%', borderRadius: 8 }} onPress={submitOrder}>
                                            <Text style={{ color: 'white', textAlign: 'center', padding: 7 }}>Order</Text>
                                        </Pressable>
                                        <Pressable style={{ borderWidth: 1, borderColor: 'black', backgroundColor: 'black', width: '30%', borderRadius: 8 }} onPress={() => { setOrderConfirmationPopup(false) }}>
                                            <Text style={{ color: 'white', textAlign: 'center', padding: 7 }}>Back</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            }
                            { orderConfirmed && 
                                <View style={{ flex: 1 }}>
                                <ScrollView contentContainerStyle={{ flexGrow: 1, }} style={{ marginTop: 40 }}>
                                    <View style={{ height: 200, width: 200, alignSelf: 'center' }}>
                                        <LottieView style={{ flex: 1 }} source={require('../assets/Animation - 1728289183998.json')} autoPlay loop />
                                    </View>
                                    <Text style={{ fontSize: 25, fontWeight: '600', textAlign: 'center' }}>
                                        Your order is made!
                                    </Text>
                                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 15 }}>
                                            Congratulations! Your order has been successfully processed, pick your order as soon as possible!
                                        </Text>
                                    </View>
                                    <View style={{ marginHorizontal: 30 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 10 }}>
                                            Order Details:
                                        </Text>
                                        <View style={{
                                            flexDirection: 'column',
                                            gap: 15,
                                            marginVertical: 10,
                                            borderWidth: 0,
                                            borderRadius: 15,
                                            elevation: 10,
                                            backgroundColor: 'white',
                                            padding: 10
                                        }}>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Order ID: <Text style={{ color: 'black', fontSize: 16 }}>#ORD12345</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Item: <Text style={{ color: 'black', fontSize: 16 }}>{orderItem.Category}</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Counter: <Text style={{ color: 'black', fontSize: 16 }}>{orderItem.Counter_Name}</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>OTP: <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>12345</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Ordered Time: <Text style={{ color: 'black', fontSize: 16 }}>{orderDetails.orderTime}</Text></Text>
                                        </View>
                                    </View>
                                </ScrollView>
                                <View style={{
                                    marginHorizontal: 30,
                                    backgroundColor: 'black',
                                    borderRadius: 7,
                                    paddingVertical: 10,
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 0,
                                    right: 0,
                                    alignItems: 'center',
                                }}>
                                    <Pressable onPress={GoBackHome}>
                                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Back to home</Text>
                                    </Pressable>
                                </View>
                            </View>
                            }
                        </Modal>
                        {/* <Modal
                            visible={orderConfirmed}
                            animationType='fade'
                            onRequestClose={() => { setOrderConfirmed(false); setModalVisible(false) }}
                        >
                            <View style={{ flex: 1 }}>
                                <ScrollView contentContainerStyle={{ flexGrow: 1, }} style={{ marginTop: 40 }}>
                                    <View style={{ height: 200, width: 200, alignSelf: 'center' }}>
                                        <LottieView style={{ flex: 1 }} source={require('../assets/Animation - 1728289183998.json')} autoPlay loop />
                                    </View>
                                    <Text style={{ fontSize: 25, fontWeight: '600', textAlign: 'center' }}>
                                        Your order is made!
                                    </Text>
                                    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 15 }}>
                                            Congratulations! Your order has been successfully processed, pick your order as soon as possible!
                                        </Text>
                                    </View>
                                    <View style={{ marginHorizontal: 30 }}>
                                        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 10 }}>
                                            Order Details:
                                        </Text>
                                        <View style={{
                                            flexDirection: 'column',
                                            gap: 15,
                                            marginVertical: 10,
                                            borderWidth: 0,
                                            borderRadius: 15,
                                            elevation: 10,
                                            backgroundColor: 'white',
                                            padding: 10
                                        }}>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Order ID: <Text style={{ color: 'black', fontSize: 16 }}>#ORD12345</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Item: <Text style={{ color: 'black', fontSize: 16 }}>{orderItem.Category}</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Counter: <Text style={{ color: 'black', fontSize: 16 }}>{orderItem.Counter_Name}</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>OTP: <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>12345</Text></Text>
                                            <Text style={{ color: 'grey', fontSize: 15 }}>Ordered Time: <Text style={{ color: 'black', fontSize: 16 }}>{orderDetails.orderTime}</Text></Text>
                                        </View>
                                    </View>
                                </ScrollView>
                                <View style={{
                                    marginHorizontal: 30,
                                    backgroundColor: 'black',
                                    borderRadius: 7,
                                    paddingVertical: 10,
                                    position: 'absolute',
                                    bottom: 20,
                                    left: 0,
                                    right: 0,
                                    alignItems: 'center',
                                }}>
                                    <Pressable onPress={GoBackHome}>
                                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'white' }}>Back to home</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal> */}
                    </View >
                </View>
            </Modal>
        </View>
    );
}
export default FoodCounters
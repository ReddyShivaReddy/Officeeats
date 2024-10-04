

import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet, FlatList, Alert, Pressable } from 'react-native';

type CategoryType = {
    Counter_Name: string,
    Counter_ID: number,
    category: string,
    Available_Status_from_Vendor: boolean,
    Available_Status_from_Admin: boolean
};

type categoriesTypes = CategoryType[];

const ManageItemsAdmin = () => {
    const Categories: categoriesTypes = [
        { Counter_Name: 'Tea Point', Counter_ID: 1, category: 'Tea', Available_Status_from_Vendor: true, Available_Status_from_Admin: true },
        { Counter_Name: 'Tea Point', Counter_ID: 2, category: 'Coffee', Available_Status_from_Vendor: true, Available_Status_from_Admin: true },
        { Counter_Name: 'Tea Point', Counter_ID: 3, category: 'Boost', Available_Status_from_Vendor: true, Available_Status_from_Admin: true },
        { Counter_Name: 'Tea Point', Counter_ID: 4, category: 'Horlicks', Available_Status_from_Vendor: true, Available_Status_from_Admin: true },
        { Counter_Name: 'Tea Point', Counter_ID: 5, category: 'Lemon Tea', Available_Status_from_Vendor: true, Available_Status_from_Admin: true },
        { Counter_Name: 'Tea Point', Counter_ID: 6, category: 'Green Tea', Available_Status_from_Vendor: true, Available_Status_from_Admin: true },
        { Counter_Name: 'Tea Point', Counter_ID: 7, category: 'Milk', Available_Status_from_Vendor: true, Available_Status_from_Admin:true },
    ];

    const [toggles, setToggles] = useState<CategoryType[]>(Categories);
    
    const toggleSwitch = (category:string) => {
        setToggles(prevToggles =>
            prevToggles.map(toggle =>
                toggle.category === category ? { ...toggle, Available_Status_from_Admin : !toggle.Available_Status_from_Admin } : toggle
            )
        );
    };

    const handleSubmit = () => {
        Alert.alert('Submitted', JSON.stringify(toggles));
    };

    type RenderItemProps = {
        item : CategoryType;
    };

    const renderItem = ({ item }: RenderItemProps) => (
        <View style={styles.itemContainer}>
            <Text style={styles.categoryText}>{item.category}</Text>
            <View style={styles.switchContainer}>
                <Switch
                    style={styles.switch}
                    trackColor={{ false:'grey', true:'#bada55' }}
                    thumbColor={item.Available_Status_from_Vendor ?'white':'white'}
                    ios_backgroundColor="#3e3e3e"
                    value={item.Available_Status_from_Vendor}
                />
                <Switch
                    style={styles.switch}
                    trackColor={{ false:'grey', true:'#bada55' }}
                    thumbColor={item.Available_Status_from_Admin ?'white':'white'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch(item.category)}
                    value={item.Available_Status_from_Admin}
                />
            </View>
        </View>
    );

    return (
        <View style={{ flex : 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold',  }}>Category</Text>
    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', textAlign:'center' }}>Vendor Status</Text>
    <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', textAlign:'center' }}>Admin Status</Text>
</View>
            <View style={{ marginVertical : 10, marginHorizontal : 15 }}>
                <FlatList
                    data={toggles}
                    keyExtractor={(item) => item.category}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom : 50 }}
                />
            </View>
            <View style={{ marginHorizontal : 15,flexDirection:'row' }} >
                <Text style={{ color:'red', fontSize : 15 }}>Note:</Text>
                <Text>Turn off the items which are not available</Text>
            </View>
            <View style={{
                marginTop : 10,
                alignSelf :'center',
                borderWidth : 1,
                backgroundColor :'black',
                borderRadius : 8
            }}>
                <Pressable onPress={handleSubmit} >
                    <Text style={{ color :'white', fontSize : 17,padding : 7 }}>Submit</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderBottomWidth:.7,
      borderColor:'grey',
      paddingVertical :10,
   },
   categoryText:{
      flex : 1,
      fontSize :17,
      fontWeight:'600',
   },
   switchContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      alignSelf:'center',

      flex :1,
   },
   switch:{
    //   marginHorizontal :5,
   
    
   }
});

export default ManageItemsAdmin;
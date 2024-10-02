import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet, FlatList, Text } from 'react-native';

const ManageItemsVendor = () => {
  const categories = [
    { Counter_Name: 'Tea Point', Counter_ID: 1, Categories: 'Tea', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 2, Categories: 'Coffee', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 3, Categories: 'Boost', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 4, Categories: 'Horlicks', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 5, Categories: 'Lemon Tea', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 6, Categories: 'Green Tea', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 7, Categories: 'Milk', Available_Status_from_Vendor: true },
  ];

  const [switchStates, setSwitchStates] = useState<boolean[]>(() => new Array(categories.length).fill(true));

  const toggleSwitch = (id: number) => {
    setSwitchStates(previousState => {
      const newState = [...previousState];
      newState[id - 1] = !newState[id - 1];
      return newState;
    });
  };

  type CategoryType = {
    Counter_Name: string;
    Counter_ID: number;
    Categories: string;
    Available_Status_from_Vendor: boolean;
  };

  type RenderItemProps = {
    item: CategoryType;
  };

  const RenderItem = ({ item }: RenderItemProps) => {

    
    console.log(switchStates[item.Counter_ID-1]);

    return (
      <View style={styles.itemContainer}>
        <Text>{item.Categories}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={switchStates[item.Counter_ID - 1] ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(item.Counter_ID)}
          value={switchStates[item.Counter_ID - 1]} 
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
        <Text style={{ fontSize:17, fontWeight:'bold' }}>Category</Text>
        <Text style={{ fontSize:17, fontWeight:'bold' }}>Available</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.Counter_ID.toString()}
        renderItem={RenderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginHorizontal:10
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ManageItemsVendor;
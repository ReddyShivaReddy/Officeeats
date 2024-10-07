import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet, Button, FlatList, Alert, Pressable } from 'react-native';


type CategoryType = {
  Counter_Name: string;
  Counter_ID: number;
  category: string;
  Available_Status_from_Vendor: boolean;
};

type categoriesTypes = CategoryType[]
const ManageItemsVendor = () => {
  const Categories: categoriesTypes = [
    { Counter_Name: 'Tea Point', Counter_ID: 1, category: 'Tea', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 2, category: 'Coffee', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 3, category: 'Boost', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 4, category: 'Horlicks', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 5, category: 'Lemon Tea', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 6, category: 'Green Tea', Available_Status_from_Vendor: true },
    { Counter_Name: 'Tea Point', Counter_ID: 7, category: 'Milk', Available_Status_from_Vendor: true },
  ];

  const [toggles, setToggles] = useState<CategoryType[]>(Categories);
  const toggleSwitch = (category: string) => {
    setToggles(prevToggles =>
      prevToggles.map(toggle =>
        toggle.category === category ? { ...toggle, Available_Status_from_Vendor: !toggle.Available_Status_from_Vendor } : toggle
      )
    );
  };

  const handleSubmit = () => {
    Alert.alert('Submitted', JSON.stringify(toggles));
  };
  type RenderItemProps = {
    item: CategoryType;
  };

  
  const renderItem = ({ item }: RenderItemProps) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.7, borderColor: 'grey' }}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ fontSize: 17, fontWeight: 'semibold', justifyContent: 'center' }}>{item.category}</Text>
      </View>
      <Switch 
      style={{ transform:[{scaleX :1.0},{scaleY :1.0}],}}
      trackColor={{ false: 'grey', true: '#bada55' }}
      thumbColor={item.Available_Status_from_Vendor ? 'white' : 'white'}
      ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch(item.category)}
        value={item.Available_Status_from_Vendor}
      />
    </View>
  )

  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <Text style={{marginHorizontal:15,fontSize:24,fontWeight:'500',marginBottom:10}}>Manage Items</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Category</Text>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Available</Text>
      </View>
      <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
        <FlatList
          data={toggles}
          keyExtractor={(item) => item.category}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
      <View style={{ marginHorizontal: 15 }} >
        <Text style={{color:'red',fontSize:15}}>Note: </Text>
        <Text>Turn off the items which are not available</Text>
      </View>
      <View style={{ marginTop:10, alignSelf: 'center',borderWidth:1,backgroundColor:'black',borderRadius:8,width:'40%'
       }}>
        <Pressable onPress={handleSubmit} >
          <Text style={{color:'white',fontSize:17,padding:7,textAlign:'center'}}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default ManageItemsVendor;
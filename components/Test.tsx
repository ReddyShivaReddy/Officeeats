import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';


type CategoryType = {
  Counter_Name: string;
  Counter_ID: number;
  category: string;
  Available_Status_from_Vendor: boolean;
};

type categoriesTypes=CategoryType[]
const Test = () => {
  const Categories: categoriesTypes= [
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

  return (
    <View style={{flex:1}}>
      <View>
        <Text>Category</Text>
        <Text>Available</Text>
      </View>
      <FlatList
        data={toggles}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <View style={{}}>
            <Text style={{}}>{item.category}</Text>
            <Switch
              onValueChange={() => toggleSwitch(item.category)}
              value={item.Available_Status_from_Vendor}
            />
          </View>
        )}
      />
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
};


export default Test;
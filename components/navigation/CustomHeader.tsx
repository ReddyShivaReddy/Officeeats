// CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader = ({title}: CustomHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#f8f8f8' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, marginLeft: 10 }}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
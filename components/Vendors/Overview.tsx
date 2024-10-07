import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/Ionicons';


function Overview() {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [months, setMonths] = useState<string[]>([]);
  const orderData = [
    { Counter: 'a', Category: 'Horlicks', Status: 'Delivered', Date: '2024-02', Count: 113 },
    { Counter: 'a', Category: 'Tea', Status: 'Canceled', Date: '2024-02', Count: 33 },
    { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-01', Count: 110 },
    { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-02', Count: 36 },
    { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-01', Count: 40 },
    { Counter: 'a', Category: 'Coffee', Status: 'Pending', Date: '2024-02', Count: 40 },
    { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-02', Count: 40 },
    { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-02', Count: 129 },
    { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-02', Count: 113 },
    { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-02', Count: 33 },
    { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-02', Count: 110 },
    { Counter: 'a', Category: 'Horlicks', Status: 'Canceled', Date: '2024-02', Count: 36 },
    { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-02', Count: 29 },
    { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-01', Count: 50 },
    { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-01', Count: 179 },
    { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-01', Count: 153 },
    { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-01', Count: 23 },
    { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-01', Count: 120 },
    { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-01', Count: 26 },
    { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-01', Count: 39 },
  ];

  useEffect(() => {
    const uniqueMonths = Array.from(new Set(orderData.map(order => order.Date)));
    const latestMonth = uniqueMonths.sort((a, b) => new Date(b) > new Date(a) ? 1 : -1)[0];
    setMonths(uniqueMonths);
    setSelectedMonth(latestMonth);
  }, []);

  const filteredData = orderData.filter(order => order.Date === selectedMonth);

  return (
    <ScrollView style={styles.container}>
      <StatusBar />

    <Text style={{ fontSize: 22, marginVertical: 15,marginHorizontal: 15, }}>Monthly Overview</Text>
      <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10,marginHorizontal: 15, }}>
        <Ionicons name="filter" size={24} color="black" />
        <Text style={{ fontSize: 19, fontWeight: '500' }}>Filter</Text>
      </View>
      <View style={{ width: '60%', borderWidth: 1, borderRadius: 10, marginBottom: 10,marginHorizontal: 15, }}>
        <Picker
          selectedValue={selectedMonth}
          onValueChange={(itemValue) => setSelectedMonth(itemValue)}
        >
          {months.map(month => (
            <Picker.Item key={month} label={month} value={month} />
          ))}
        </Picker>
      </View>

      {['Delivered', 'Pending', 'Canceled'].map(status => (
        <View key={status} style={styles.statusContainer}>
          <Text style={styles.statusTitle}>{status}</Text>
          {filteredData.filter(order => order.Status === status).map(order => (
            <View key={order.Category + order.Count} style={styles.itemContainer}>
              <Text style={styles.category}>{order.Category}</Text>
              <Text style={styles.separator}> - </Text>
              <Text style={styles.count}>{order.Count}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  statusContainer: {
    marginBottom: 20,
    marginHorizontal: 15,
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  category: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
  },
  separator: {
    fontSize: 16,
    marginHorizontal: 30,
  },
  count: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    width: 40,
  },
});

export default Overview;
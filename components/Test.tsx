import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const orderData =[ { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-12', Count: 113 },
  { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-12', Count: 33 },
  { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-12', Count: 110 },
  { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-02', Count: 36 },
  { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-03', Count: 40 },
  { Counter: 'a', Category: 'Coffee', Status: 'Pending', Date: '2024-03', Count: 40 },
  { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-02', Count: 40 },
  { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-02', Count: 129 },
  { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-02', Count: 113 },
  { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-02', Count: 33 },
  { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-02', Count: 110 },
  { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-02', Count: 36 },
  { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-02', Count: 29 },
  { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-01', Count: 50 },
  { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-01', Count: 179 },
  { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-01', Count: 153 },
  { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-01', Count: 23 },
  { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-01', Count: 120 },
  { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-01', Count: 26 },
  { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-01', Count: 39 },
 
];

const Test: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    // Extract unique months and determine the latest month
    const uniqueMonths = Array.from(new Set(orderData.map(order => order.Date)));
    const latestMonth = uniqueMonths.sort((a, b) => new Date(b) > new Date(a) ? 1 : -1)[0];

    setMonths(uniqueMonths);
    setSelectedMonth(latestMonth);
  }, []);

  const filteredData = orderData.filter(order => order.Date === selectedMonth);

  return (
    <View style={styles.container}>
      <Text style={styles.filterLabel}>Overview</Text>
      <Picker
        selectedValue={selectedMonth}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {months.map(month => (
          <Picker.Item key={month} label={month} value={month} />
        ))}
      </Picker>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 50,
    backgroundColor: '#fff',
  },
  filterLabel: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  statusContainer: {
    marginBottom: 20,
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
    flex: 1/3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  separator: {
    fontSize: 16,
    marginHorizontal: 30, // Space around the separator
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    width: 40, // Fixed width for the count
  },
});

export default Test;
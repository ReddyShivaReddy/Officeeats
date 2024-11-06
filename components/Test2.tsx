import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Modal, Pressable, TextInput, SafeAreaView } from 'react-native';

type propType = {
  'CounterID': number,
  'CounterName': string,
  'Timings': string
}

type ItemProps = {
  CounterData: propType;
};

function FoodCounters() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});

  type counter = {
    'CounterID': number,
    'CounterName': string,
    'Timings': string
  }

  type countersTypes = counter[]

  const counters: countersTypes = [
    {
      CounterID: 1,
      CounterName: 'Tea Point',
      Timings: '9:00 AM - 10:00 PM'
    },
    {
      CounterID: 3,
      CounterName: 'Lunch/Dinner',
      Timings: '12:30 PM - 2:00 PM and 8:30 PM - 10:00 PM'
    },
  ]

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
      'Counter_Name': 'Lunch/Dinner',
      'Counter_ID': 3,
      'Category': 'Veg Meal',
      'Available_Status_from_Vendor': true,
      'Available_Status_from_Admin': true,
      'type': 'Veg',
      'Rating': 5
    },
  ]

  const RenderItem = ({ item }: { item: counter }) => (
    <Pressable
      style={styles.counterItem}
      onPress={() => {
        setSelectedItem({
          CounterID: item.CounterID,
          CounterName: item.CounterName,
          Category: 'Tea'
        });
        setModalVisible(true);
      }}>
      <Text>{item.CounterName}</Text>
    </Pressable>
  )

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <SafeAreaView />
      <FlatList
        data={counters}
        keyExtractor={(item) => item.CounterID.toString()}
        renderItem={RenderItem}
        contentContainerStyle={styles.counterList}
      />

      <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView>
            <View style={styles.modalHeader}>
              <Pressable
                style={styles.modalBackButton}
                onPress={() => setModalVisible(false)}>
                <Text>Back</Text>
              </Pressable>
              <Text style={styles.modalTitle}>{selectedItem.CounterName}</Text>
            </View>
            <View style={styles.modalContent}>
              {/* Add modal content here */}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  counterList: {
    padding: 20,
  },
  counterItem: {
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 17,
    marginBottom: 10,
  },
  modalBackButton: {
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  modalContent: {
    flex: 1,
    paddingBottom: 100,
  },
});

export default FoodCounters;
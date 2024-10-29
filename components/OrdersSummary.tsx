import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SectionList,ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';


type Order = {
  Counter: string;
  Category: string;
  Status: string;
  Date: string;
  Count: number;
};

const orderData: Order[] = [
  { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-01', Count: 50 },
  { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-01', Count: 179 },
  { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-01', Count: 153 },
  { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-01', Count: 23 },
  { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-01', Count: 120 },
  { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-01', Count: 26 },
  { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-01', Count: 39 },
  { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-02', Count: 40 },
  { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-02', Count: 129 },
  { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-02', Count: 113 },
  { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-02', Count: 33 },
  { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-02', Count: 110 },
  { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-02', Count: 36 },
  { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-02', Count: 29 },
  { Counter: 'b', Category: 'grape', Status: 'Pending', Date: '2024-01', Count: 50 },
  { Counter: 'b', Category: 'grape', Status: 'Delivered', Date: '2024-01', Count: 179 },
  { Counter: 'b', Category: 'Orange', Status: 'Delivered', Date: '2024-01', Count: 153 },
  { Counter: 'b', Category: 'Orange', Status: 'Canceled', Date: '2024-01', Count: 23 },
  { Counter: 'b', Category: 'orange', Status: 'Delivered', Date: '2024-01', Count: 120 },
  { Counter: 'b', Category: 'BM', Status: 'Canceled', Date: '2024-01', Count: 26 },
  { Counter: 'C', Category: 'Veg', Status: 'Pending', Date: '2024-01', Count: 39 },
  { Counter: 'C', Category: 'Non-Veg', Status: 'Pending', Date: '2024-02', Count: 40 },
  { Counter: 'C', Category: 'Veg', Status: 'Delivered', Date: '2024-02', Count: 129 },
  { Counter: 'C', Category: 'Non-Veg', Status: 'Delivered', Date: '2024-02', Count: 113 },
  { Counter: 'C', Category: 'Veg', Status: 'Canceled', Date: '2024-02', Count: 33 },
  { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-02', Count: 110 },
  { Counter: 'B', Category: 'Grape', Status: 'Canceled', Date: '2024-02', Count: 36 },
  { Counter: 'B', Category: 'Grapes', Status: 'Pending', Date: '2024-02', Count: 29 },
];

const uniqueDates = [...new Set(orderData.map(entry => entry.Date))];
const Statuses = [...new Set(orderData.map(entry => entry.Status))];

const OrdersSummary = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const sortedDates = uniqueDates.sort();

  useEffect(() => {
    setSelectedStatus("Delivered");
    setSelectedDate(sortedDates[sortedDates.length - 1]);
  }, []);

  const filterAndGroupData = () => {
    const filteredData = orderData.filter(item => {
      const dateMatch = selectedDate ? item.Date === selectedDate : true;
      const statusMatch = selectedStatus ? item.Status.toLowerCase() === selectedStatus.toLowerCase() : true;
      return dateMatch && statusMatch;
    });
    const groupedData = filteredData.reduce((acc, item) => {
      const key = item.Counter.toUpperCase();
      if (!acc[key]) {
        acc[key] = { title: key, data: [item] };
      } else {
        acc[key].data.push(item);
      }
      return acc;
    }, {} as Record<string, { title: string; data: Array<Order> }>);

    return Object.values(groupedData);
  };
  const data = filterAndGroupData();
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View>
        <Text style={{ marginHorizontal: 20, fontSize: 19, fontWeight: '500' }}>Overview</Text>
      </View>
      <View style={styles.filter}>
        <View style={{ borderWidth: 1, width: '40%', padding: 1 }}>

          <Picker
            selectedValue={selectedDate}
            onValueChange={(value) => setSelectedDate(value)}
          >
            {uniqueDates.map(month => (
              <Picker.Item key={month} label={month} value={month} />
            ))}
          </Picker>
        </View>
        <View style={{ borderWidth: 1, width: '40%', padding: 1 }}>

          <Picker
            selectedValue={selectedStatus}
            onValueChange={(value) => setSelectedStatus(value)}
          >
            {Statuses.map(status => (
              <Picker.Item key={status} label={status} value={status} />
            ))}
          </Picker>
        </View>
      </View>

      <View >
        <Text style={styles.dateAndStatusHeading}>
          {selectedStatus} on {selectedDate}
        </Text>
      </View>

      <View>
        <SectionList
          sections={data}
          keyExtractor={(item, index) => `${item.Counter}-${index}`}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.category}>{item.Category}</Text>
              <Text style={styles.separator}> - </Text>
              <Text style={styles.count}>{item.Count}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.titleHeading}>{section.title}</Text>
          )}
        />
      </View>
    </View>
  );
};

export default OrdersSummary;

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 20,
    padding: 10

  },
  titleHeading: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginLeft: 20,
  },
  category: {
    flex: 1 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  separator: {
    fontSize: 15,
    marginHorizontal: 30,
  },
  count: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    width: 40,
  },
  dateAndStatusHeading: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: '600',
    marginVertical: 10
  }
});



// import React, { useEffect, useState } from 'react';

// import { StyleSheet, View, Text, SectionList } from 'react-native';

// import { Picker } from '@react-native-picker/picker';



// type Order = {

//     Counter: string;

//     Category: string;

//     Status: string;

//     Date: string;

//     Count: number;

// };



// //the order data
// const orderData: Order[] = [
//     { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-01', Count: 50 },
//     { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-01', Count: 179 },
//     { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-01', Count: 153 },
//     { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-01', Count: 23 },
//     { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-01', Count: 120 },
//     { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-01', Count: 26 },
//     { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-01', Count: 39 },
//     { Counter: 'a', Category: 'Tea', Status: 'Pending', Date: '2024-02', Count: 40 },
//     { Counter: 'a', Category: 'Tea', Status: 'Delivered', Date: '2024-02', Count: 129 },
//     { Counter: 'a', Category: 'Coffee', Status: 'Delivered', Date: '2024-02', Count: 113 },
//     { Counter: 'a', Category: 'Coffee', Status: 'Canceled', Date: '2024-02', Count: 33 },
//     { Counter: 'a', Category: 'Boost', Status: 'Delivered', Date: '2024-02', Count: 110 },
//     { Counter: 'a', Category: 'Boost', Status: 'Canceled', Date: '2024-02', Count: 36 },
//     { Counter: 'a', Category: 'Boost', Status: 'Pending', Date: '2024-02', Count: 29 },
//     { Counter: 'b', Category: 'grape', Status: 'Pending', Date: '2024-01', Count: 50 },
//     { Counter: 'b', Category: 'grape', Status: 'Delivered', Date: '2024-01', Count: 179 },
//     { Counter: 'b', Category: 'Orange', Status: 'Delivered', Date: '2024-01', Count: 153 },
//     { Counter: 'b', Category: 'Orange', Status: 'Canceled', Date: '2024-01', Count: 23 },
//     { Counter: 'b', Category: 'orange', Status:'Delivered' , Date:'2024-01' , Count :120},
//     { Counter:'b' ,Category:'BM' ,Status:'Canceled' ,Date:'2024-01' ,Count :26},
//     {Counter:'a' ,Category:'Boost' ,Status:'Delivered' ,Date:'2024-02' ,Count :110},
//     {Counter:'B' ,Category:'Grape' ,Status:'Canceled' ,Date:'2024-02' ,Count :36},
//     {Counter:'B' ,Category:'Grapes' ,Status:'Pending' ,Date:'2024-02' ,Count :29},
//     { Counter:'C' ,Category:'Veg' ,Status:'Pending' ,Date:'2024-01' ,Count :39},
//     { Counter:'C' ,Category:'Non-Veg' ,Status:'Pending' ,Date:'2024-02' ,Count :40},
//     { Counter:'C' ,Category:'Veg' ,Status:'Delivered' ,Date:'2024-02' ,Count :129},
//     { Counter:'C' ,Category:'Non-Veg' ,Status:'Delivered' ,Date:'2024-02' ,Count :113},
//     { Counter:'C' ,Category:'Veg' ,Status:'Canceled' ,Date:'2024-02' ,Count :33},
   
// ];

// //dynamically fetched picker items
// const uniqueDates = [...new Set(orderData.map(entry => entry.Date))];
// const Statuses = [...new Set(orderData.map(entry => entry.Status))];
// const Features = [... new Set(orderData.map(entry => entry.Counter.toUpperCase()))];

// const OrdersSummary = () => {

//     const [selectedDate, setSelectedDate] = useState<string>('');
//     const [selectedStatus, setSelectedStatus] = useState<string>('');
//     const [selectedCounter, setSelectedCounter] = useState<string>('');

//     const sortedDates = uniqueDates.sort();
//     Features.sort()
//     useEffect(() => {
//         setSelectedStatus("Delivered");
//         setSelectedDate(sortedDates[sortedDates.length - 1]);
//         setSelectedCounter('All');


//     }, []);

//     const filterAndGroupData = () => {

//         const filteredData = orderData.filter(item => {

//             const dateMatch = selectedDate ? item.Date === selectedDate : true;

//             const statusMatch = selectedStatus ? item.Status.toLowerCase() === selectedStatus.toLowerCase() : true;

//             const featureMatch = selectedCounter === 'All' ? true : item.Counter.toUpperCase() === selectedCounter.toUpperCase();

//             return dateMatch && statusMatch && featureMatch;

//         });

//         const groupedData = filteredData.reduce((acc, item) => {

//             const key = item.Counter.toUpperCase();

//             if (!acc[key]) {

//                 acc[key] = { title: key, data: [item], total: item.Count };

//             } else {

//                 acc[key].data.push(item);

//                 acc[key].total += item.Count;

//             }
//             return acc;
//         }, {} as Record<string, { title: string; data: Array<Order>; total: number }>);
//         return Object.values(groupedData);

//     };

  
//     const data = filterAndGroupData();
//     return (
//         <View>
//             <View>
//                 <Text style={styles.header}>Overview</Text>
//             </View>
//             <View style={styles.filter}>
//                 <View style={styles.pickerContainer}>
//                     <Picker
//                          style={styles.eachPicker}
//                         selectedValue={selectedDate}

//                         onValueChange={(value) => setSelectedDate(value)}
//                     >

//                         {uniqueDates.map(month => (
//                             <Picker.Item key={month} label={month} value={month} />

//                         ))}
//                     </Picker>
//                 </View>
//                 <View style={styles.pickerContainer}>
//                     <Picker

//                         selectedValue={selectedStatus}
//                         style={styles.eachPicker}
                    
//                         onValueChange={(value) => setSelectedStatus(value)}
//                     >

//                         {Statuses.map(status => (
//                             <Picker.Item key={status} label={status} value={status} />

//                         ))}
//                     </Picker>
//                 </View>
//             </View>
//             <View style={styles.nextPicker}>
//                 <View style={styles.pickerContainer}>
//                     <Picker
//                         selectedValue={selectedCounter}
//                         onValueChange={(value) => setSelectedCounter(value)}
//                         style={styles.eachPicker}
//                     >

//                         {Features.map(feature => (
//                             <Picker.Item key={feature} label={feature} value={feature} />

//                         ))}
//                         <Picker.Item label={'All'} value={'All'}/>
//                     </Picker>
//                 </View>
//             </View>

//             <View>
//                 <Text style={styles.dateAndStatusHeading}>

//                     {selectedStatus} on {selectedDate} on Counter {selectedCounter}
//                 </Text>
//             </View>

//             <View>
//                 <SectionList

//                     sections={data}

//                     keyExtractor={(item, index) => `${item.Counter}-${index}`}

//                     renderItem={({ item }) => (
//                         <View style={styles.itemContainer}>
//                             <Text style={styles.category}>{item.Category}</Text>
//                             <Text style={styles.separator}> - </Text>
//                             <Text style={styles.count}>{item.Count}</Text>
//                         </View>

//                     )}

//                     renderSectionHeader={({ section }) => (
//                         <Text style={styles.titleHeading}>{section.title}</Text>

//                     )}

                  

//                     renderSectionFooter={({ section }) => (
//                         <View style={styles.itemContainer}>
//                             <Text style={[styles.category, { fontWeight: 'bold' }]}>Total</Text>
//                             <Text style={styles.separator}> - </Text>
//                             <Text style={[styles.count, { fontWeight: 'bold' }]}>{section.total}</Text>
//                         </View>
//                     )}

//                 />
//             </View>
//         </View>

//     );

// };

// export default OrdersSummary;

// const styles = StyleSheet.create({

//     filter: {

//         flexDirection: 'row',

//         justifyContent: 'space-around',

//         paddingVertical: 10,

//         gap: 20,

//         paddingHorizontal: 10,

//     },
//     eachPicker:{
//         height:40,
        
//         justifyContent:'center',
//         width:'100%'
        
//     },
//     nextPicker: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'

//     },

//     header: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         marginLeft: 20,
//         marginTop: 20,
//         color: '#6F4829'

//     },

//     titleHeading: {

//         fontSize: 17,

//         fontWeight: '600',

//         marginLeft: 20,

//     },

//     itemContainer: {

//         flexDirection: 'row',

//         alignItems: 'center',

//         paddingVertical: 5,

//         marginLeft: 20,

//     },

//     category: {

//         flex: 1 / 3,

//         justifyContent: 'center',

//         alignItems: 'center',

//         fontSize: 15,

//     },

//     separator: {

//         fontSize: 15,

//         marginHorizontal: 30,

//     },

//     count: {

//         fontSize: 15,

//         textAlign: 'left',

//         width: 40,

//     },

//     dateAndStatusHeading: {

//         fontSize: 15,

//         marginLeft: 20,

//         fontWeight: '600',

//         marginVertical: 10,

//     },

//     pickerContainer: {

//         borderColor:'black',
//         borderWidth:1.5,
//         borderRadius:5,
//         width:'30%'

//     },

// });
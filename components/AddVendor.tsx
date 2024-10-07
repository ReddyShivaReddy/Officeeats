import { View, Text, TextInput, Button, StyleSheet, Pressable, ScrollView,Image } from 'react-native';
import React from 'react';

function AddVendor() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Image source={require('../assets/images/AddVendorillustration.png')} style={{width:250,height:230,alignSelf:'center'}} />
            </View>
            <Text style={styles.label}>Vendor Name</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Vendor Contact</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Vendor Email</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Vendor Counter Name</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Counter ID</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Veg Categories (<Text style={{color:'red'}}>* </Text>comma-seperated)</Text>
            <TextInput
                style={styles.multiInput}
                multiline={true}
                numberOfLines={10}
            />
            <Text style={styles.label}>Non-Veg Categories (<Text style={{color:'red'}}>* </Text>comma-seperated)</Text>
            <TextInput
                style={styles.multiInput}
                multiline={true}
                numberOfLines={10}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add Vendor</Text>
            </Pressable>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 17,
        marginHorizontal: 15
    },
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 16,
        borderRadius: 10,
        padding: 10,
        fontSize: 17,
        marginHorizontal: 15
    },
    buttonContainer: {

        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'black',
        padding: 13,
        borderRadius: 12,
        justifyContent: 'center',
        alignSelf: 'center',
        width:'90%',
  
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign:'center'

    },
    multiInput: {
        height: 150,
        borderRadius: 12,
        borderColor:'grey',
        borderWidth: 1,
        paddingLeft: 10,
        textAlignVertical: 'top',
        padding: 10,
        marginBottom: 20,
        fontSize: 17,
        marginHorizontal: 15
    }
});

export default AddVendor;
import { View, Text, TextInput, Button, StyleSheet, Pressable, ScrollView } from 'react-native';
import React from 'react';

function AddVendor() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Vendor Name</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Vendor Contact</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Vendor Email</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Vendor Counter Name</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Categories</Text>
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
        // marginRight:1,
        // marginLeft: 20,
        marginVertical: 20,
        backgroundColor: '#fff',
        //borderWidth: 2


    },
    label: {
        fontSize: 17,
        marginHorizontal: 15
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        // paddingHorizontal: 8,
        borderRadius: 8,
        padding: 10,
        fontSize: 17,
        marginHorizontal: 15
    },
    buttonContainer: {

        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#5dbea3',
        padding: 13,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,

    },
    multiInput: {
        height: 150,
        borderRadius: 8,
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
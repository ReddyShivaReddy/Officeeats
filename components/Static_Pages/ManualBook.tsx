import { View, Text, StyleSheet,StatusBar } from 'react-native'
import React from 'react'

function ManualBook() {
    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <Text style={styles.complaintText}>How Office Eats works?</Text> */}
            <View style={styles.messageContainer}>
                <Text style={styles.BoldText}>1. Open the Counter</Text>
                <Text style={styles.MainText}>
                    Launch the Office Eats app and navigate to the cafeteria section. Tap on the Counter  to view the available menu items.
                </Text>
                <Text style={styles.BoldText}>2. Select Your Item</Text>
                <Text style={styles.MainText}>
                    Browse through the delicious options and select the dish you'd like to order. Remember, you can only choose one item per order to ensure quick service.
                </Text>
                <Text style={styles.BoldText}>3. Place Your Order</Text>
                <Text style={styles.MainText}>
                    Once you've made your selection, tap on the "Place Order" button. This action will initiate the order process and generate a one-time password (OTP) for verification.
                </Text>
                <Text style={styles.BoldText}>4. Verify with the Vendor</Text>
                <Text style={styles.MainText}>
                    When you arrive at the cafeteria to pick up your order, present the OTP to the vendor. They will verify the OTP to ensure that your order is legitimate and accurately recorded.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#EEF5FF',
        
    },

    complaintText: {
        fontSize: 20,
        marginVertical: 7,
        fontWeight: '500',
        marginHorizontal:10,
    },
    messageContainer: {
        marginHorizontal:10,
        marginVertical:10,
        //backgroundColor: '#f5f5f5',
        padding: 20,
        borderWidth:0,
        borderRadius:10,
        backgroundColor:'white',
        //IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        //Android
        elevation: 5,
    },
    MainText: {
        fontSize: 15,
        fontWeight:'thin'
    },
    BoldText: {
        fontWeight: '400',
        fontSize: 17,
        marginTop:8
    }

});

export default ManualBook
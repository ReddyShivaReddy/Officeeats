import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

function Test() {
    const [isworksOpen, setworksOpen] = useState(false)
    const [isorderOpen, setorderOpen] = useState(false)
    const togglework = () => {
        setworksOpen(!isworksOpen)
    }

    const toggleorder = () => {
        setorderOpen(!isorderOpen)
    }

    return (
        <>
            <View style={styles.tcontainer}>
                <Text style={{ fontSize: 25, marginHorizontal: 10, marginVertical: 15, fontWeight: 'bold' }}>FAQ's</Text>
                <TouchableOpacity style={styles.container} onPress={togglework}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{ fontSize: 20 }}>How it works</Text>
                        </View>
                        <View style={{ justifyContent: 'center'}}>
                            <AntDesign name={isworksOpen ? 'up' : 'down'} size={20} color='black' />
                        </View>
                    </View>
                    <View>
                        {isworksOpen && (
                            <View style={styles.cardcontent}>
                                <Text>Google downloads text, images, and videos from pages it found on the internet with automated programs called crawlers. Indexing: Google analyzes the text, images, and 
                                    video files on the page, and stores the information in the Google index, which is a large database.</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} onPress={toggleorder}>
                    <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text style={{ fontSize: 20 }}>How it works</Text>
                        </View>
                        <View style={{ justifyContent: 'center'}}>
                            <AntDesign name={isorderOpen ? 'up' : 'down'} size={20} color='black' />
                        </View>
                    </View>
                    <View>
                        {isorderOpen && (
                            <View style={styles.cardcontent}>
                                <Text>Google downloads text, images, and videos from pages it found on the internet with automated programs called crawlers. Indexing: Google analyzes the text, images, and 
                                    video files on the page, and stores the information in the Google index, which is a large database.</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                
            </View>
        </>
    )
}





const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        // borderWidth: 1,
        backgroundColor: "#f0f7f7",
        elevation:5,
    },
    help: {
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    component: {
        padding: 30,
    },
    tcontainer: {
        margin: 16,
    },
    card: {
        backgroundColor: "#f0f7f7",
        borderRadius: 8,
        marginBottom: 14,
    },
    cardcontent: {
        padding: 14,
    },
})

export default Test
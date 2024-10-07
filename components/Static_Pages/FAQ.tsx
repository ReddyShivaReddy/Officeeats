import { StyleSheet, Text, View, TouchableOpacity, StatusBar,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


function FAQ() {
    const [isworksOpen, setworksOpen] = useState(false)
    const [isorderOpen, setorderOpen] = useState(false)
    const togglework = () => {
        setworksOpen(!isworksOpen)
    }
    const toggleorder = () => {
        setorderOpen(!isorderOpen)
    }
    return (
        <ScrollView style={{flex:1,backgroundColor:'#EEF5FF'}}>
        <StatusBar />
            <View style={styles.tcontainer}>
                {/* <Text style={{ fontSize: 25, marginHorizontal: 10, marginVertical: 15, fontWeight: 'bold' }}>FAQ's</Text> */}
                <TouchableOpacity style={styles.container} onPress={togglework}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18 }}>How it works</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Ionicons name={isworksOpen ? "chevron-up" : "chevron-down"} size={24} color="black" />
                        </View>
                    </View>
                    <View>
                        {isworksOpen && (
                            <View style={styles.cardcontent}>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, fugit illum dicta commodi quia maxime iusto facere corporis pariatur
                                     repudiandae ipsam tenetur explicabo autem inventore rerum? Mollitia nesciunt ducimus voluptatum.</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} onPress={toggleorder}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18 }}>How it works</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Ionicons name={isorderOpen ? "chevron-up" : "chevron-down"} size={24} color="black" />
                        </View>
                    </View>
                    <View>
                        {isorderOpen && (
                            <View style={styles.cardcontent}>
                                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quidem. Consequatur, debitis? Facere eaque, mollitia hic atque deleniti sit tempore
                                    magni accusantium, assumenda cupiditate officiis provident molestiae, aspernatur explicabo voluptatibus.</Text>
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        backgroundColor: "white",
        elevation: 5,
    },
    tcontainer: {
        marginHorizontal: 15,
    },
    cardcontent: {
        padding: 10,
    },
})

export default FAQ
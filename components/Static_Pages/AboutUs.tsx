import { View, Text, StyleSheet,StatusBar} from 'react-native'
import React from 'react'

 
function AboutUs(){
  return (
    <View style={styles.container}>
        <StatusBar /> 
        <View style={styles.messageContainer}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.MainText}>Our mission is to make ordering free, delicious meals from your office
            cafeteria as easy as tapping a few buttons on your smartphone.</Text>
            <Text style={styles.MainText}>Our mission is to make ordering free, delicious meals from your office
            cafeteria as easy as tapping a few buttons on your smartphone.</Text>
            <Text style={styles.MainText}>Our mission is to make ordering free, delicious meals from your office
            cafeteria as easy as tapping a few buttons on your smartphone.</Text>
        </View>
    </View>
  )
}
 
const styles= StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal:10
      },
      messageContainer:{
        padding: 20,
        borderWidth:0,
        //IOS
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:5,
        //Android
        elevation:2,
      },
      title:{
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold'
      },
      MainText:{
        fontSize: 17,
      },
});
export default AboutUs
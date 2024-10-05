import { View, Text, StyleSheet,StatusBar} from 'react-native'
import React from 'react'

 
function AboutUs(){
  return (
    <View style={styles.container}>
        <StatusBar /> 
        <View style={styles.messageContainer}>
            <Text style={styles.title}>Who are we</Text>
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
        backgroundColor:'#EEF5FF',
        
      },
      messageContainer:{
        marginVertical:10,
        marginHorizontal:10,
        padding: 20,
        borderWidth:0,
        borderRadius:10,
        backgroundColor:'white',
        //IOS
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:5,
        //Android
        elevation:5,
      },
      title:{
        fontSize: 20,
        fontWeight: '500'
      },
      MainText:{
        fontSize: 17,
      },
});
export default AboutUs
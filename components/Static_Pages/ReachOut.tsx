import { View, Text, StyleSheet,StatusBar} from 'react-native'
import React from 'react'
 
function ReachOut(){
  return (
    <View style={styles.container}> 
     <StatusBar />
      <Text style={styles.title}>Raise a complaint</Text>
        <View style={styles.messageContainer}>
            <Text style={styles.header}>Reach out to us</Text>
            <Text style={styles.body}>We are truly sorry that you've encountered an issue. Please email us to 
                <Text style={styles.Mail}> abc@bdc.com.</Text>
             We are here to help you.</Text>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal:10,
        marginVertical:10
      },
   
      title:{
        fontSize: 22,
        marginBottom: 10,
        fontWeight: 'bold'
      },
      messageContainer:{
          padding: 20,
          borderWidth:0,
          // borderRadius:10,
        //IOS
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity:0.2,
        shadowRadius:5,
        //Android
        elevation:2,
      },
      header:{
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'semibold'
      },
      body:{
        fontSize: 17,
      },
      Mail:{
        fontWeight: 'bold',
      }
});
export default ReachOut
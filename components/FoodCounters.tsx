import React, { useState } from "react";
import {View,Text,ScrollView,StatusBar} from 'react-native';

function FoodCounters(){

    return(
        <>
        <StatusBar />
        <ScrollView>
            <View>
                <Text style={{fontSize:30,marginTop:10,marginHorizontal:10}}>Office Eats</Text>
            </View>
            <View>
                <View>
                    <Text>
                        We Serve Happiness
                    </Text>
                </View>
                <View>
                    
                </View>
            </View>
        </ScrollView>
        </>
    );
}
export default FoodCounters
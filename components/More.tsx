import React from 'react';
import { Button, Text, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text>
          Shiva Reddy
        </Text>
        <Text>
          View complete profile
        </Text>
      </View>
      <Text>Working</Text>
      <Button title="AboutUs" onPress={() => navigation.navigate('AboutUs')} />
      <View>
        <Text>AboutScreen</Text>
        <Button title="FAQ" onPress={() => navigation.navigate('FAQ')} />
      </View>
    </View>
  );
};

export default HomeScreen;
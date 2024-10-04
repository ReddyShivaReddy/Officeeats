import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text>
          Shiva Reddy
        </Text>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Text>View complete profile</Text>
        </Pressable>
      </View>
      <View>
        <Text>Working</Text>
        <Button title="AboutUs" onPress={() => navigation.navigate('AboutUs')} />
      </View>
      <View>
        <Text>AboutScreen</Text>
        <Button title="FAQ" onPress={() => navigation.navigate('FAQ')} />
      </View>
    </View>
  );
};

export default HomeScreen;
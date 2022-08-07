import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  return(
    <View>
      <Text style={{fontFamily: 'Lobster-Regular'}}>
        Hello World
      </Text>
      <Ionic name="play" style={{fontSize: 20}} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
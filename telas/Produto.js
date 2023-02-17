import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Produto = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>VVS</Text>
        <Text>Via Vale Sistemas</Text>
  
      </View>
    );
  }

  export default Produto;
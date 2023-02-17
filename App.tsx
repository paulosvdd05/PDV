import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Button, View, Image, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Es from './estilos/Estilo'
import Produto from './telas/Produto'
import Venda from './telas/Venda'
import Consulta from "./telas/Consulta";




const Guias = createBottomTabNavigator();


export default function App2() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#2D3A4A'}/>
      <Guias.Navigator screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          bottom: 5
        },
        tabBarActiveTintColor: '#5879EA',

        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          height: 75,
          borderRadius: 15,
          backgroundColor: '#2B3B4A',

          ...Es.shadow
        }


      }}
      >

        <Guias.Screen name="Venda" component={Venda} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image style={{ width: 35, height: 35, tintColor: focused ? '#5879EA' : '#748c94' }}
                source={require('./assets/icones/sale.png')}
              />
            </View>
          )
        }} />

        <Guias.Screen name="Produto" component={Produto} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image style={{ width: 35, height: 35, tintColor: focused ? '#5879EA' : '#748c94' }}
                source={require('./assets/icones/list.png')}
              />
            </View>
          )
        }} />

        <Guias.Screen name="Consulta" component={Consulta} options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image style={{ width: 35, height: 35, tintColor: focused ? '#5879EA' : '#748c94' }}
                source={require('./assets/icones/lup.png')}
              />
            </View>
          )
        }} />


      </Guias.Navigator>



    </NavigationContainer>
  )
}

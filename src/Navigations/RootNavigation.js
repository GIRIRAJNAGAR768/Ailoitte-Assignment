import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from '../Screens/HomeScreen'
import OrdersScreen from '../Screens/OrdersScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import CartScreen from '../Screens/CartScreen'


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="home"
                tabBarOptions={{
                    activeTintColor: '#0878b4',
                    labelStyle: {
                        fontSize: 12,
                        margin: 0,
                        padding: 0,
                        fontWeight:'bold'
                      },
                }}>
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={navigationOptions({title: 'Home',iconName:'home'})}
                />
                <Tab.Screen
                    name="orders"
                    component={OrdersScreen}
                    options={navigationOptions({title: 'Orders',iconName:'clipboard-list'})}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesScreen}
                    options={navigationOptions({title: 'Favorites',iconName:'heart-outline'})}
                />

                <Tab.Screen
                    name="myCart"
                    component={CartScreen}
                    options={navigationOptions({title: 'My Cart',iconName:'cart'})}   
                />
            </Tab.Navigator>

        </NavigationContainer>
    );

   function navigationOptions({title,iconName}){
        return{
            tabBarLabel: title,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name={iconName} color={color} size={size} />
            ),
            // tabBarBadge: 3,
        }
    }

}

export default MyTabs

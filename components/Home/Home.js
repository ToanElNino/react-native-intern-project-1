/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet} from 'react-native';
import CityNewsScreen from '../userCityNotification/CityNewsScreen';
import UserScreen from '../UserScreen/UserScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          showLabel: false,
          headerShown: false,
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/Home/User.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#3A5BB3' : '#a9a9a9',
                }}
              />
              <Text
                style={{color: focused ? '#3A5BB3' : '#a9a9a9', fontSize: 12}}>
                User
              </Text>
            </View>
          ),
          title: 'User', //Set Header Title
          headerStyle: {
            backgroundColor: '#3A5BB3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Tab.Screen
        name="City news"
        component={CityNewsScreen}
        options={{
          showLabel: false,
          headerShown: false,
          // tabBarStyle: {display: 'none'},
          tabBarIcon: ({focused}) => (
            <View style={styles.tabContainer}>
              <Image
                source={require('../../assets/Home/CityNews.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#3A5BB3' : '#a9a9a9',
                }}
              />
              <Text
                style={{color: focused ? '#3A5BB3' : '#a9a9a9', fontSize: 12}}>
                CITY NEWS
              </Text>
            </View>
          ),
          title: 'City news', //Set Header Title
          headerStyle: {
            backgroundColor: '#3A5BB3', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {alignItems: 'center', justifyContent: 'center', top: 0},
  tabImage: {},
});

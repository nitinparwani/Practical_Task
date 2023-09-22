import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import AdditionalServicesScreen from '../screens/AdditionalServicesScreen/AdditionalServicesScreen';
import PurchasedServicesScreen from '../screens/PurchasedServicesScreen/PurchasedServicesScreen';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

export default function TopTabBarNavigator() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      }}>
      <Tab.Screen
        name="PurchasedServicesScreen"
        component={PurchasedServicesScreen}
        options={{
          tabBarLabel: 'PURCHASED SERVICES',
          tabBarLabelStyle: {
            fontFamily: fonts.Poppins_SemiBold,
          },
        }}
      />
      <Tab.Screen
        name="AdditionalServicesScreen"
        component={AdditionalServicesScreen}
        options={{
          tabBarLabel: 'ADDITIONAL SERVICES',
          tabBarLabelStyle: {
            fontFamily: fonts.Poppins_SemiBold,
          },
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    backgroundColor: colors.white,
    zIndex: 1,
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.golden,
  },
});

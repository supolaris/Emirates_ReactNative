import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReturnScreen from '../screens/ReturnScreen';
import OneWayScreen from '../screens/OneWayScreen';
import MultiCityScreen from '../screens/MultiCityScreen';

import {EmiratesColors} from '../assets/constants/AppColors';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export function BookTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="OneWayScreen"
      screenOptions={{
        swipeEnabled: true,
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.OrignalBlack,
              }}>
              Return
            </Text>
          ),
        }}
        name="ReturnScreen"
        component={ReturnScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.OrignalBlack,
              }}>
              One Way
            </Text>
          ),
        }}
        name="OneWayScreen"
        component={OneWayScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 16,
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.OrignalBlack,
              }}>
              Multi-City
            </Text>
          ),
        }}
        name="MultiCityScreen"
        component={MultiCityScreen}
      />
    </Tab.Navigator>
  );
}

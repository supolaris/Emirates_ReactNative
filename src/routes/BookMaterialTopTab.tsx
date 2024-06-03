import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReturnScreen from '../screens/ReturnScreen';
import OneWayScreen from '../screens/OneWayScreen';
import MultiCityScreen from '../screens/MultiCityScreen';

import {EmiratesColors} from '../assets/constants/AppColors';

const Tab = createMaterialTopTabNavigator();

export function BookTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: EmiratesColors.PrimaryRed,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Return',
        }}
        name="ReturnScreen"
        component={ReturnScreen}
      />
      <Tab.Screen
        options={{
          title: 'One way',
        }}
        name="OneWayScreen"
        component={OneWayScreen}
      />
      <Tab.Screen
        options={{
          title: 'Multi-city',
        }}
        name="MultiCityScreen"
        component={MultiCityScreen}
      />
    </Tab.Navigator>
  );
}

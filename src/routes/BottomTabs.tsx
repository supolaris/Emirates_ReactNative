import {View, Text, TouchableOpacity, Modal} from 'react-native';

import {EmiratesColors} from '../assets/constants/AppColors';

import FlightScreenIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from 'react-native-vector-icons/Foundation';
import PlaneIcon from 'react-native-vector-icons/Ionicons';
//airplane
import TagIcon from 'react-native-vector-icons/AntDesign';
//tag
import UserIcon from 'react-native-vector-icons/FontAwesome5';
//user
import MoreIcon from 'react-native-vector-icons/Octicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import SkywardsScreen from '../screens/SkywardsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  const onFlightScreenIconPressed = () => {
    console.log('onFlightScreenIconPressed');
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingVertical: 10,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 14,
            color: EmiratesColors.PrimaryRed,
          },
          tabBarIcon: ({focused}) => (
            <HomeIcon
              name="home"
              size={30}
              style={{
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.Black,
              }}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'Search flights',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: EmiratesColors.Black,
            fontSize: 20,
            fontWeight: '400',
          },
          headerRight: () => (
            <TouchableOpacity
              style={{paddingRight: 10}}
              onPress={onFlightScreenIconPressed}>
              <FlightScreenIcon
                name="dots-horizontal"
                size={25}
                color={EmiratesColors.PrimaryRed}
              />
            </TouchableOpacity>
          ),
          tabBarLabel: 'Book',
          tabBarLabelStyle: {
            fontSize: 14,
            color: EmiratesColors.PrimaryRed,
          },
          tabBarIcon: ({focused}) => (
            <PlaneIcon
              name="airplane"
              size={30}
              style={{
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.Black,
              }}
            />
          ),
        }}
        name="BookScreen"
        component={BookScreen}
      />
      <Tab.Screen
        options={{
          title: 'My Trips',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: EmiratesColors.Black,
            fontSize: 20,
            fontWeight: '400',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: EmiratesColors.PrimaryRed,
          },
          tabBarIcon: ({focused}) => (
            <TagIcon
              name="tag"
              size={28}
              style={{
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.Black,
              }}
            />
          ),
        }}
        name="MyTripsScreen"
        component={MyTripsScreen}
      />
      <Tab.Screen
        options={{
          //title: 'More',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: EmiratesColors.Black,
            fontSize: 20,
            fontWeight: '400',
          },
          tabBarLabel: 'Skywards',
          tabBarLabelStyle: {
            fontSize: 14,
            color: EmiratesColors.PrimaryRed,
          },
          tabBarIcon: ({focused}) => (
            <UserIcon
              name="user-alt"
              size={25}
              style={{
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.Black,
              }}
            />
          ),
        }}
        name="SkywardsScreen"
        component={SkywardsScreen}
      />
      <Tab.Screen
        options={{
          title: 'More',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: EmiratesColors.Black,
            fontSize: 20,
            fontWeight: '400',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: EmiratesColors.PrimaryRed,
          },
          tabBarIcon: ({focused}) => (
            <MoreIcon
              name="three-bars"
              size={25}
              style={{
                color: focused
                  ? EmiratesColors.PrimaryRed
                  : EmiratesColors.Black,
              }}
            />
          ),
        }}
        name="MoreScreen"
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
}

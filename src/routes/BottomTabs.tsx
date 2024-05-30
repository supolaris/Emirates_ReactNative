import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import SkywardsScreen from '../screens/SkywardsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="BookScreen" component={BookScreen} />
      <Tab.Screen name="MyTripsScreen" component={MyTripsScreen} />
      <Tab.Screen name="SkywardsScreen" component={SkywardsScreen} />
      <Tab.Screen name="MoreScreen" component={MoreScreen} />
    </Tab.Navigator>
  );
}

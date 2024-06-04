import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabs} from './BottomTabs';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import MyTripsScreen from '../screens/MyTripsScreen';
import SkywardsScreen from '../screens/SkywardsScreen';
import MoreScreen from '../screens/MoreScreen';
import LoginForm from '../components/ui/LoginForm';

const Stack = createNativeStackNavigator();

export function NativeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Home_Screen" component={HomeScreen} />
        <Stack.Screen name="Book_Screen" component={BookScreen} />
        <Stack.Screen name="MyTrips_Screen" component={MyTripsScreen} />
        <Stack.Screen name="Skywards_Screen" component={SkywardsScreen} />
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="More_Screen" component={MoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

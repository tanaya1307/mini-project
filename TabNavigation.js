import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import Navigation from './Navigation';
import Home from './screens/Home';

function HomeScreen() {
    return (
      <Navigation/>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
const Tab = createBottomTabNavigator();

function MyTabs() {
  const screenOptions={
    headerShown:false,
  }
  return (
    <NavigationContainer>
    <Tab.Navigator   screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
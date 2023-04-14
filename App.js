import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Menu from "./screens/menu"
import InfoItem from './screens/infoItem';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Menu" component={Menu} />
       <Stack.Screen name="InfoItem" component={InfoItem} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

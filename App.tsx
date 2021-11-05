import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import PdfView from './app/components/PdfView';
import InfoList from './app/screens/InfoList';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Welcome from './app/screens/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './app/screens/Chat';
import Home from './app/screens/Home';
import CameraModule from './app/components/CameraModule';

const Stack = createNativeStackNavigator();

import { UserProvider } from './app/context/UserContext'

const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator initialRouteName='Start'>
            <Stack.Screen name="Home" component={InfoList} options={{ headerShown: false }}/>
            <Stack.Screen name="View" component={PdfView} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
            <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
            <Stack.Screen name="Camera" component={CameraModule} options={{ headerShown: false }}/>
            <Stack.Screen name="Start" component={Home} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer> 
    </UserProvider>
  );
};

export default App;

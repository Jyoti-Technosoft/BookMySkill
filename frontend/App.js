// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, IconRegistry } from '@ui-kitten/components';
// import {EvaIconsPack} from '@ui-kitten/eva-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Component/SplashScreen';
import TaskerListScreen from './Component/TaskerListScreen';
import Registration from './Component/Registrations';
import Login from './Component/Login';
import Category from './Component/Category';
import ProfileSettings from './Component/ProfileSettings';
import TrainerList from './Component/TrainerList';
// import Login from './Component/Login';
// import Registration from './Component/Registration';

// const Stack = createStackNavigator();

// const IconUsage = () => (
//   <Icon name="code-outline" fill="#ff6721" />
// );

const App = () => {
  return (
    <>
      {/* <IconRegistry icons={EvaIconsPack} /> */}
      <ApplicationProvider {...eva} theme={eva.light}>
        <SplashScreen />
        {/* <Category /> */}
        {/* <ProfileSettings /> */}
        {/* <TaskerListScreen /> */}
        {/* <Registration /> */}
        {/* <Login/> */}
        {/* <TrainerList/> */}
        {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileSettings} />
          <Stack.Screen name="Registration" component={Registration} /> 
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer> */}
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;

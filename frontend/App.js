// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, IconRegistry } from '@ui-kitten/components';
// import {EvaIconsPack} from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Component/SplashScreen';
import TaskerListScreen from './Component/TaskerListScreen';
import Registration from './Component/Registrations';
import Login from './Component/Login';
import Category from './Component/Category';
import ProfileSettings from './Component/ProfileSettings';
import TrainerList from './Component/TrainerList';
import BookingPage from './Component/BookingPage';
import SearchVenues from './Component/SearchVenues';
import BookingDate from './Component/BookingDate';
import ReviewConfirm from './Component/ReviewConfirm';

const Stack = createStackNavigator();

// const IconUsage = () => (
//   <Icon name="code-outline" fill="#ff6721" />
// );

const App = () => {
  return (
    <>
      {/* <IconRegistry icons={EvaIconsPack} /> */}
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <SplashScreen /> */}
        {/* <SearchVenues/> */}
        {/* <BookingDate /> */}
        {/* <ReviewConfirm /> */}
        {/* <Category /> */}
        {/* <ProfileSettings /> */}
        {/* <TaskerListScreen /> */}
        {/* <Registration /> */}
        {/* <Login/> */}
        {/* <TrainerList/> */}
        {/* <BookingPage/> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileSetting" component={ProfileSettings} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
            <Stack.Screen name="TrainerList" component={TrainerList} options={{ headerShown: false }} />
            <Stack.Screen name="SearchVenues" component={SearchVenues} options={{ headerShown: false }} />
            <Stack.Screen name="BookingDate" component={BookingDate} options={{ headerShown: false }} />
            <Stack.Screen name="BookingPage" component={BookingPage} options={{ headerShown: false }} />
            <Stack.Screen name="TaskerList" component={TaskerListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ReviewConfirm" component={ReviewConfirm} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;

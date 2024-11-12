import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Component/SplashScreen';
import TaskerList from './Component/TaskerList';
import Registration from './Component/Registrations';
import Login from './Component/Login';
import Category from './Component/Category';
import ProfileSettings from './Component/ProfileSettings';
import TrainerList from './Component/TrainerList';
import BookingPage from './Component/BookingPage';
import SearchVenues from './Component/SearchVenues';
import BookingDate from './Component/BookingDate';
import ReviewConfirm from './Component/ReviewConfirm';
import TaskDetails from './Component/TaskDetails';
import TaskCompleted from './Component/TaskCompleted';
import TaskerRating from './Component/TaskerRating';
import TaskerProfile from './Component/TaskerProfile';
import Profile from './Component/Profile';
import PaymentPage from './Component/PaymentPage';
import BottomNavBar from './ReusableComponents/BottomNavBar';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const App = () => {
  const [activeTab, setActiveTab] = useState('');

  const isBottomNavScreen = (routeName) => {
    return ['Category', 'TaskCompleted', 'Profile'].includes(routeName);
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <SplashScreen /> */}
        {/* <SearchVenues/> */}
        {/* <BookingDate /> */}
        {/* <ReviewConfirm /> */}
        {/* <Category /> */}
        {/* <ProfileSettings /> */}
        {/* <TaskerList /> */}
        {/* <Registration /> */}
        {/* <Login/> */}
        {/* <TrainerList/> */}
        {/* <BookingPage/> */}
        {/* <TaskDetails/> */}
        {/* <TaskCompleted/> */}
        {/* <TaskerRating/> */}
        {/* <TaskerProfile/> */}
        {/* <Profile/> */}
        {/* <PaymentPage/> */}

        <NavigationContainer
          ref={navigationRef}
          onStateChange={() => {
            const route = navigationRef.getCurrentRoute();
            if (route) setActiveTab(route.name);
          }}
        >
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
            <Stack.Screen name="TaskerList" component={TaskerList} options={{ headerShown: false }} />
            <Stack.Screen name="ReviewConfirm" component={ReviewConfirm} options={{ headerShown: false }} />
            <Stack.Screen name="TaskCompleted" component={TaskCompleted} options={{ headerShown: false }} />
            <Stack.Screen name="TaskerProfile" component={TaskerProfile} options={{ headerShown: false }} />
            <Stack.Screen name="PaymentPage" component={PaymentPage} options={{ headerShown: false }} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ headerShown: false }} />
            <Stack.Screen name="TaskerRating" component={TaskerRating} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          </Stack.Navigator>
          {/* Show BottomNavBar only on specific screens, after Splash has navigated away */}
          {activeTab && activeTab !== 'Splash' && isBottomNavScreen(activeTab) && (
            <BottomNavBar navigation={navigationRef} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
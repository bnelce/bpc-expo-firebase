import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import {Button } from 'react-native';
import Dashboard from '../pages/Dashboard';
import OcoList from '../pages/OcoList';
import OcoAddForm from '../pages/OcoAddForm';
import OcoEditForm from '../pages/OcoEditForm';
import Profile from '../pages/Profile';
import Feed from '../pages/Feed';


const AppTabs = createBottomTabNavigator();


const AppRoutes = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Home" component={Dashboard} options={{ headerTitle: 'Dashboard' }} options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-home" color={color}  />,
        }}/>
    {/*<AppTabs.Screen name="Feed" component={Feed} options={{ headerTitle: 'Feed' }} options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-home" color={color}  />,
        }}/>    */}
    <AppTabs.Screen 
      name="Ocorrências" 
      component={TabTwoNavigator}       
      options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-flame" color={color}  />,
        }}/>
    {/*<AppTabs.Screen name="Notificações" component={Profile} options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-notifications" color={color}  />,
        }}/>*/}
    <AppTabs.Screen name="Perfil" component={Profile} options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-person" color={color}  />,
        }}/>
    <AppTabs.Screen name="Sobre" component={Profile} options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-alert" color={color}  />,
        }}/>
  </AppTabs.Navigator>
)

export default AppRoutes;

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen
        name="OcoList"
        component={OcoList}
      />
      <TabTwoStack.Screen
        name="OcoAddForm"
        component={OcoAddForm}       
      />
      <TabTwoStack.Screen
        name="OcoEditForm"
        component={OcoEditForm}        
      />
    </TabTwoStack.Navigator>
  );
}


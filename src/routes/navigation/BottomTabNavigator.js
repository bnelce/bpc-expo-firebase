import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Dashboard from '../../pages/Dashboard';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-home" />,
        }}
      />
      <BottomTab.Screen
        name="Ocorrências"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-clipboard" />,
        }}
      />
      <BottomTab.Screen
        name="Extintores"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="ios-flame"  />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={Dashboard}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="OcoList"
        component={Dashboard}
        options={{ headerTitle: 'Lista de Ocorrências' }}
      />
      <TabTwoStack.Screen
        name="OcoForm"
        component={Dashboard}
        options={{ headerTitle: 'Nova Ocorrência' }}
      />
    </TabTwoStack.Navigator>
  ); 
}


  const TabThreeStack = createStackNavigator();

  function TabThreeNavigator() {
    return (
      <TabThreeStack.Navigator>
        <TabTwoStack.Screen
          name="ExtList"
          component={Dashboard}
          options={{ headerTitle: 'Lista de Inspeções' }}
        />
        <TabTwoStack.Screen
          name="ExtForm"
          component={Dashboard}
          options={{ headerTitle: 'Nova Inspeção' }}
        />
      </TabThreeStack.Navigator>
    );
  }
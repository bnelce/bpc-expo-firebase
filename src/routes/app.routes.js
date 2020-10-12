import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Dashboard2 from '../pages/Dashboard2';
import OcoList from '../pages/OcoList';
import OcoAddForm from '../pages/OcoAddForm';


const AppTabs = createBottomTabNavigator();


const AppRoutes = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Home" component={Dashboard} options={{ headerTitle: 'Dashboard' }}/>
    <AppTabs.Screen name="Ocorrências" component={TabTwoNavigator} />
  </AppTabs.Navigator>
)

export default AppRoutes;


const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="OcoList"
        component={OcoList}
        options={{ headerTitle: 'Lista de Ocorrências' }}
      />
      <TabTwoStack.Screen
        name="OcoAddForm"
        component={OcoAddForm}
        options={{ headerTitle: 'Adicionar Ocorrência' }}
      />
    </TabTwoStack.Navigator>
  );
}


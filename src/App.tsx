import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CallLog from './screens/CallLog';
import Contacts from './screens/Contacts';

const Tab = createBottomTabNavigator();



function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CallLog" component={CallLog} />
        <Tab.Screen name="Contacts" component={Contacts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

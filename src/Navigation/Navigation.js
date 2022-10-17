import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
const Stack = createStackNavigator();
const StackNavigation = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  useEffect(()=>{

  },[isLoggedIn])
  return (
    <Stack.Navigator initialRouteName="Login">
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
export default StackNavigation;

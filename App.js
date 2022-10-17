/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/Navigation/rootNavigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/Redux/rootReducer';
import StackNavigation from './src/Navigation/Navigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import Login from './src/Screens/Login';
import { colors } from './src/Library/Colors';
const store = createStore(rootReducer);
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaView  edges={['top']}
          style={{flex: 1, backgroundColor: colors.primary_color}}>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary_color} />
          <StackNavigation/>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

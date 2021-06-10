import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import {Profile} from '../Screens';

export default function MainStack(Stack) {
  return (
    /*********WRAPPING IN FRAGMENTS TO ADD MORE SCREENS IN FUTURE */
    <>
      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
}

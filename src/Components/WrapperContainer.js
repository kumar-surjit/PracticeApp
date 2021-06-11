import React from 'react';
import {View, Text, SafeAreaView, StatusBar, Platform} from 'react-native';
import colors from '../styles/colors';

export default function WrapperContainer({
  children,
  statusBarColor = colors.white,
  barStyle = Platform.OS == 'ios' ? 'dark-content' : 'light-content',
  bgColor = colors.white,
  containerStyle = {},
}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{...containerStyle, flex: 1, backgroundColor: bgColor}}>
        {children}
      </View>
    </SafeAreaView>
  );
}

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import imagePath from '../constants/imagePath';

export default function HeaderComp({
  headerText,
  isLeftBack = false,
  customLeft = () => {},
  customRight,
  containerStyle = {},
}) {
  return (
    <View style={[containerStyle, styles.containerStyle]}>
      <View style={{flex: 0.2}}>
        {isLeftBack ? <Image source={imagePath.backButton} /> : customLeft()}
      </View>
      <View style={{flex: 0.8}}>
        <Text style={styles.textStyle}>{headerText}</Text>
      </View>
      <View style={{flex: 0.2}}>{customRight && customRight()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

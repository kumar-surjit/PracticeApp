import React, {Component} from 'react';
import {Text, View} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';

export default class Profile extends Component {
  render() {
    return (
      <WrapperContainer statusBarColor={colors.black}>
        <Text> this is children </Text>
      </WrapperContainer>
    );
  }
}

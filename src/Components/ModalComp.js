import React, {Component} from 'react';
import {Modal, View, Pressable, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default class ModalComp extends Component {
  render() {
    const {visibility, closeModal = () => {}, children} = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
        onRequestClose={closeModal}>
        <View style={styles.centeredView}>{children}</View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.blackOpacity50,
  },
});

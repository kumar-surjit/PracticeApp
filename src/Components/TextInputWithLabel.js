import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
export default function TextInputWithLabel({
  placeholderText = '',
  placeholderTextColor,
  containerStyle = {},
  pattern = '',
  type,
  updateValidation,
  updateState,
  isMobileField,
  customLeft,
  cca2,
  callingCode = '',
  onCountryChange,
  textInputStyle = {},
}) {
  const [countryPickerModalVisible, setCountryPickerModalVisible] =
    useState(false);

  const _onCountryChange = data => {
    setCountryPickerModalVisible(true);
    onCountryChange(data);
  };

  const _openCountryPicker = () => {
    setCountryPickerModalVisible(true);
  };

  const _onCountryPickerModalClose = () => {
    setCountryPickerModalVisible(false);
  };

  const onChangeText = val => {
    if (pattern) {
      const regex = new RegExp(pattern, 'i');
      updateValidation(type, regex.test(val), val);
      return;
    }
    updateState(type, val);
  };
  return (
    <View style={[containerStyle, styles.containerStyle]}>
      {isMobileField ? (
        <TouchableOpacity onPress={_openCountryPicker}>
          <Text style={{marginRight: 8}}>+{callingCode}</Text>
        </TouchableOpacity>
      ) : (
        customLeft && customLeft()
      )}
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={onChangeText}
      />
      {countryPickerModalVisible && (
        <CountryPicker
          cca2={cca2}
          visible={countryPickerModalVisible}
          withFlagButton={false}
          withFilter
          onClose={_onCountryPickerModalClose}
          onSelect={_onCountryChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 30,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputStyle: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

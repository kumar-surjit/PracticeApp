import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import colors from '../../styles/colors';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import ModalComp from '../../Components/ModalComp';
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';

export default class Profile extends Component {
  state = {
    calendarDate: '1998/10/30',
    dob: '30/10/1998',
    visibility: false,
    isEmailValid: false,
    email: '',
    cca2: 'AF',
    callingCode: '93',
    profilePicPath: '',
  };

  openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        this.setState({profilePicPath: image.path});
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggleModalVisibility = () => {
    const {visibility} = this.state;
    let statusBarColor = !visibility ? colors.blackOpacity50 : colors.white;
    this.setState({visibility: !visibility, statusBarColor: statusBarColor});
  };

  selectDate = date => {
    const {visibility, calendarDate} = this.state;
    if (date != calendarDate) {
      let dobDate = moment(new Date(date)).format('DD-MM-YYYY');
      let statusBarColor = !visibility ? colors.blackOpacity50 : colors.white;
      this.setState({
        calendarDate: date,
        dob: dobDate,
        visibility: !visibility,
        statusBarColor: statusBarColor,
      });
    }
    return;
  };

  updateState = (type, newValue) => {
    let newState = {};
    newState[type] = newValue;
    this.setState({...newState});
  };

  updateValidation = (type, newValue, val) => {
    switch (type) {
      case 'email':
        this.setState({isEmailValid: newValue, email: val});
        break;
    }
  };

  onCountryChange = data => {
    this.setState({cca2: data.cca2, callingCode: data.callingCode[0]});
    console.log(data);
  };

  render() {
    const {
      calendarDate,
      visibility,
      dob,
      email,
      isEmailValid,
      callingCode,
      cca2,
      profilePicPath,
    } = this.state;
    return (
      <WrapperContainer
        statusBarColor={colors.black}
        containerStyle={styles.containerStyle}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <HeaderComp headerText="PROFILE" />
          <TouchableOpacity
            style={styles.profilePicStyle}
            onPress={this.openGallery}>
            <Image
              source={
                profilePicPath ? {uri: profilePicPath} : imagePath.profile
              }
              style={styles.profileImageStyle}
            />
          </TouchableOpacity>
          <TextInputWithLabel
            placeholderText="Enter full name"
            placeholderTextColor={colors.blackOpacity50}
          />
          <View style={styles.dobContainer}>
            <View style={styles.borderStyle}>
              <Text style={styles.dobTextStyle}>DOB: {dob}</Text>
              <TouchableOpacity onPress={this.toggleModalVisibility}>
                <Image
                  source={imagePath.ic_calendar}
                  style={styles.crossImageStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TextInputWithLabel
              placeholderText="Enter email"
              placeholderTextColor={colors.blackOpacity50}
              containerStyle={{marginTop: 16}}
              type="email"
              pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}"
              updateValidation={this.updateValidation}
              // updateState={this.updateState}
            />
            <View style={styles.validationStyle}>
              {email ? (
                isEmailValid ? (
                  <Image
                    source={imagePath.ic_correct}
                    style={styles.crossImageStyle}
                  />
                ) : (
                  <Image
                    source={imagePath.ic_cross_red}
                    style={styles.crossImageStyle}
                  />
                )
              ) : (
                <View />
              )}
            </View>
          </View>
          <TextInputWithLabel
            placeholderText="Enter mobile number"
            placeholderTextColor={colors.blackOpacity50}
            containerStyle={{
              marginTop: 16,
              paddingHorizontal: 16,
            }}
            textInputStyle={{paddingHorizontal: 0}}
            isMobileField={true}
            cca2={cca2}
            callingCode={callingCode}
            onCountryChange={this.onCountryChange}
          />
          <TextInput
            placeholder="About me"
            placeholderTextColor={colors.blackOpacity50}
            multiline={true}
            textAlignVertical="top"
            style={styles.textAreaStyle}
          />
          <ModalComp
            visibility={visibility}
            closeModal={this.toggleModalVisibility}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.modalBox}>
                <HeaderComp
                  containerStyle={{marginTop: 16}}
                  customRight={() => (
                    <TouchableOpacity
                      onPress={this.toggleModalVisibility}
                      style={styles.crossIconStyle}>
                      <Image
                        source={imagePath.ic_cross_red}
                        // tintColor={colors.black}
                        style={styles.crossImageStyle}
                      />
                    </TouchableOpacity>
                  )}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={styles.headingStyle}>Select DOB</Text>
                  <DatePicker
                    onSelectedChange={date => {
                      console.log(date);
                      this.selectDate(date);
                    }}
                    mode="calendar"
                    current={calendarDate}
                    selected={calendarDate}
                    options={{
                      textHeaderColor: colors.black,
                      textDefaultColor: colors.black,
                      selectedTextColor: colors.white,
                      mainColor: colors.darkBlue,
                      textSecondaryColor: colors.blackOpacity50,
                      borderColor: colors.white,
                    }}
                  />
                </ScrollView>
              </View>
            </View>
          </ModalComp>
        </KeyboardAwareScrollView>
      </WrapperContainer>
    );
  }
}

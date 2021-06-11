import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  profilePicStyle: {
    alignItems: 'center',
    marginVertical: 32,
  },
  profileImageStyle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  modalBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingBottom: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: 0.85 * height,
  },
  headingStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  validationStyle: {position: 'absolute', right: 6, top: 20},
  crossImageStyle: {
    width: 24,
    height: 24,
  },
  crossIconStyle: {flexWrap: 'wrap-reverse', marginRight: 16},
  dobContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  dobTextStyle: {
    fontSize: 16,
    marginRight: 16,
  },
  borderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 30,
    borderWidth: 0.5,
  },
  textAreaStyle: {
    height: 160,
    marginTop: 16,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

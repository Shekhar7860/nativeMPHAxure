import {StyleSheet} from 'react-native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import {WHITE, APP_MAIN_COLOR, BLACK, PINK_COLOR} from '../constants/colors';

const BADGE_WIDTH_HEIGHT = 8;
const INPUT_BOX_HEIGHT = 40;
const BUTTON_HEIGHT = 50;
const USER_IMAGE_SIZE = 50;
const ADD_NOTE_BTN = 40;
const NOTES_TEXT_PADDING = 25;
const YES_NO_BTN_MARGIN = 15;
const PARENT_PADDING = 20;
const USER_ROW_PADDING = 10;
const ADD_NEW_APPOINTMENT_TEXT_SIZE = 12;
const MENU_IMAGE_SIZE = 20;
const BUTTON_GROUP_CONTAINER_HEIGHT = 42;

const commonStyles = ScaledSheet.create({
  ketboardAvoidingContainer: {
    flex: 1,
  },
   appNmetextStyle: {
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : moderateScale(30)
  },
  inputBoxStyle: {
    marginBottom: moderateScale(40),
    height: moderateScale(15),
    borderRadius: 25,
  },
  scroll: {flexGrow: 1},
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 0,
    paddingHorizontal: 0
  },
  checkBoxText: {
    color: WHITE,
    fontWeight: null,
    fontSize: moderateScale(14),
  },
  forgotPassText: {
    fontSize: moderateScale(14),
  },
   checkBoxText: {
    fontWeight: null,
    fontSize: moderateScale(8),
  },
  otherButtons: {
    backgroundColor: PINK_COLOR,
    height: 60,
    flex: null,
    marginBottom: 10,
    borderRadius: 30,
    width : '80%',
    alignSelf : 'center'
  },
  otherButtonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  icon : {
    width : moderateScale(20),
    height : moderateScale(20)
  }

});

export default commonStyles;

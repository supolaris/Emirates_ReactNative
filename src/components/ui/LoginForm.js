import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Switch,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import PrimaryTextInput from '../common/PrimaryTextInput';
import {EmiratesColors} from '../../assets/constants/AppColors';
import SenaryHeading from '../common/SenaryHeading';

import CheckBox from '@react-native-community/checkbox';
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import QuaternaryButton from '../common/buttons/QuaternaryButton';
import TertiaryHeader from '../common/headers/TertiaryHeader';

import DatePicker from 'react-native-date-picker';

import {useNavigation} from '@react-navigation/native';

const TitleFlastListData = [
  {
    title: 'Mrs',
  },
  {
    title: 'Undisclosed',
  },
  {
    title: 'Mr',
  },
  {
    title: 'Miss',
  },
  {
    title: 'Ms',
  },
];

const LoginForm = () => {
  const navigation = useNavigation();
  const [enableDateView, setEnableDateView] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [titleSelect, setTitleSelect] = useState('Select *');
  const [enableTitleSelect, setEnableTitleSelect] = useState(false);

  const [date, setDate] = useState(new Date());
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onCrossIconPress = () => {
    navigation.goBack();
  };

  const onSelectDatePressed = () => {
    setEnableDateView(!enableDateView);
  };

  const renderTitle = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setTitleSelect(item.title)}
        style={{alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            color: EmiratesColors.OrignalBlack,
          }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TertiaryHeader
        screenTitle="Join Emirates Skywards"
        onCrossIconPress={onCrossIconPress}
      />
      <StatusBar
        barStyle="dark-content"
        backgroundColor={EmiratesColors.White}
      />

      <ScrollView style={styles.container}>
        <View style={styles.formView}>
          <View style={{paddingHorizontal: 15}}>
            <SenaryHeading headingTitle="If you have a membership number to activate, please enter it below" />
            <View style={{paddingTop: 15, paddingBottom: 10}}>
              <PrimaryTextInput showIcon="false" placeholder="Membership" />
            </View>
          </View>

          {/* Strip one */}
          <View style={styles.strip}>
            <Text style={styles.stripTitleText}>Title</Text>
            <Text
              onPress={() => setEnableTitleSelect(!enableTitleSelect)}
              style={styles.stripSelectText}>
              {titleSelect}
            </Text>
          </View>

          {enableTitleSelect === true ? (
            <View style={{paddingVertical: 30}}>
              <FlatList
                data={TitleFlastListData}
                renderItem={renderTitle}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ) : null}

          <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
            <PrimaryTextInput
              showIcon="true"
              placeholder="First name (as per passport)"
            />
            <PrimaryTextInput
              showIcon="true"
              placeholder="Last name (as per passport)"
            />
            <PrimaryTextInput showIcon="true" placeholder="Email address" />
            <PrimaryTextInput showIcon="true" placeholder="Password" />
          </View>

          {/* Strip two */}
          <View style={styles.strip}>
            <Text style={styles.stripTitleText}>Date of birth</Text>
            <Text onPress={onSelectDatePressed} style={styles.stripSelectText}>
              {date.toLocaleDateString()}
            </Text>
          </View>
          {enableDateView === true ? (
            <View style={styles.dateSelectView}>
              <DatePicker
                date={date}
                mode="date"
                onDateChange={selectedDate => {
                  setDate(selectedDate);
                }}
              />
            </View>
          ) : null}

          {/* Strip three */}
          <View style={[styles.strip, {borderTopWidth: 0.5}]}>
            <Text style={styles.stripTitleText}>Country</Text>
            <Text style={styles.stripSelectText}>Select *</Text>
          </View>

          {/* check box strip */}
          <View style={styles.checkBoxStrip}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={[styles.stripTitleText, {fontSize: 13}]}>
                I have read and agree to the terms and conditions
              </Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <ArrowIcon
                name="keyboard-arrow-right"
                size={25}
                color={EmiratesColors.PrimaryRed}
              />
            </View>
          </View>

          {/* Toogle button strip */}
          <View style={styles.toogleButtonStrip}>
            <Text style={[styles.stripTitleText, {fontSize: 13}]}>
              Sign up for emirates newsletter
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              thumbColor={isEnabled ? EmiratesColors.PrimaryRed : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          {/* button View */}
          <View style={styles.buttonView}>
            <QuaternaryButton titleText="Join now" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: EmiratesColors.PrimaryGray,
  },
  formView: {
    paddingTop: 20,
  },
  strip: {
    backgroundColor: EmiratesColors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  stripTitleText: {
    fontSize: 16,
    color: EmiratesColors.OrignalBlack,
  },
  stripSelectText: {
    fontSize: 16,
    color: EmiratesColors.PrimaryRed,
  },
  dateSelectView: {
    alignItems: 'center',
    backgroundColor: EmiratesColors.White,
  },
  checkBoxStrip: {
    backgroundColor: EmiratesColors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 15,
  },
  toogleButtonStrip: {
    backgroundColor: EmiratesColors.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonView: {
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 30,
  },
});

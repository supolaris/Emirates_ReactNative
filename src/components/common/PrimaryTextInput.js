import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import StarIcon from 'react-native-vector-icons/Entypo';

const PrimaryTextInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={EmiratesColors.Black}
        placeholder={props.placeholder}
      />
      {props.showIcon === 'true' ? (
        <View style={styles.iconView}>
          <StarIcon
            style={styles.icon}
            name="star"
            size={12}
            color={EmiratesColors.PrimaryRed}
          />
        </View>
      ) : null}
    </View>
  );
};

export default PrimaryTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  iconView: {
    justifyContent: 'center',
  },
  icon: {},
});

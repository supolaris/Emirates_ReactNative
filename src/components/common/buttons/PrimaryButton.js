import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

const PrimaryButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>{props.titleText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    backgroundColor: EmiratesColors.PrimaryRed,
    paddingVertical: 10,
    borderRadius: 5,
  },
  touchableText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

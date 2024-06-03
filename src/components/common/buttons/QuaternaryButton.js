import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

const QuaternaryButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>{props.titleText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuaternaryButton;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: EmiratesColors.SecondaryGray,
  },
  touchableText: {
    fontSize: 18,
    color: EmiratesColors.TertiaryGray,
    textAlign: 'center',
  },
});

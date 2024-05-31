import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

const TertiaryButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>{props.titleText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TertiaryButton;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    borderRadius: 5,
  },
  touchableText: {
    fontSize: 18,
    color: EmiratesColors.PrimaryRed,
    textAlign: 'center',
  },
});

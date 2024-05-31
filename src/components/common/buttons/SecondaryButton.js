import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

const SecondaryButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.touchableText}>{props.titleText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {},
  touchable: {
    //backgroundColor: EmiratesColors.PrimaryRed,
    borderWidth: 1,
    borderColor: EmiratesColors.Black,
    paddingVertical: 10,
    borderRadius: 5,
  },
  touchableText: {
    fontSize: 18,
    color: EmiratesColors.Black,
    textAlign: 'center',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

const SecondaryHeading = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{props.headingTitle}</Text>
    </View>
  );
};

export default SecondaryHeading;

const styles = StyleSheet.create({
  container: {},
  headingText: {
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    color: EmiratesColors.GrayText,
  },
});

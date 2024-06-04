import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

const SenaryHeading = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{props.headingTitle}</Text>
    </View>
  );
};

export default SenaryHeading;

const styles = StyleSheet.create({
  container: {},
  headingText: {
    fontSize: 16,
    color: EmiratesColors.OrignalBlack,
  },
});

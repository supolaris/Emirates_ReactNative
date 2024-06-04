import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

const QuaternaryHeading = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{props.headingTitle}</Text>
    </View>
  );
};

export default QuaternaryHeading;

const styles = StyleSheet.create({
  container: {},
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: EmiratesColors.OrignalBlack,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

const QuinaryHeading = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{props.headingTitle}</Text>
    </View>
  );
};

export default QuinaryHeading;

const styles = StyleSheet.create({
  container: {},
  headingText: {
    // textAlign: 'center',
    fontSize: 18,
    //textTransform: 'uppercase',
    color: EmiratesColors.GrayText,
  },
});

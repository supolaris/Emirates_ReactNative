import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import ToFromFlightSelect from '../common/ToFromFlightSelect';

const Return = () => {
  return (
    <View style={styles.container}>
      <ToFromFlightSelect 
      selectDateHeadingText = "Travel Dates"
      selectDateText = "Select Dates"
      block2Heading="Passengers and cabin class"
      block2HeadingText="4 Passengers in Firtst Class"
      />
    </View>
  );
};

export default Return;

const styles = StyleSheet.create({
  container: {},
});

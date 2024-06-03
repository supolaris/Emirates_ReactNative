import React from 'react';
import {View, StyleSheet} from 'react-native';

import ToFromFlightSelect from '../common/ToFromFlightSelect';

const OneWay = () => {
  return (
    <View style={styles.container}>
      <ToFromFlightSelect
        selectDateHeadingText="Travel Date"
        selectDateText="Select Date"
        block2Heading="Passengers and cabin class"
        block2HeadingText="4 Passengers in Firtst Class"
      />
    </View>
  );
};

export default OneWay;

const styles = StyleSheet.create({
  container: {},
});

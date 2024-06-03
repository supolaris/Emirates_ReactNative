import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import ToFromFlightSelect from '../common/ToFromFlightSelect';

const Return = () => {
  return (
    <View style={styles.container}>
      <ToFromFlightSelect />
    </View>
  );
};

export default Return;

const styles = StyleSheet.create({
  container: {},
});

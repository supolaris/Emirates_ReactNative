import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

import PlaneIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PrimaryHeader = props => {
  return (
    <View style={styles.container}>
      <PlaneIcon
        style={styles.icon}
        name="airplane"
        size={25}
        color={EmiratesColors.PrimaryRed}
      />
      <Text style={styles.headerTitleText}>{props.headerTitle}</Text>
    </View>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: EmiratesColors.White,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: 10,
  },
  headerTitleText: {
    fontSize: 20,
    color: EmiratesColors.PrimaryRed,
    fontFamily: 'Emirates Medium',
  },
});

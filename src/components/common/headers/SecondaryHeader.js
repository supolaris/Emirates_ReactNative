import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

import FlightScreenIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SecondaryHeader = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 2}}>
        <Text style={styles.screenTitleText}>{props.screenTitle}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.iconTouchable} onPress={props.onPress}>
          <FlightScreenIcon
            style={{paddingRight: 20}}
            name="dots-horizontal"
            size={25}
            color={EmiratesColors.PrimaryRed}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondaryHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screenTitleText: {
    textAlign: 'center',
    fontSize: 20,
    color: EmiratesColors.Black,
    fontWeight: '400',
  },
  iconTouchable: {},
});

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {EmiratesColors} from '../../../assets/constants/AppColors';

import CrossIcon from 'react-native-vector-icons/Feather';

const TertiaryHeader = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity style={styles.iconTouchable} onPress={props.onPress}>
          <CrossIcon
            onPress={props.onCrossIconPress}
            style={{paddingLeft: 20}}
            name="x"
            size={22}
            color={EmiratesColors.PrimaryRed}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 3}}>
        <Text style={styles.screenTitleText}>{props.screenTitle}</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}></View>
    </View>
  );
};

export default TertiaryHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 15,
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

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/MaterialIcons';

const PrimaryInfoTouchable = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titleArrowView}>
        <Text style={styles.titleText}>{props.titleText}</Text>
        <ArrowIcon
          name="arrow-forward-ios"
          color={EmiratesColors.PrimaryGray}
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryInfoTouchable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 15,
  },
  titleArrowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: EmiratesColors.PrimaryGray,
  },
  titleText: {
    fontSize: 18,
    color: EmiratesColors.Black,
  },
});

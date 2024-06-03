import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import ArrowIcons from 'react-native-vector-icons/Ionicons';
import PrimaryHeading from './PrimaryHeading';

const ToFromFlightSelect = props => {
  return (
    <View style={styles.container}>
      <View style={styles.fromToView}>
        <Pressable style={styles.fromView}>
          <Text style={styles.toFromText}>From</Text>
          <Text style={styles.toFromCityCodeText}>ABJ</Text>
          <Text numberOfLines={1} style={styles.toFromCityText}>
            Abidjan
          </Text>
        </Pressable>

        <Pressable style={styles.toView}>
          <Text style={styles.toFromText}>To</Text>
          <Text style={styles.toFromCityCodeText}>SGN</Text>
          <Text numberOfLines={1} style={styles.toFromCityText}>
            Abidjan
          </Text>
        </Pressable>
      </View>
      <Pressable style={styles.iconView}>
        <ArrowIcons
          style={styles.icon}
          name="swap-horizontal"
          size={20}
          color={EmiratesColors.OrignalBlack}
        />
      </Pressable>

      <Pressable style={styles.travelDatesView}>
        <PrimaryHeading headingTitle={props.selectDateHeadingText}/>
        <Text style={styles.selectDatesText}>{props.selectDateText}</Text>
      </Pressable>

      <Pressable style={styles.classView}>
        <PrimaryHeading headingTitle={props.block2Heading} />
        <Text style={styles.classText}>{props.block2HeadingText}</Text>
      </Pressable>
    </View>
  );
};

export default ToFromFlightSelect;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    elevation: 5,
    borderRadius: 5,
    overflow: 'scroll',
  },
  fromToView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  fromView: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  toFromText: {
    fontSize: 18,
    color: EmiratesColors.GrayText,
  },
  toFromCityCodeText: {
    width: '60%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: EmiratesColors.Black,
  },
  toFromCityText: {
    textAlign: 'center',
    width: '60%',
    fontSize: 18,
    color: EmiratesColors.Black,
  },
  iconView: {
    position: 'absolute',
    left: 170,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 0.5,
    padding: 8,
    backgroundColor: EmiratesColors.White,
    elevation: 8,
  },
  icon: {},
  toView: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    borderLeftWidth: 0.2,
  },

  //View 2
  travelDatesView: {
    backgroundColor: EmiratesColors.White,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  selectDatesText: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 5,
  },
  classView: {
    backgroundColor: EmiratesColors.White,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  classText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 5,
    color: EmiratesColors.OrignalBlack,
  },
});

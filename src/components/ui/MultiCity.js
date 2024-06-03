import React from 'react';
import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import PrimaryHeading from '../common/PrimaryHeading';
import ToFromFlightSelect from '../common/ToFromFlightSelect';

import QuinaryButton from '../common/buttons/QuinaryButton';

const MultiCity = () => {
  return (
    <ScrollView>
      <View style={[styles.headingView, {paddingTop: 15, paddingBottom: 0}]}>
        <PrimaryHeading headingTitle="Flight 1" />
      </View>
      <ToFromFlightSelect
        selectDateHeadingText="Travel Date"
        selectDateText="Select Date"
        block2Heading="Cabin class"
        block2HeadingText="Firtst Class"
      />

      {/* View 2 */}
      <View style={styles.headingView}>
        <PrimaryHeading headingTitle="Flight 2" />
      </View>
      <ToFromFlightSelect
        selectDateHeadingText="Travel Date"
        selectDateText="Select Date"
        block2Heading="Cabin class"
        block2HeadingText="Economy Class"
      />

      <View style={styles.buttonView}>
        <QuinaryButton titleText="Add a flight" />
      </View>

      <View style={styles.passengersHeadingView}>
        <PrimaryHeading headingTitle="Passengers" />
      </View>

      <Pressable style={styles.passengersView}>
        <PrimaryHeading headingTitle="passengers" />
        <Text style={styles.passengersViewText}>4 passengers</Text>
      </Pressable>
    </ScrollView>
  );
};

export default MultiCity;

const styles = StyleSheet.create({
  container: {},
  headingView: {
    paddingLeft: 13,
    paddingVertical: 10,
  },
  buttonView: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  passengersHeadingView: {
    paddingLeft: 13,
    paddingBottom: 15,
  },
  passengersView: {
    backgroundColor: EmiratesColors.White,
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 25,
    elevation: 5,
    borderRadius: 5,
    overflow: 'scroll',
    marginHorizontal: 10,
  },
  passengersViewText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 5,
    color: EmiratesColors.OrignalBlack,
  },
});

import React from 'react';
import {View} from 'react-native';

import ToFromFlightSelect from '../common/ToFromFlightSelect';

const Return = props => {
  return (
    <View>
      <ToFromFlightSelect
        onPress={props.onPress}
        selectDateHeadingText="Travel Dates"
        selectDateText="Select Dates"
        block2Heading="Passengers and cabin class"
        block2HeadingText="4 Passengers in Firtst Class"
      />
    </View>
  );
};

export default Return;

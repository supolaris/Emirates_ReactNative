import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import ArrowIcons from 'react-native-vector-icons/Ionicons';
import PrimaryHeading from './PrimaryHeading';

import {CalendarList} from 'react-native-calendars';

import CrossIcon from 'react-native-vector-icons/Feather';

const ToFromFlightSelect = props => {
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedData, setSelectedDate] = useState('');

  const onDateModalHandle = () => {
    setDateModalVisible(!dateModalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Date Modal */}
      <Modal visible={dateModalVisible}>
        <View style={styles.dateModalOuterView}>
          <View style={styles.dateModalInnerView}>
            <View style={styles.headingView}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 1}}>
                  <Text style={styles.headingText}>Travel dates</Text>
                </View>
                <TouchableOpacity
                  onPress={onDateModalHandle}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <CrossIcon
                    style={{paddingRight: 20}}
                    name="x"
                    size={25}
                    color={EmiratesColors.PrimaryRed}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.departReturnMainView}>
                <View style={styles.departingView}>
                  <Text style={styles.departReturnText}>Departing</Text>
                  <Text style={styles.selectDateText}>Select date</Text>
                </View>
                <View style={styles.returningView}>
                  <Text style={styles.departReturnText}>Returning</Text>
                  <Text style={styles.selectDateText}>Select date</Text>
                </View>
              </View>
            </View>

            <View style={styles.calanderView}>
              <CalendarList
                pastScrollRange={0}
                futureScrollRange={12}
                onDayPress={day => {
                  setSelectedDate(day.dateString);
                  setDateModalVisible(!dateModalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

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

      <Pressable onPress={onDateModalHandle} style={styles.travelDatesView}>
        <PrimaryHeading headingTitle={props.selectDateHeadingText} />
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
  dateModalOuterView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
  dateModalInnerView: {
    flex: 1,
  },
  headingView: {
    backgroundColor: EmiratesColors.White,
    borderBottomWidth: 0.5,
    borderBottomColor: EmiratesColors.GrayText,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: EmiratesColors.Black,
    paddingVertical: 15,
  },
  departReturnMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  departingView: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 0.2,
    borderRightColor: EmiratesColors.GrayText,
  },
  returningView: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 0.2,
    borderLeftColor: EmiratesColors.GrayText,
  },
  departReturnText: {
    fontSize: 20,
    color: EmiratesColors.Black,
    fontWeight: 'bold',
  },
  selectDateText: {
    fontSize: 16,
    color: EmiratesColors.Black,
    paddingVertical: 10,
  },

  calanderView: {
    flex: 1,
  },

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

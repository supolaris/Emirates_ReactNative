import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import ArrowIcons from 'react-native-vector-icons/Ionicons';
import PrimaryHeading from './PrimaryHeading';

import {CalendarList} from 'react-native-calendars';

import CrossIcon from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import CircleIcon from 'react-native-vector-icons/FontAwesome';
import SelectedCircleIcon from 'react-native-vector-icons/FontAwesome';

import QuinaryHeading from './QuinaryHeading';
import QuaternaryHeading from './QuaternaryHeading';
import {CabinClassData} from '../../assets/data/CabinClassData';
import PrimaryButton from './buttons/PrimaryButton';
import SecondaryButton from './buttons/SecondaryButton';
import TertiaryButton from './buttons/TertiaryButton';

const ToFromFlightSelect = props => {
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedData, setSelectedDate] = useState('');

  const [totalPerson, setTotalPerson] = useState(0);
  const [adultCounter, setAdultCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [infantCounter, setInfantCounter] = useState(0);

  const [selectedCabinClass, setSelectCabinClass] = useState('Economy Class');

  const [passengerModalVisible, setPassengerModalVisible] = useState(false);

  const onDateModalHandle = () => {
    setDateModalVisible(!dateModalVisible);
  };

  //counter useStates
  const onAdultDecrease = () => {
    if (adultCounter == 0) {
      return adultCounter;
    } else {
      setAdultCounter(adultCounter - 1);
    }
  };

  const onAdultIncrease = () => {
    if (adultCounter == 8) {
      return adultCounter;
    } else {
      setAdultCounter(adultCounter + 1);
    }
  };

  const onChildrenDecrease = () => {
    if (childrenCounter == 0) {
      return childrenCounter;
    } else {
      setChildrenCounter(childrenCounter - 1);
    }
  };

  const onChildrenIncrease = () => {
    if (childrenCounter == 8) {
      return childrenCounter;
    } else {
      setChildrenCounter(childrenCounter + 1);
    }
  };

  const onInfantDecrease = () => {
    if (infantCounter == 0) {
      return infantCounter;
    } else {
      setInfantCounter(infantCounter - 1);
    }
  };

  const onInfantIncrease = () => {
    if (infantCounter == 8) {
      return infantCounter;
    } else {
      setInfantCounter(infantCounter + 1);
    }
  };

  const renderCabinClass = ({item}) => {
    return (
      <Pressable
        onPress={() => setSelectCabinClass(item.ClassType)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        {selectedCabinClass == item.ClassType ? (
          <CircleIcon
            style={{paddingRight: 15}}
            name="dot-circle-o"
            size={25}
            color={EmiratesColors.PrimaryRed}
          />
        ) : (
          <CircleIcon
            style={{paddingRight: 15}}
            name="circle-o"
            size={25}
            color={EmiratesColors.GrayText}
          />
        )}

        <QuaternaryHeading headingTitle={item.ClassType} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* Date Modal */}
      <Modal
        visible={dateModalVisible}
        onRequestClose={() => setDateModalVisible(false)}>
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
                  <Text style={styles.selectDateText}>{selectedData}</Text>
                </View>
                <View style={styles.returningView}>
                  <Text style={styles.departReturnText}>Returning</Text>
                  <Text style={styles.selectDateText}>{selectedData}</Text>
                </View>
              </View>
            </View>

            <View style={styles.calanderView}>
              <CalendarList
                markedDates={{
                  [selectedData]: {
                    selected: true,
                  },
                }}
                pastScrollRange={0}
                futureScrollRange={12}
                onDayPress={day => {
                  setSelectedDate(day.dateString);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Passengers and class Modal */}
      <Modal
        visible={passengerModalVisible}
        onRequestClose={() => setPassengerModalVisible(false)}>
        <View style={styles.dateModalOuterView}>
          <View
            style={[
              styles.dateModalInnerView,
              {backgroundColor: 'white', paddingHorizontal: 15},
            ]}>
            <View style={styles.headingView}>
              <Text style={styles.headingText}>Passengers and cabin class</Text>
            </View>
            <View style={styles.primaryHeadingView}>
              <PrimaryHeading headingTitle="Passengers" />
            </View>

            <View style={{borderBottomWidth: 0.5, paddingBottom: 5}}>
              {/* ButotnCounter 1 */}
              <View style={styles.titleButtonCounterView}>
                <View style={styles.titleView}>
                  <QuaternaryHeading headingTitle="Adults" />
                  <QuinaryHeading headingTitle="Age 12+" />
                </View>
                <View style={styles.counterView}>
                  <MinusIcon
                    onPress={onAdultDecrease}
                    name="minuscircleo"
                    size={30}
                    color={
                      adultCounter == 0
                        ? EmiratesColors.GrayText
                        : EmiratesColors.OrignalBlack
                    }
                  />
                  <Text style={styles.counterText}>{adultCounter}</Text>
                  <PlusIcon
                    onPress={onAdultIncrease}
                    name="pluscircleo"
                    size={30}
                    color={
                      adultCounter == 8
                        ? EmiratesColors.GrayText
                        : EmiratesColors.OrignalBlack
                    }
                  />
                </View>
              </View>

              {/* ButotnCounter 2 */}
              <View style={styles.titleButtonCounterView}>
                <View style={styles.titleView}>
                  <QuaternaryHeading headingTitle="Children" />
                  <QuinaryHeading headingTitle="Age 2-11" />
                </View>
                <View style={styles.counterView}>
                  <MinusIcon
                    onPress={onChildrenDecrease}
                    name="minuscircleo"
                    size={30}
                    color={
                      childrenCounter == 0
                        ? EmiratesColors.GrayText
                        : EmiratesColors.OrignalBlack
                    }
                  />
                  <Text style={styles.counterText}>{childrenCounter}</Text>
                  <PlusIcon
                    onPress={onChildrenIncrease}
                    name="pluscircleo"
                    size={30}
                    color={
                      childrenCounter == 8
                        ? EmiratesColors.GrayText
                        : EmiratesColors.OrignalBlack
                    }
                  />
                </View>
              </View>

              {/* ButotnCounter 3 */}
              <View style={styles.titleButtonCounterView}>
                <View style={styles.titleView}>
                  <QuaternaryHeading headingTitle="Infant" />
                  <QuinaryHeading headingTitle="Age under 2, on lap" />
                </View>
                <View style={styles.counterView}>
                  <MinusIcon
                    onPress={onInfantDecrease}
                    name="minuscircleo"
                    size={30}
                    color={
                      infantCounter == 0
                        ? EmiratesColors.GrayText
                        : EmiratesColors.OrignalBlack
                    }
                  />
                  <Text style={styles.counterText}>{infantCounter}</Text>
                  <PlusIcon
                    onPress={onInfantIncrease}
                    name="pluscircleo"
                    size={30}
                    color={
                      infantCounter == 8
                        ? EmiratesColors.GrayText
                        : EmiratesColors.OrignalBlack
                    }
                  />
                </View>
              </View>
            </View>

            <View style={styles.planeTypeView}>
              <View style={styles.headingText}>
                <PrimaryHeading headingTitle="Cabin class" />
              </View>

              <View>
                <FlatList
                  data={CabinClassData}
                  renderItem={renderCabinClass}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                  paddingTop: 30,
                }}>
                <PrimaryButton
                  onPress={() => setPassengerModalVisible(false)}
                  titleText="Confirm"
                />
              </View>
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

      <Pressable
        onPress={() => setPassengerModalVisible(!passengerModalVisible)}
        style={styles.classView}>
        <PrimaryHeading headingTitle={props.block2Heading} />
        <Text style={styles.classText}>{props.block2HeadingText}</Text>
      </Pressable>
    </View>
  );
};

export default ToFromFlightSelect;

const styles = StyleSheet.create({
  // Passengers Modal
  primaryHeadingView: {
    paddingTop: 20,
  },
  titleButtonCounterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  titleView: {},
  counterView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 30,
    color: EmiratesColors.OrignalBlack,
    paddingHorizontal: 25,
  },

  // Calendar Date Modal
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
    color: EmiratesColors.PrimaryRed,
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

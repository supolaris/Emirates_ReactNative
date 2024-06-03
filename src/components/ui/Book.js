import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

import {BookTopTabs} from '../../routes/BookMaterialTopTab';
import QuaternaryButton from '../common/buttons/QuaternaryButton';
import {EmiratesColors} from '../../assets/constants/AppColors';

import ModalRowText from '../common/ModalRowText';
import SecondaryHeader from '../common/headers/SecondaryHeader';

import {CalendarList} from 'react-native-calendars';

import CrossIcon from 'react-native-vector-icons/Feather';

const Book = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateModalVisible, setDateModalVisible] = useState(true);
  const [selectedData, setSelectedDate] = useState('');

  const onPress = () => {
    console.log('hello');
  };

  const onShowModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDateModalHandle = () => {
    setDateModalVisible(!dateModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SecondaryHeader onPress={onShowModal} screenTitle="Search Flights" />

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
                }}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Text Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOuterView}>
          <View style={styles.modalInnerView}>
            <ModalRowText onPress={onPress} text="Redeem Miles" />
            <ModalRowText onPress={onPress} text="Promotion code" />
            <ModalRowText onPress={onPress} text="Hoels" />
            <ModalRowText onPress={onPress} text="Car rental" />
            <ModalRowText onPress={onPress} text="Airport transfers" />
            <ModalRowText onPress={onPress} text="Tour & Attractions" />
          </View>
        </View>
      </Modal>

      <BookTopTabs />

      <View style={styles.buttonView}>
        <QuaternaryButton titleText="Search" />
      </View>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    backgroundColor: EmiratesColors.White,
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 20,
    borderTopWidth: 0.2,
  },

  //Date Modal
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
  },
  selectDateText: {
    fontSize: 16,
    color: EmiratesColors.Black,
    paddingVertical: 10,
  },

  calanderView: {
    flex: 1,
  },

  //Modal Styling
  modalOuterView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.1)',
  },
  modalInnerView: {
    backgroundColor: 'white',
    paddingBottom: 20,
    backgroundColor: 'white',
  },
});

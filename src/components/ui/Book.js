import React, {useState} from 'react';
import {View, StyleSheet, Modal, StatusBar} from 'react-native';

import {BookTopTabs} from '../../routes/BookMaterialTopTab';
import QuaternaryButton from '../common/buttons/QuaternaryButton';
import {EmiratesColors} from '../../assets/constants/AppColors';

import ModalRowText from '../common/ModalRowText';
import SecondaryHeader from '../common/headers/SecondaryHeader';

const Book = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    console.log('hello');
  };

  const onShowModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SecondaryHeader onPress={onShowModal} screenTitle="Search Flights" />

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

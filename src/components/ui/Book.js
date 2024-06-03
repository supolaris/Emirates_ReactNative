import React from 'react';
import {View, StyleSheet} from 'react-native';

import {BookTopTabs} from '../../routes/BookMaterialTopTab';
import QuaternaryButton from '../common/buttons/QuaternaryButton';
import {EmiratesColors} from '../../assets/constants/AppColors';

const Book = () => {
  return (
    <View style={styles.container}>
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
    // backgroundColor: 'red',
  },
  buttonView: {
    backgroundColor: EmiratesColors.White,
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 20,
    borderTopWidth: 0.2,
  },
});

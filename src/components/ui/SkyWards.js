import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import PrimaryButton from '../common/buttons/PrimaryButton';
import SecondaryButton from '../common/buttons/SecondaryButton';
import TertiaryButton from '../common/buttons/TertiaryButton';
import LinearGradient from 'react-native-linear-gradient';

const SkyWards = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../assets/images/loginCoverImage.jpg')}
        />
      </View>

      <View style={styles.buttonsView}>
        <PrimaryButton titleText="Login" />

        <View style={{paddingTop: 15, paddingBottom: 20}}>
          <SecondaryButton titleText="Join Skywards" />
        </View>
        <TertiaryButton titleText="Why Join Skywards?" />
      </View>
    </View>
  );
};

export default SkyWards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    flex: 3,
  },
  image: {
    overflow: 'scroll',
    width: '100%',
    height: '100%',
  },
  buttonsView: {
    flex: 1,
    marginTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

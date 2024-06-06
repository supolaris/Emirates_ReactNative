import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import PrimaryButton from '../common/buttons/PrimaryButton';
import SecondaryButton from '../common/buttons/SecondaryButton';
import TertiaryButton from '../common/buttons/TertiaryButton';

import {useNavigation} from '@react-navigation/native';

const SkyWards = () => {
  const navigation = useNavigation();

  const joinSkywards = () => {
    navigation.navigate('LoginForm');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" />

      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../assets/images/loginCoverImage.jpg')}
        />
      </View>

      <View style={styles.buttonsView}>
        <PrimaryButton titleText="Login" />

        <View style={{paddingTop: 15, paddingBottom: 20}}>
          <SecondaryButton onPress={joinSkywards} titleText="Join Skywards" />
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

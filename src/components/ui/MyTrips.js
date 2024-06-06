import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import LinearGradient from 'react-native-linear-gradient';
import PrimaryButton from '../common/buttons/PrimaryButton';
import SecondaryButton from '../common/buttons/SecondaryButton';
import TertiaryHeading from '../common/TertiaryHeading';
import TertiaryButton from '../common/buttons/TertiaryButton';

const MyTrips = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={{flex: 3.5, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={require('../../assets/images/city.png')}
          style={styles.backgroundImage}>
          {/* <Image
            style={styles.image}
            source={require('../../assets/images/baggageTripImage.png')}
          /> */}
        </ImageBackground>
      </View>

      <View style={styles.buttonsView}>
        <PrimaryButton titleText="Add a booking" />

        <View style={{paddingTop: 15, paddingBottom: 20}}>
          <SecondaryButton titleText="Book a flight" />
        </View>
      </View>
    </View>
  );
};

export default MyTrips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    //flex: 3.5,
    // opacity: 0.2,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // overflow: 'scroll',
    width: 100,
    height: 100,
    opacity: 1,
  },
  buttonsView: {
    borderWidth: 1,

    justifyContent: 'flex-end',
    flex: 0.7,
    paddingTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});

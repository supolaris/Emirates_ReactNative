import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import PrimaryHeader from '../common/headers/PrimaryHeader';
import PrimaryHeading from '../common/PrimaryHeading';
import FeatureCard from '../common/FeatureCard';

import {HomeScreenInformationSwiper} from '../../assets/data/HomeScreenInformationSwiper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = () => {
  const [planeType, setPlaneType] = useState('Emirates');

  const onEmiratesPressed = () => {
    setPlaneType('Emirates');
  };
  const onBoeingPressed = () => {
    setPlaneType('Boeing');
  };

  const RenderInformationData = ({item}) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.renderImageView}>
          {/* <Image
            style={styles.renderImage}
            resizeMode="cover"
            source={item.Image}
          /> */}
          <Text>hello world</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{paddingHorizontal: 0}}>
        <PrimaryHeader headerTitle="Welcome Suleman" />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.featureCardView}>
          <PrimaryHeading headingTitle="The Emirates Experience" />
          <FeatureCard
            image={require('../../assets/images/fruits.jpg')}
            title="Dining"
          />
          <FeatureCard
            image={require('../../assets/images/perosnOnPlane.jpg')}
            title="Inflight entertainment"
          />
        </View>
        <View style={styles.planeTypesView}>
          <PrimaryHeading headingTitle="Explore our fleet in 3d" />

          <View style={styles.toogleTouchAbleView}>
            <TouchableOpacity
              onPress={onEmiratesPressed}
              style={[
                styles.touchableEmirates,
                {
                  backgroundColor:
                    planeType == 'Emirates' ? 'white' : EmiratesColors.white,
                },
              ]}>
              <Text
                style={[
                  styles.toogleText,
                  {
                    color:
                      planeType == 'Emirates'
                        ? EmiratesColors.Black
                        : EmiratesColors.GrayText,
                  },
                ]}>
                Emirates A380
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onBoeingPressed}
              style={[
                styles.touchableEmirates,
                {
                  backgroundColor:
                    planeType == 'Boeing' ? 'white' : EmiratesColors.white,
                },
              ]}>
              <Text
                style={[
                  styles.toogleText,
                  {
                    color:
                      planeType == 'Boeing'
                        ? EmiratesColors.Black
                        : EmiratesColors.GrayText,
                  },
                ]}>
                Boeing 777
              </Text>
            </TouchableOpacity>
          </View>
          {planeType == 'Emirates' ? (
            <View>
              <Text>Emirates</Text>
            </View>
          ) : (
            <View>
              <Text>Boeing</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: EmiratesColors.PrimaryGray,
  },
  infromationView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  featureCardView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  planeTypesView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: EmiratesColors.White,
  },
  toogleTouchAbleView: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: EmiratesColors.PrimaryGray,
  },
  touchableEmirates: {
    flex: 1,
    margin: 2,
    borderRadius: 5,
    paddingVertical: 5,
    // backgroundColor:
    //   planeType == 'Emirates'
    //     ? EmiratesColors.White
    //     : EmiratesColors.PrimaryRed,
  },
  touchableBoeing: {
    flex: 1,
    margin: 2,
    borderRadius: 5,
    paddingVertical: 5,
    // backgroundColor: 'blue',
  },
  toogleText: {
    textAlign: 'center',
    fontSize: 20,
    color: EmiratesColors.Black,
  },
});

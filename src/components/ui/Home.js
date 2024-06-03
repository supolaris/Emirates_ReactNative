import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import PrimaryHeader from '../common/headers/PrimaryHeader';
import PrimaryHeading from '../common/PrimaryHeading';
import FeatureCard from '../common/FeatureCard';

import SwiperFlatList from 'react-native-swiper-flatlist';

import {HomeEmiratesCarouselData} from '../../assets/data/HomeCarouselData';
import {HomeBoeingCarouselData} from '../../assets/data/HomeCarouselData';

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
      <View style={styles.renderInformationContainer}>
        <Image
          source={item.Image}
          style={[styles.renderInformationBackgroundImage]}
        />
        <View style={styles.informationTextView}>
          <Text style={styles.informationTitleText}>{item.Title}</Text>
          <Text style={styles.informationDescriptionText}>
            {item.Description}
          </Text>
        </View>
      </View>
    );
  };

  const renderHomeCarousel = ({item}) => {
    return (
      <View style={styles.renderCarouselContainer}>
        <ImageBackground
          source={item.image}
          style={styles.renderCarouselBackgroundImage}>
          <View style={styles.renderCarouselTextView}>
            <Text style={styles.renderCarouselText}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={EmiratesColors.White}
      />
      <View style={{paddingHorizontal: 0, paddingBottom: 5}}>
        <PrimaryHeader headerTitle="Welcome Suleman" />
      </View>

      <ScrollView style={styles.container}>
        <View>
          <View style={{paddingVertical: 10, paddingLeft: 10}}>
            <PrimaryHeading headingTitle="Important information" />
          </View>
          <View style={{marginHorizontal: 10}}>
            <SwiperFlatList
              data={HomeScreenInformationSwiper}
              renderItem={RenderInformationData}
              autoplay
              autoplayLoop
              showPagination
              snapToInterval={width}
              disableGesture={true}
              autoplayDelay={2}
              pagingEnabled={true}
              autoplayLoopKeepAnimation={true}
              paginationActiveColor="black"
            />
          </View>
        </View>
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
            <View style={{paddingTop: 20, paddingBottom: 30}}>
              <SwiperFlatList
                data={HomeEmiratesCarouselData}
                renderItem={renderHomeCarousel}
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={1}
                autoplayLoopKeepAnimation={true}
                disableGesture={false}
              />
            </View>
          ) : (
            <View style={{paddingTop: 20, paddingBottom: 30}}>
              <SwiperFlatList
                data={HomeBoeingCarouselData}
                renderItem={renderHomeCarousel}
                autoplay
                autoplayDelay={3}
                autoplayLoop
                index={1}
                //showPagination
                autoplayLoopKeepAnimation={true}
                disableGesture={false}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  renderInformationContainer: {
    width: width,
  },
  renderInformationBackgroundImage: {
    height: 200,
    width: width,
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  informationTextView: {
    flex: 1,
    justifyContent: 'flex-end',
    borderLeftWidth: 8,
    borderLeftColor: EmiratesColors.PrimaryRed,
    marginBottom: 30,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  informationTitleText: {
    fontSize: 20,
    color: EmiratesColors.Black,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  informationDescriptionText: {
    fontSize: 18,
    color: EmiratesColors.Black,
  },

  //main container
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
  },
  touchableBoeing: {
    flex: 1,
    margin: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  toogleText: {
    textAlign: 'center',
    fontSize: 20,
    color: EmiratesColors.Black,
  },

  // Home Carousel
  renderCarouselContainer: {
    marginHorizontal: 30,
  },
  renderCarouselBackgroundImage: {
    height: 400,
    width: 300,
    overflow: 'hidden',
    borderRadius: 10,
  },
  renderCarouselTextView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  renderCarouselText: {
    fontSize: 30,
    color: EmiratesColors.White,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

import PrimaryHeading from '../common/PrimaryHeading';
import SecondaryHeading from '../common/SecondaryHeading';
import PrimaryInfoTouchable from '../common/PrimaryInfoTouchable';

import {TravelEssentialsData} from '../../assets/data/TravelEssentialsData';
import FeatureCard from '../common/FeatureCard';

const More = () => {
  const renderTravelEssentialsData = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderFlatlistContainer}>
        <View style={styles.renderImageView}>
          <Image style={styles.renderImage} source={item.Icon} />
        </View>
        <Text style={styles.renderTitleText}>{item.Title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <PrimaryHeading headingTitle="Travel Essentials" />
      <View style={styles.flatListView}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={TravelEssentialsData}
          renderItem={renderTravelEssentialsData}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.aboutEmiratesView}>
        <PrimaryHeading headingTitle="Emirates" />
        <View style={{marginVertical: 15}}>
          <PrimaryInfoTouchable titleText="Send feedback" />
          <PrimaryInfoTouchable titleText="Legal" />
          <PrimaryInfoTouchable titleText="Rules and notices" />
          <PrimaryInfoTouchable titleText="About Emirates" />
        </View>
      </View>

      <View>
        <PrimaryHeading headingTitle="Settings" />
        <View style={{marginVertical: 15}}>
          <PrimaryInfoTouchable titleText="About Emirates" />
        </View>
      </View>

      <View style={{paddingBottom: 20}}>
        <FeatureCard
          image={require('../../assets/images/fruits.jpg')}
          title="Enjoy Low Deposits and 24/7 support"
          description="Start exploring"
        />
      </View>

      <View style={{paddingBottom: 30}}>
        <SecondaryHeading headingTitle="App version 12.13.0" />
      </View>
    </ScrollView>
  );
};

export default More;

const styles = StyleSheet.create({
  renderFlatlistContainer: {
    backgroundColor: 'white',
    width: '50%',
    alignItems: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: EmiratesColors.PrimaryGray,
  },
  renderImageView: {
    paddingBottom: 10,
  },
  renderImage: {
    height: 50,
    width: 50,
  },
  renderTitleText: {
    fontSize: 16,
    color: EmiratesColors.Black,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: EmiratesColors.PrimaryGray,
  },
  flatListView: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  aboutEmiratesView: {},
});

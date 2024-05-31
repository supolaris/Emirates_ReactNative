import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {EmiratesColors} from '../../assets/constants/AppColors';

const FeatureCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={props.image} resizeMode="cover" />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  imageView: {},
  image: {
    height: 150,
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  titleView: {
    backgroundColor: EmiratesColors.White,
    paddingVertical: 15,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    elevation: 8,
  },
  titleText: {
    fontSize: 18,
    color: EmiratesColors.Black,
    textAlign: 'center',
  },
});

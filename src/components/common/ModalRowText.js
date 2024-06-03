import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import {EmiratesColors} from '../../assets/constants/AppColors';

const ModalRowText = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

export default ModalRowText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: EmiratesColors.White,
    paddingVertical: 15,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: EmiratesColors.GrayText,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    paddingLeft: 10,
    color: EmiratesColors.Black,
  },
});

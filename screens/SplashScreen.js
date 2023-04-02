import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './Styles';

export default function SplashScreen() {
  return (
    <View style={styles.container} >
      <Ionicons name="restaurant" size={70} color="black" style={styles.splashIcon} />
      <Image source={{uri:"https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg"}} style={styles.splashDiscountImage} resizeMode={'contain'} ></Image>
    </View>
  );
}

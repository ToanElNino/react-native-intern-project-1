import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const SmartSocialBanner = () => {
  return (
    <View>
      <Image
        style={styles.bannerImage}
        source={require('../../assets/Home/smartSocailScreen/bannerImage.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bannerImage: {
    // marginTop: 5,
    resizeMode: 'repeat',
    height: 180,
    width: 330,
  },
});

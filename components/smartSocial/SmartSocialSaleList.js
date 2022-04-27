import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const SmartSocialSaleList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text>Khuyến mãi</Text>
        <Text>Xem tất cả</Text>
      </View>
      <Image
        style={styles.txtInputButtonImage}
        source={require('../../assets/Home/smartSocailScreen/menu.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtInputButtonImage: {
    // marginTop: 5,
    height: 10,
    width: 10,
    // resizeMode: 'contain',
  },
});

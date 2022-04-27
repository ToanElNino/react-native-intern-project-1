import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export const SmartSocialSearchInput = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.txtInputButton}>
        <AntDesign name="left" size={25} />
      </TouchableOpacity>
      <TextInput
        style={styles.txtInput}
        placeholder="Search"
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={styles.txtInputButton}>
        <Entypo name="menu" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  txtInput: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '70%',
    paddingHorizontal: 25,
  },
  txtInputButtonImage: {
    backgroundColor: 'blue',
    // backgroundColor:'blue',
    marginTop: 5,
    height: '25%',
    resizeMode: 'center',
  },
  txtInputButton: {
    marginTop: 20,
  },
});

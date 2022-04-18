import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import NotificationItem from './NotificationItem';

const NotificationList = ({list}) => {
  return (
    <View style={styles.notificationListContainer}>
      <ScrollView>
        {list.map((news, index) => {
          return <NotificationItem news={news} count={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationListContainer: {
    height: 470,
    marginVertical: 20,
  },
});
export default NotificationList;

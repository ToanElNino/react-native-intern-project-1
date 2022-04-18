import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import EventItem from './EventItem';

const EventList = ({list}) => {
  return (
    <View style={styles.notificationListContainer}>
      <ScrollView>
        {list.map((news, index) => {
          return <EventItem news={news} count={index} key={index} />;
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
export default EventList;

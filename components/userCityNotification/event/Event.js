import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {userDataSelector} from '../../../features/authentication/userSlice';
import EventList from './EventList';

const Event = () => {
  const userData = useSelector(userDataSelector);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url =
      'http://103.229.41.59/api/services/app/UserCityNotification/GetAllNotificationUserTenant';
    let config = {
      headers: {Authorization: `Bearer ${userData.accessToken}`},
      params: {
        Type: 2,
      },
    };
    async function fetchEvents() {
      const data = await axios
        .get(url, config)
        .then(response => response.request._response)
        .then(responseRequestResponse => {
          return JSON.parse(responseRequestResponse).result.data;
        })
        .catch(error => console.log(error));
      setEvents(data);
    }
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.accessToken]);
  return (
    <View style={styles.notificationContainer}>
      {/* <Text style={styles.NotificationTitle}>Events</Text> */}
      {events.length ? (
        <EventList list={events} />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  NotificationTitle: {
    marginTop: 10,
    color: '#242A53',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
export default Event;

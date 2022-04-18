import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {userDataSelector} from '../../../features/authentication/userSlice';
import NotificationList from './NotificationList';

const Notification = () => {
  const userData = useSelector(userDataSelector);
  const [notificationUserTenant, setNotificationUserTenant] = useState([]);

  useEffect(() => {
    const url =
      'http://103.229.41.59/api/services/app/UserCityNotification/GetAllNotificationUserTenant';
    let config = {
      headers: {Authorization: `Bearer ${userData.accessToken}`},
      params: {
        Type: 1,
      },
    };
    async function fetchNotifications() {
      const data = await axios
        .get(url, config)
        .then(function (responseRequestResponse) {
          return JSON.parse(
            responseRequestResponse.request._response,
          ).result.data;
        })
        .catch(error => console.log(error));
      setNotificationUserTenant(data);
    }
    fetchNotifications();
  }, [userData.accessToken]);
  return (
    <View style={styles.notificationContainer}>
      {/* <Text style={styles.NotificationTitle}>Notifications</Text> */}
      {notificationUserTenant.length ? (
        <NotificationList list={notificationUserTenant} />
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
export default Notification;

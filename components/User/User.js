import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {Text, View, StyleSheet, ActivityIndicator, Image} from 'react-native';
import userCityNotificationAPI from '../../features/userCityNotification/userCityNotificationAPI';
import {userDataSelector} from '../../features/authentication/userSlice';
import UserInfoItem from './UserInfoItem';

const User = () => {
  const userData = useSelector(userDataSelector);
  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    // const Token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMDg3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InRvYW5xdW9jbmd1eWVuMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRvYW5xdW9jbmd1eWVuMTkyQGdtYWlsLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiRUlTV0wzUUlUM1lUUUtWTERNWlpWSUlTSU5KRjNaM0wiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJEZWZhdWx0VXNlciIsInN1YiI6IjEwMDg3IiwianRpIjoiMjg1NTFiNjctMzFhMC00ZDVhLTg5YzEtZjc0MDA1NjNhMjdiIiwiaWF0IjoxNjUwMjE2MjM3LCJuYmYiOjE2NTAyMTYyMzcsImV4cCI6MTY1MDMwMjYzNywiaXNzIjoiTUhQUSIsImF1ZCI6Ik1IUFEifQ.KwApxCDsfT2D1LcycThrkO8YNedtH8RQ4hrLXv5xW0Q';
    const url =
      'http://103.229.41.59/api/services/app/Session/GetCurrentLoginInformations';
    let config = {
      headers: {Authorization: `Bearer ${userData.accessToken}`},
      params: null,
    };
    async function fetchUserInfo() {
      const data = await axios
        .get(url, config)
        .then(function (response) {
          console.log(JSON.parse(response.request._response).result.user);
          return JSON.parse(response.request._response).result.user;
        })
        .catch(error => console.log(error));
      setUserInformation(data);
    }
    fetchUserInfo();
  }, [userData.accessToken]);
  return (
    <View style={styles.notificationContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/Login/Logo.png')}
      />
      <Text style={styles.userInfoTitle}>User Information</Text>
      {userInformation === null ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.userInformations}>
          <UserInfoItem
            labelTitle={'Name: '}
            infoTitle={userInformation.name}
          />
          <UserInfoItem
            labelTitle={'Surname: '}
            infoTitle={userInformation.surname}
          />
          <UserInfoItem
            labelTitle={'User name: '}
            infoTitle={userInformation.userName}
          />
          <UserInfoItem
            labelTitle={'Email address: '}
            infoTitle={userInformation.emailAddress}
          />
          <UserInfoItem
            labelTitle={'User id: '}
            infoTitle={userInformation.id}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    height: '30%',
    resizeMode: 'contain',
  },
  userInfoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  userInformations: {
    marginTop: 20,
  },
});
export default User;

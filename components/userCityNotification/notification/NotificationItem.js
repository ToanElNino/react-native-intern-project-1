/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import NotificationImage from './NotificationImage';

const NotificationItem = ({news, count}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                ...styles.modalText,
                color: '#242A53',
                fontSize: 17,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Detail:
            </Text>
            <ScrollView style={{maxHeight: 300}}>
              <Text style={styles.modalText}>
                {'- Notification: ' + news.name}
              </Text>
              <Text style={styles.modalText}>{'- Content: ' + news.data}</Text>
              {news.fileUrl && <NotificationImage url={news.fileUrl} />}
              <Text style={styles.modalText}>
                {'- Time: ' + news.creationTime.substring(0, 10)}
              </Text>
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide detail</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text>{count + 1 + ' - ' + news.name}</Text>
        <Text>{'   - Time: ' + news.creationTime.substring(0, 10)}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#f8f8ff',
  },
  buttonClose: {
    backgroundColor: '#3A5BB3',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
  },
});

export default NotificationItem;

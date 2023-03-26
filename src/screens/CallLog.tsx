import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  PermissionsAndroid,
  FlatList,
  View,
} from 'react-native';
import CallLogs from 'react-native-call-log';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getColorCallLog, getIconCallLog} from '../utils/function';
const CallLog = () => {
  const [callLog, setCallLog] = useState([]);
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(() => {
      CallLogs.loadAll().then(calllog => {
        setCallLog(calllog);
        console.log(callLog[0]);
      });
    });
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Icon
          name={getIconCallLog(item.type)}
          size={20}
          color={getColorCallLog(item.type)}
        />
        <Text style={{paddingLeft: 10}}>
          {item.name ? item.name : item.phoneNumber}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text>{'CallLog'}</Text>
      <FlatList
        data={callLog}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 30}}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};
export default CallLog;

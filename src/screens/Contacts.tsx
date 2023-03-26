import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  PermissionsAndroid,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Con from 'react-native-contacts';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(() => {
      Con.getAll().then(contacts => {
        const c = contacts.sort((a: any, b: any) => {
          return a.displayName - b.displayName;
        });
        setContacts(c);
      });
    });
  }, []);

  const makeCall = item => {
    console.log(item.phoneNumbers[0]);
    // call({
    //     number: String(item.phoneNumbers[0].number), // String value with the number to call
    //     skipCanOpen: true, // Skip the canOpenURL check
    //     prompt: true,
    // }).catch(error => {
    //     console.log(error);
    // });
    RNImmediatePhoneCall.immediatePhoneCall(
      String(item.phoneNumbers[0].number),
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 10,
        }}
        onPress={() => {
          makeCall(item);
        }}
      >
        <Image
          style={{width: 30, height: 30}}
          source={{
            uri: item.thumbnailPath
              ? item.thumbnailPath
              : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
          }}
        />
        <Text style={{paddingLeft: 10}}>{item.displayName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text>{'Contacts'}</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 30}}
        removeClippedSubviews={true}
      />
    </SafeAreaView>
  );
};
export default Contacts;

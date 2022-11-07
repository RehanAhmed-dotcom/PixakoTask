import React, {useContext, useEffect, useState} from 'react';
import {View, PermissionsAndroid, Text} from 'react-native';
import Button from '../../../components/Button';
import Geolocation from 'react-native-geolocation-service';
import {AuthContext} from '../../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const Dashboard = () => {
  const [tracking, setTracking] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const {logout} = useContext(AuthContext);
  const cuRRentlocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        firestore()
          .collection('coordinates')
          .doc('z3IULlYRwNQ2rFwjV8bQ')
          .update({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          .then(() => {
            console.log('User updated!');
          });
      },
      error => {
        console.log('error in loc', error);
      },
      {
        enableHighAccuracy: true,
        // timeout: 15000,
        // maximumAge: 10000
      },
    );
  };
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        cuRRentlocation();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);
  useEffect(() => {
    if (tracking) {
      const interval = setInterval(() => {
        cuRRentlocation();
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [tracking]);
  const repeater = payload => {
    setTracking(payload);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Dashboard</Text>
      <Button text={'START TRACKING'} onpress={() => repeater(true)} />
      <Button text={'STOP TRACKING'} onpress={() => repeater(false)} />
      <Button text={'Logout'} onpress={() => logout()} />
    </View>
  );
};
export default Dashboard;

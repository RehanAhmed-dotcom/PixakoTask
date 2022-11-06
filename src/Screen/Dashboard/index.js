import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import Geolocation from 'react-native-geolocation-service';
import {AuthContext} from '../../Navigation/AuthProvider';
const Dashboard = () => {
  const [tracking, setTracking] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const {logout} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Dashboard</Text>
      <Button text={'START TRACKING'} />
      <Button text={'STOP TRACKING'} />
      <Button text={'Logout'} onpress={() => logout()} />
    </View>
  );
};
export default Dashboard;

import React, {useContext, useState} from 'react';
import {View, Alert, TouchableOpacity, Text} from 'react-native';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import {AuthContext} from '../../../Navigation/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // console.log('email', email);
  const {login} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text>Signup</Text> */}

      <Input
        value={email}
        onChange={text => setEmail(text)}
        placeholder={'Enter Email'}
      />
      <Input
        value={password}
        onChange={text => setPassword(text)}
        placeholder={'Enter Password'}
      />
      {/* <TouchableOpacity onPress={() => }>
        <Text>press</Text>
      </TouchableOpacity> */}
      <Button
        onpress={() => {
          if (email && password) {
            login(email, password);
          } else {
            Alert.alert('Enter email and password');
          }
        }}
        text="Login"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{marginTop: 20}}>
          Don't have an account? <Text>SignUp</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;

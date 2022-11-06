import {TextInput} from 'react-native';
const Input = ({value, onChange, placeholder}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor={'grey'}
      style={{
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 30,
        color: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
      }}
    />
  );
};
export default Input;

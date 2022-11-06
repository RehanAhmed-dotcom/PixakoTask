import {TouchableOpacity, Text} from 'react-native';

const Button = ({onpress, text}) => {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: 'skyblue',
      }}
      onPress={onpress}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

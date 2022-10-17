import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../Library/Colors';
import {secure, unsecure} from '../Library/Icons';
import {sizeFont} from '../Library/Styles';

const AccountInfoInputs = ({HeaderName, InputName, type,TypeName,TypesPassword}) => {
  const [secureText, SetSecureText] = useState(true);
  if (type == 'Input') {
    return (
      <View style={styles.inputsContainer}>
        <View style={styles.header}>
          <Text
            style={{
              fontSize: sizeFont.fontBigger,
              color: colors.black,
            }}>
            {HeaderName}
          </Text>
        </View>
        <View style={styles.inputs}>
          
          <TextInput
            autoCapitalize="none"
            placeholderTextColor={colors.grey}
            placeholder={InputName}
            onChangeText={(text)=>{
              TypeName(text)
            }}
            style={{
              height: 40,
              width: '100%',
              flex: 1,
              color: colors.black,
              paddingHorizontal: 10,
            }}
          />
        </View>
      </View>
    );
  } else {
    if (type == 'Password') {
      return (
        <View style={styles.inputsContainer}>
          <View style={styles.header}>
            <Text
              style={{
                fontSize: sizeFont.fontBigger,
                color: colors.black,
              }}>
              {HeaderName}
            </Text>
          </View>
          <View style={[styles.inputs, {flexDirection: 'row'}]}>
            <TextInput
              autoCapitalize="none"
              secureTextEntry={secureText}
              placeholder={InputName}
              placeholderTextColor={colors.grey}
              onChangeText={(text)=>{
                TypesPassword(text)
              }}
              style={{
                height: '100%',
                width: '80%',
                flex: 1,
                color: colors.black,
                paddingHorizontal: 10,
                borderRadius: 15,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                SetSecureText(!secureText);
              }}
              activeOpacity={1}
              style={{
                width: '20%',
                height: '100%',
                borderRadius: 15,
                alignItems: 'center',
              }}>
              <Image
                source={secureText ? secure : unsecure}
                style={{
                  width: '50%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
};
const styles = StyleSheet.create({
  inputsContainer: {
    width: '100%',
    height: 80,
  },
  header: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
  },
  inputs: {
    height: '70%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ccc',
  },
  inputNumber: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
});
export default AccountInfoInputs;

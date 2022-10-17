import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Keyboard} from 'react-native';
import AccountInfoInputs from '../Components/AccountInfoInputs';
import {colors} from '../Library/Colors';
import {logo} from '../Library/Icons';
import {sizeFont} from '../Library/Styles';
import {titleLanguages} from '../Library/Variables';
import {useDispatch} from 'react-redux';
import {ACEESSTOKEN, ISLOGGEDIN} from '../Redux/actionTypes';
import {get, post} from '../Api/Api';
import {getArticles, LoginUrl} from '../Api/Urls';
import { Loading } from '../Components/Loading';
import { toast } from '../Library/Function';
const Login = () => {
  const dispatch = useDispatch();
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [displayloading, setdisplayloading] = useState('none');
  useEffect(() => {
    if ((username.length == 0) & (password.length == 0)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [username, password]);
  const namechanges = Input => {
    SetUsername(Input);
  };

  const passwordchange = Input => {
    SetPassword(Input);
  };
  const Login = async () => {
    setdisplayloading('flex')
    setDisabled(true)
    let resp13 = await post(LoginUrl(), {
      username: username,
      password: password,
    });
    
    try{
      if(resp13.error== false){
        if(resp13.message.error == 'Unauthorized'){
          toast(resp13.message.message)
          setdisplayloading('none')
          setDisabled(false)
        }
        else{
          dispatch({type:ACEESSTOKEN,value:resp13.message.accessToken})
          dispatch({type:ISLOGGEDIN,value:true})
        }
      }
      else{
        toast(titleLanguages.en.Login.CheckInternet)
        setdisplayloading('none')
        setDisabled(false)
      }
      
      
      
    }catch (e) {
      console.log(e);

    }

    
  };
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerLogo}>
        <Image
          source={logo}
          style={{width: '100%', height: '30%', resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.LoginContainer}>
        <AccountInfoInputs
          HeaderName={titleLanguages.en.Login.Username}
          InputName={titleLanguages.en.Login.EnterUsername}
          type={'Input'}
          TypeName={namechanges}
        />
        <AccountInfoInputs
          HeaderName={titleLanguages.en.Login.Password}
          InputName={titleLanguages.en.Login.EnterPassword}
          type={'Password'}
          TypesPassword={passwordchange}
        />
        <TouchableOpacity
          disabled={disabled}
          style={styles.Buttoncontainer}
          onPress={() => {
            Keyboard.dismiss()
            Login();
          }}>
          <Text style={{fontSize: sizeFont.fontBigger, color: colors.white}}>
            {titleLanguages.en.Login.Login}
          </Text>   
        </TouchableOpacity>
      </View>
      <View style={[styles.LodingIndicator,{display:displayloading}]}>

      <Loading
              activityColor={colors.primary_color}
              size="large"
              Swidth="100%"
              Sheight="100%"
              bgColor="none"
            />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    paddingHorizontal: '6%',
    height: '100%',
    backgroundColor: colors.white,
  },
  headerLogo: {
    width: '100%',
    justifyContent: 'center',
  },
  LoginContainer: {
    width: '100%',
  },
  Buttoncontainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary_color,
    borderRadius: 15,
    marginTop: '4%',
    padding: '4%',
  },
  LodingIndicator: {
    width: '20%',
    height: '10%',
    alignSelf: 'center',
    marginTop:'4%',
    justifyContent:'center',
    alignItems:'center'
  },
});
export default Login;

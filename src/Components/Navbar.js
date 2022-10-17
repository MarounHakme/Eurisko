import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../Library/Colors';
import {close, namelogo, search} from '../Library/Icons';
import {sizeFont} from '../Library/Styles';
import {titleLanguages} from '../Library/Variables';
import {ARTICLES, ISLOGGEDIN, SEARCH} from '../Redux/actionTypes';
const Navbar = ({inputSearch}) => {
  const dispatch = useDispatch();
  const [input,setInput]=useState('')

  const Search =  (input)=>{
    dispatch({type:SEARCH,value:input})
  }
  return (
    <>
      <View style={styles.Navbar}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image
              source={namelogo}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.logoutButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch({type: ISLOGGEDIN, value: false});
                dispatch({type: ARTICLES, value: []});
              }}>
              <Text
                style={{fontSize: sizeFont.fontBigger, color: colors.white}}>
                {titleLanguages.en.HomeScreen.LogoutButton}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.container}>
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={search}
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: '100%',
              }}
            />
          </TouchableOpacity>
          <TextInput
            autoCapitalize="none"
            placeholderTextColor={colors.white}
            placeholder={titleLanguages.en.Search.TypesSomething}
            onChangeText={(text)=>{
              Search(text)
              inputSearch(text)
            }}
            style={{
              height: '100%',
              width: '80%',
              fontSize:sizeFont.fontMedium,
              flex: 1,
              color: colors.white,
              paddingHorizontal: 10,
            }}
          />
          </View>

        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Navbar: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    backgroundColor: colors.primary_color,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logoContainer: {
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: '6%',
  },
  logo: {
    width: '40%',
  },
  searchIcon: {
    width: '20%',
    height:'100%',
    alignItems: 'flex-start',
    borderRadius:10

  },
  logoutButton: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary_color,
    borderRadius: 5,
  },
  searchContainer: {
    width: '100%',
    height: '50%',
    paddingHorizontal:'4%',
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    width:'80%',
    height:'70%',
    borderWidth:1,
    borderColor:colors.secondary_color,
    borderRadius:10,
    flexDirection:'row',
    
  }

});
export default Navbar;

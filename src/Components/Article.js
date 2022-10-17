import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../Library/Colors';
import {placeholder} from '../Library/Icons';
import {sizeFont} from '../Library/Styles';
const Article = ({image, title,content}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.image}>
        <Image
          source={
            image == null || image == '' || image == undefined
              ? placeholder
              : {uri: image}
          }
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.Title}>
        <Text

          style={{fontSize: sizeFont.fontBig, color: colors.black,fontWeight:'bold'}}
          numberOfLines={2}>
          {title}

        </Text>
        <Text
          style={{fontSize: sizeFont.fontNormal, color: colors.black}}
          numberOfLines={4}>
          {content}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    marginTop: '4%',
    borderColor: colors.grey,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow:'hidden'
  },
  Title: {
    width: '70%',
    justifyContent: 'center',
    paddingHorizontal: '4%',
  },
});
export default Article;

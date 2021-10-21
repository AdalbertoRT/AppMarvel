import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerTop}>
        <Text style={styles.provided}>
          Data provided by MARVEL. © 2021 MARVEL
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('http://marvel.com')}>
          Site: MARVEL.COM
        </Text>
      </View>
      <View style={styles.footerBottom}>
        <Text style={styles.developer}>
          Developed by: Adalberto R. Teixeira
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 'auto',
    width: '100%',
    marginTop: 5,

    backgroundColor: '#ec1d24',
  },
  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  provided: {
    fontFamily: 'MarvelRegular',
    fontSize: 14,
    color: '#FFF',
    marginVertical: 5,
  },
  link: {
    fontFamily: 'MarvelRegular',
    fontSize: 14,
    color: '#FFF',
    marginVertical: 5,
  },
  footerBottom: {
    alignItems: 'center',
  },
  developer: {
    color: '#FFF',
    fontSize: 12,
  },
});
export default Footer;

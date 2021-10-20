import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.provided}>
        Data provided by MARVEL. © 2021 MARVEL
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('http://marvel.com')}>
        Site: MARVEL.COM
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#ec1d24',
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    marginTop: 5,
  },
  provided: {
    fontFamily: 'MarvelRegular',
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
  },
  link: {
    fontFamily: 'MarvelRegular',
    fontSize: 16,
    color: '#FFF',
    marginVertical: 5,
  },
});
export default Footer;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import search from '../../assets/icons/search.png';
import home from '../../assets/icons/home.png';
import avengers from '../../assets/icons/avengers.png';
import {
  FooterComponent,
  FooterControl,
  Search,
  Home,
  Avengers,
  Copyright,
} from './styles';

const Footer = () => {
  return (
    <FooterComponent>
      <FooterControl>
        <Search underlayColor="#ec2d24" activeOpacity={0.3} onPress={() => {}}>
          <Image source={search} style={{width: 30, height: 30}} />
        </Search>
        <Home underlayColor="#ec2d24" activeOpacity={0.6} onPress={() => {}}>
          <Image source={home} style={{width: 50, height: 50}} />
        </Home>
        <Avengers
          underlayColor="#ec2d24"
          activeOpacity={0.6}
          onPress={() => {}}>
          <Image source={avengers} style={{width: 30, height: 30}} />
        </Avengers>
      </FooterControl>
      <Copyright>
        <Text style={styles.provided}>
          Data provided by MARVEL.COM |{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('http://marvel.com')}>
            © 2021 MARVEL
          </Text>
        </Text>
        <Text
          style={styles.developer}
          onPress={() => Linking.openURL('http://adalberto.site')}>
          Developed by: Adalberto R. Teixeira
        </Text>
      </Copyright>
    </FooterComponent>
  );
};

const styles = StyleSheet.create({
  provided: {
    fontFamily: 'MarvelRegular',
    fontSize: 10,
    color: '#FFF',
    marginVertical: 5,
  },
  link: {
    fontFamily: 'MarvelRegular',
    fontSize: 10,
    color: '#FFF',
    marginVertical: 5,
  },
  developer: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
export default Footer;

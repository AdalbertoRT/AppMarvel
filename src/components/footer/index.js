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
import edit from '../../assets/icons/edit.png';
import {
  FooterComponent,
  FooterControl,
  SmallButton,
  LargeButton,
  Copyright,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchHeroes} from '../../store/heroes';

const Footer = ({
  setModal,
  iconsVisibles = true,
  details = false,
  setModalEdit,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSearch = () => {
    setModal(true);
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  return (
    <FooterComponent>
      <FooterControl>
        {iconsVisibles &&
          (!details ? (
            <SmallButton activeOpacity={0.3} onPress={handleSearch}>
              <Image source={search} style={{width: 30, height: 30}} />
            </SmallButton>
          ) : (
            <SmallButton
              underlayColor="#ec2d24"
              onPress={() => setModalEdit(true)}
              activeOpacity={0.3}>
              <Image source={edit} style={{width: 30, height: 30}} />
            </SmallButton>
          ))}
        <LargeButton
          underlayColor="#ec2d24"
          activeOpacity={0.6}
          onPress={handleHome}>
          <Image source={home} style={{width: 50, height: 50}} />
        </LargeButton>
        {iconsVisibles && (
          <SmallButton
            underlayColor="#ec2d24"
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('EditedHeroes');
            }}>
            <Image source={avengers} style={{width: 30, height: 30}} />
          </SmallButton>
        )}
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

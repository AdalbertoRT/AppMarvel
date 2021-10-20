import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native';
import {
  PageHome,
  Loading,
  LoadingText,
  HeroCard,
  HeroImage,
  HeroInfo,
  HeroName,
} from './styles';
import {FlatList} from 'react-native';
import md5 from 'md5';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../components/footer';

const Home = () => {
  const [heroesList, setHeroesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const PUBLIC_KEY = 'd2c23ab2d9aa451626cb51e3cffb8a24';
  const PRIVATE_KEY = '7a7d719f066df6ced2c20281ca90d4547c70e6ad';
  const timestamp = Number(new Date());
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

  const heroes = async () => {
    setLoading(true);
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&limit=100&orderBy=modified&apikey=${PUBLIC_KEY}&hash=${hash}`,
    );
    const json = await response.json();

    setHeroesList({data: json.data.results});
    setLoading(false);
  };

  useLayoutEffect(() => {
    heroes();
  }, []);

  const handleDetail = item => {
    navigation.navigate('Details', {hero: item});
  };

  function renderItem({item}) {
    return (
      <HeroCard onPress={() => handleDetail(item)}>
        <HeroImage
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <HeroInfo>
          <HeroName>{item.name}</HeroName>
        </HeroInfo>
      </HeroCard>
    );
  }

  return (
    <PageHome>
      <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
      {loading && (
        <Loading>
          <ActivityIndicator size="large" color="#ec1d24" />
          <LoadingText className="loadingText">Carregando Heróis</LoadingText>
        </Loading>
      )}
      {!loading && (
        <FlatList
          data={heroesList.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // ItemSeparatorComponent={() => (
          //   <View style={{height: 1, backgroundColor: '#f7f7f7'}} />
          // )}
          numColumns={2}
        />
      )}
      <Footer />
    </PageHome>
  );
};

export default Home;

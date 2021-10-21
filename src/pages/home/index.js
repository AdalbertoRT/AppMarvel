import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {fetchHeroes} from '../../store/heroes';

const Home = () => {
  const {loading, data, error} = useSelector(state => state.heroes);
  const [heroes, setHeroes] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  useLayoutEffect(() => {
    setHeroes(data);
  }, [data]);

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
      {!heroes && (
        <Loading>
          <ActivityIndicator size="large" color="#ec1d24" />
          <LoadingText className="loadingText">Carregando Heróis</LoadingText>
        </Loading>
      )}
      {heroes && (
        <FlatList
          data={heroes}
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

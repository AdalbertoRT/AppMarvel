import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import search from '../../assets/icons/search.png';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../components/footer';
import {fetchHeroes} from '../../store/heroes';
import ModalSearch from '../../components/modal';

const Home = () => {
  const {loading, data, error} = useSelector(state => state.heroes);
  const [heroes, setHeroes] = useState([]);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [offset, setOffset] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    setHeroes([]);
    setOffset(0);
    dispatch(fetchHeroes(0));
  }, []);

  useLayoutEffect(() => {
    if (data) {
      setHeroes(h => [...h, ...data]);
      setLoadingNextPage(false);
    }
  }, [data]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image source={search} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      ),
    });
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

  const onNextPage = () => {
    setLoadingNextPage(true);
    dispatch(fetchHeroes(offset + 20));
    setOffset(off => off + 20);
  };

  return (
    <PageHome>
      <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
      {heroes.length === 0 && (
        <Loading>
          <ActivityIndicator size="large" color="#ec1d24" />
          <LoadingText className="loadingText">Carregando Heróis</LoadingText>
        </Loading>
      )}
      {heroes.length > 0 && (
        <FlatList
          data={heroes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // ItemSeparatorComponent={() => (
          //   <View style={{height: 1, backgroundColor: '#f7f7f7'}} />
          // )}
          numColumns={2}
          onEndReached={onNextPage}
          ListFooterComponent={() =>
            loadingNextPage && (
              <ActivityIndicator
                size="large"
                color="#ec1d24"
                style={{margin: 10}}
              />
            )
          }
        />
      )}
      <Footer />
      <ModalSearch visible={modalVisible} setVisible={setModalVisible} />
    </PageHome>
  );
};

export default Home;

import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  Button,
  View,
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
import allTheHeroes from '../../assets/icons/allTheHeroes.png';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../components/footer';
import {fetchHeroes} from '../../store/heroes';
import ModalSearch from '../../components/modal';

const Home = () => {
  const {loading, data, error} = useSelector(state => state.heroes);
  const [heroes, setHeroes] = useState([]);
  const [filter, setFilter] = useState(false);
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
      headerTitle: () => (
        <View style={{paddingVertical: 5}}>
          <Text
            style={{fontFamily: 'MarvelRegular', fontSize: 40, color: '#FFF'}}>
            MARVEL
          </Text>
          <Text
            style={{
              fontFamily: 'MarvelRegular',
              fontSize: 18,
              color: '#FFF',
              textAlign: 'center',
            }}>
            Heroes
          </Text>
        </View>
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
    if (!filter) {
      setLoadingNextPage(true);
      dispatch(fetchHeroes(offset + 20));
      setOffset(off => off + 20);
    } else return null;
  };

  const allHeroes = () => {
    setFilter(false);
    dispatch(fetchHeroes());
    setHeroes([]);
  };

  // if (error)
  //   return (
  //     <View
  //       style={{flex: 1, backgroundColor: '#151515', justifyContent: 'center'}}>
  //       <Text
  //         style={{
  //           color: '#FFF',
  //           fontSize: 20,
  //           textAlign: 'center',
  //           marginVertical: 30,
  //         }}>
  //         No heroes found!
  //       </Text>
  //     </View>
  //   );

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
          data={heroes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={heroes}
          maxToRenderPerBatch={10}
          windowSizeprop={10}
          // ItemSeparatorComponent={() => (
          //   <View style={{height: 1, backgroundColor: '#f7f7f7'}} />
          // )}
          numColumns={2}
          onEndReached={onNextPage}
          ListFooterComponent={() =>
            filter ? (
              <Button
                title="ALL THE HEROES"
                style={{marginVertical: 30, backgroundColor: '#ec1d24'}}
                onPress={allHeroes}
              />
            ) : (
              loadingNextPage && (
                <ActivityIndicator
                  size="large"
                  color="#ec1d24"
                  style={{margin: 10}}
                />
              )
            )
          }
        />
      )}

      <Footer />
      <ModalSearch
        visible={modalVisible}
        setVisible={setModalVisible}
        setHeroes={setHeroes}
        setFilter={setFilter}
      />
    </PageHome>
  );
};

export default Home;

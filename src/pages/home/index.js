import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, StatusBar, Text, View, Image} from 'react-native';
import {PageHome, HeroesList, OrderButton} from './styles';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../components/footer';
import LoadingComponent from '../../components/loading';
import {fetchHeroes} from '../../store/heroes';
import ModalSearch from '../../components/modal';
import RenderItem from '../../components/renderItem';
import sort from '../../assets/icons/sort.png';
import {isFulfilled} from '@reduxjs/toolkit';

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
      setOffset(off => off + 50);
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

  const renderItem = ({item}) => {
    return <RenderItem item={item} />;
  };

  const onNextPage = () => {
    if (!filter) {
      setLoadingNextPage(true);
      dispatch(fetchHeroes(offset + 50));
      setOffset(off => off + 50);
    }
  };

  return (
    <PageHome>
      <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
      {error && (
        <View
          style={{
            flex: 1,
            backgroundColor: '#151515',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 20,
              textAlign: 'center',
              marginVertical: 30,
            }}>
            No heroes found!{console.log(error)}
          </Text>
        </View>
      )}
      {heroes.length === 0 && loading ? (
        <LoadingComponent />
      ) : (
        <HeroesList
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
          // onEndReachedThreshold={0.5}
          ListFooterComponent={() =>
            !filter &&
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

      <Footer setModal={setModalVisible} setFilter={setFilter} />
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

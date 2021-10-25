import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, StatusBar, Text, View} from 'react-native';
import {PageFilter, HeroesList} from './styles';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../components/footer';
import LoadingComponent from '../../components/loading';
import {fetchHero, fetchHeroes} from '../../store/heroes';
import ModalSearch from '../../components/modal';
import RenderItem from '../../components/renderItem';

const FilterPage = () => {
  const {loading, data, error} = useSelector(state => state.heroes);
  const [heroes, setHeroes] = useState([]);
  const [filter, setFilter] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {name} = route.params;

  useEffect(() => {
    // setHeroes([]);
    dispatch(fetchHero(name));
  }, []);

  useLayoutEffect(() => {
    if (data) {
      setHeroes(data);
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

  return (
    <PageFilter>
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
          // onEndReached={onNextPage}
          // onEndReachedThreshold={0.5}
          // ListFooterComponent={() =>
          //   !filter &&
          //   loadingNextPage && (
          //     <ActivityIndicator
          //       size="large"
          //       color="#ec1d24"
          //       style={{margin: 10}}
          //     />
          //   )
          // }
        />
      )}

      <Footer setModal={setModalVisible} setFilter={setFilter} />
      <ModalSearch
        visible={modalVisible}
        setVisible={setModalVisible}
        setHeroes={setHeroes}
        filterPage={true}
      />
    </PageFilter>
  );
};

export default FilterPage;

import {useRoute} from '@react-navigation/native';
import React, {useState, useLayoutEffect, useRef} from 'react';
import {StatusBar, StyleSheet, Dimensions, Text} from 'react-native';
import {
  PageDetails,
  DetailsComponent,
  DetailsImage,
  HeroNameContainer,
  HeroName,
  Edit,
  EditImage,
  Divider,
  HeroDescription,
  HeroCollections,
  HeroCollectionsItems,
  Item,
  HeroCollectionsTitle,
} from './styles';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  Image,
  View,
} from 'accordion-collapse-react-native';
import Footer from '../../components/footer';
import edit from '../../assets/icons/edit.png';
import ModalEdit from '../../components/modalEdit';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Details = () => {
  const refScrollView = useRef();
  const route = useRoute();
  const {hero} = route.params;
  const [modalEdit, setModalEdit] = useState(false);

  const scrollUp = () => {
    refScrollView.current?.scrollTo({
      y: SCREEN_HEIGHT / 1.5,
      animated: true,
      duration: 1000,
    });
  };

  return (
    <PageDetails>
      <DetailsComponent ref={refScrollView}>
        <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
        <DetailsImage
          source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
          width={SCREEN_WIDTH}
          height={SCREEN_WIDTH}
          resizeMode="stretch"
        />
        <HeroNameContainer>
          <HeroName>{hero.name}</HeroName>
        </HeroNameContainer>
        <Divider />
        <HeroDescription>
          {hero.description
            ? hero.description
            : `${hero.name} is absent. Probably on some mission. Come back another time to get information about him.`}
        </HeroDescription>
        <HeroCollections>
          <Collapse style={styles.collapse} onToggle={true ? scrollUp : null}>
            <CollapseHeader style={styles.collapseHeader} onPress={scrollUp}>
              <HeroCollectionsTitle>Comics</HeroCollectionsTitle>
            </CollapseHeader>
            <CollapseBody style={styles.collapseBody}>
              <HeroCollectionsItems>
                {hero.comics.items.map((el, index) => (
                  <Item key={index}>{'\u2B24 ' + el.name}</Item>
                ))}
              </HeroCollectionsItems>
            </CollapseBody>
          </Collapse>
          <Collapse style={styles.collapse} onToggle={true ? scrollUp : null}>
            <CollapseHeader style={styles.collapseHeader}>
              <HeroCollectionsTitle>Series</HeroCollectionsTitle>
            </CollapseHeader>
            <CollapseBody style={styles.collapseBody}>
              <HeroCollectionsItems>
                {hero.series.items.map((el, index) => (
                  <Item key={index}>{'\u2B24 ' + el.name}</Item>
                ))}
              </HeroCollectionsItems>
            </CollapseBody>
          </Collapse>
          <Collapse style={styles.collapse} onToggle={true ? scrollUp : null}>
            <CollapseHeader style={styles.collapseHeader}>
              <HeroCollectionsTitle>Stories</HeroCollectionsTitle>
            </CollapseHeader>
            <CollapseBody style={styles.collapseBody}>
              <HeroCollectionsItems>
                {hero.stories.items.map((el, index) => (
                  <Item key={index}>
                    {'\u2B24 ' + el.name + ' (' + el.type + ')'}
                  </Item>
                ))}
              </HeroCollectionsItems>
            </CollapseBody>
          </Collapse>
          <Collapse style={styles.collapse} onToggle={true ? scrollUp : null}>
            <CollapseHeader style={styles.collapseHeader}>
              <HeroCollectionsTitle>Events</HeroCollectionsTitle>
            </CollapseHeader>
            <CollapseBody style={styles.collapseBody}>
              <HeroCollectionsItems>
                {hero.events.items.map((el, index) => (
                  <Item key={index}>{'\u2B24 ' + el.name}</Item>
                ))}
              </HeroCollectionsItems>
            </CollapseBody>
          </Collapse>
        </HeroCollections>
      </DetailsComponent>
      <Footer details={true} setModalEdit={setModalEdit} />
      {modalEdit && (
        <ModalEdit hero={hero} setVisible={setModalEdit} visible={modalEdit} />
      )}
    </PageDetails>
  );
};

const styles = StyleSheet.create({
  collapse: {
    padding: 0,
    margin: 0,
  },
  collapseHeader: {
    backgroundColor: '#ec1d24',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 10,
  },
  collapseBody: {
    backgroundColor: '#202020',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Details;

import {useRoute} from '@react-navigation/native';
import React, {useState, useLayoutEffect} from 'react';
import {StatusBar, StyleSheet, Dimensions, Text} from 'react-native';
import {
  DetailsComponent,
  DetailsImage,
  HeroNameContainer,
  HeroName,
  Edit,
  EditImage,
  Divider,
  HeroDescription,
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

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Details = () => {
  const route = useRoute();
  // const {hero} = route.params;

  return (
    <DetailsComponent>
      <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
      <DetailsImage
        source={{uri: 'http://google.com/google.jpg'}}
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH}
        resizeMode="stretch"
      />
      <HeroNameContainer>
        <HeroName>Hero</HeroName>
        <Edit
          onPress={() => {}}
          activeOpacity={0.6}
          underlayColor="transparent">
          <EditImage source={edit} />
        </Edit>
      </HeroNameContainer>

      <Divider />
      <HeroDescription>
        Hero is absent. Probably on some mission. Come back another time to get
        information about him.`
      </HeroDescription>
      <Footer />
    </DetailsComponent>
  );
  // return (
  //   <DetailsComponent>
  //     <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
  //     <DetailsImage
  //       source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
  //       width={SCREEN_WIDTH}
  //       height={SCREEN_WIDTH}
  //       resizeMode="stretch"
  //     />
  //     <HeroName style={{}}>{hero.name}</HeroName>
  //     <Divider />
  //     <HeroDescription>
  //       {hero.description
  //         ? hero.description
  //         : `${hero.name} is absent. Probably on some mission. Come back another time to get information about him.`}
  //     </HeroDescription>
  //     <Collapse style={styles.collapse}>
  //       <CollapseHeader style={styles.collapseHeader}>
  //         <HeroCollectionsTitle>Comics</HeroCollectionsTitle>
  //       </CollapseHeader>
  //       <CollapseBody style={styles.collapseBody}>
  //         <HeroCollectionsItems>
  //           {hero.comics.items.map((el, index) => (
  //             <Item key={index}>{'\u2B24 ' + el.name}</Item>
  //           ))}
  //         </HeroCollectionsItems>
  //       </CollapseBody>
  //     </Collapse>
  //     <Collapse style={styles.collapse}>
  //       <CollapseHeader style={styles.collapseHeader}>
  //         <HeroCollectionsTitle>Series</HeroCollectionsTitle>
  //       </CollapseHeader>
  //       <CollapseBody style={styles.collapseBody}>
  //         <HeroCollectionsItems>
  //           {hero.series.items.map((el, index) => (
  //             <Item key={index}>{'\u2B24 ' + el.name}</Item>
  //           ))}
  //         </HeroCollectionsItems>
  //       </CollapseBody>
  //     </Collapse>
  //     <Collapse style={styles.collapse}>
  //       <CollapseHeader style={styles.collapseHeader}>
  //         <HeroCollectionsTitle>Stories</HeroCollectionsTitle>
  //       </CollapseHeader>
  //       <CollapseBody style={styles.collapseBody}>
  //         <HeroCollectionsItems>
  //           {hero.stories.items.map((el, index) => (
  //             <Item key={index}>
  //               {'\u2B24 ' + el.name + ' (' + el.type + ')'}
  //             </Item>
  //           ))}
  //         </HeroCollectionsItems>
  //       </CollapseBody>
  //     </Collapse>
  //     <Collapse style={styles.collapse}>
  //       <CollapseHeader style={styles.collapseHeader}>
  //         <HeroCollectionsTitle>Events</HeroCollectionsTitle>
  //       </CollapseHeader>
  //       <CollapseBody style={styles.collapseBody}>
  //         <HeroCollectionsItems>
  //           {hero.events.items.map((el, index) => (
  //             <Item key={index}>{'\u2B24 ' + el.name}</Item>
  //           ))}
  //         </HeroCollectionsItems>
  //       </CollapseBody>
  //     </Collapse>
  //     <Footer />
  //   </DetailsComponent>
  // );
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

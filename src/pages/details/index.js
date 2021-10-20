import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, Image, Dimensions, Text} from 'react-native';
import {
  DetailsComponent,
  DetailsImage,
  HeroName,
  Divider,
  HeroDescription,
} from './styles';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Details = () => {
  const route = useRoute();

  const {hero} = route.params;
  useEffect(() => {
    console.log(SCREEN_WIDTH);
  }, []);

  return (
    <DetailsComponent>
      <StatusBar barStyle="light-content" backgroundColor="#ec1d24" />
      <DetailsImage
        source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH}
        resizeMode="stretch"
      />
      <HeroName style={{}}>{hero.name}</HeroName>
      <Divider />
      <HeroDescription>
        {hero.description
          ? hero.description
          : `${hero.name} is absent. Probably on some mission. Come back another time to get information about him.`}
      </HeroDescription>
    </DetailsComponent>
  );
};

export default Details;

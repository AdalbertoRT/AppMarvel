import {useNavigation} from '@react-navigation/native';
import React from 'react';
import handleDetails from '../../utils/handleDetails';
import {HeroCard, HeroImage, HeroInfo, HeroName} from './styles';

const RenderItem = ({item, height}) => {
  const navigation = useNavigation();

  return (
    <HeroCard onPress={() => handleDetails(item, navigation)}>
      <HeroImage
        source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
        height={height}
      />
      <HeroInfo>
        <HeroName>{item.name}</HeroName>
      </HeroInfo>
    </HeroCard>
  );
};

export default RenderItem;

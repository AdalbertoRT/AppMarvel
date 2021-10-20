import styled from 'styled-components/native';

export const DetailsComponent = styled.ScrollView`
  background-color: #151515;
  flex: 1;
`;
export const DetailsImage = styled.Image`
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
`;
export const HeroName = styled.Text`
  padding: 10px;
  font-size: 24px;
  color: #fff;
`;
export const Divider = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -5px;
  height: 5px;
  background-color: #ec1d24;
`;
export const HeroDescription = styled.Text`
  padding: 10px;
  padding-top: 20px;
  font-size: 18px;
  color: #fff;
`;

export const HeroCollectionsItems = styled.ScrollView``;

export const HeroCollectionsTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Item = styled.Text`
  padding: 0 10px;
  color: #fff;
`;

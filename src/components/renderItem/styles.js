import styled from 'styled-components/native';

export const HeroCard = styled.TouchableOpacity`
  flex: 0.5;
  flex-direction: row;
  padding: 0;
  align-items: flex-start;
  border-width: 3px;
  border-color: transparent;
`;
export const HeroImage = styled.Image`
  height: ${props => (props.height || 200) + 'px'};
  width: 100%;
`;
export const HeroInfo = styled.View`
  width: 100%;
  height: auto;
  position: absolute;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const HeroName = styled.Text`
  font-size: 20px;
  color: #fff;
`;

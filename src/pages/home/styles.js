import styled from 'styled-components/native';

export const PageHome = styled.SafeAreaView`
  background-color: #151515;
  flex: 1;
`;
export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const LoadingText = styled.Text`
  color: #fff;
`;
export const HeroCard = styled.TouchableOpacity`
  flex: 0.5;
  flex-direction: row;
  padding: 0;
  align-items: flex-end;
  border-width: 2px;
  border-color: transparent;
`;
export const HeroImage = styled.Image`
  height: 200px;
  width: 100%;
`;
export const HeroInfo = styled.View`
  width: 100%;
  height: auto;
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const HeroName = styled.Text`
  font-size: 20px;
  color: #fff;
`;

import styled from 'styled-components/native';

export const FooterComponent = styled.View`
  background-color: #ec1d24;
  justify-content: space-around;
  margin-top: 50px;
  position: absolute;
  bottom: 0;
`;

export const FooterControl = styled.View`
  padding: 0 10px;
  justify-content: space-around;
  flex-direction: row;
`;

export const SmallButton = styled.TouchableHighlight`
  background-color: #ec1d24;
  border-radius: 25px;
  border: 5px solid #151515;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  align-items: center;
  justify-content: center;
`;

export const LargeButton = styled.TouchableHighlight`
  background-color: #ec1d24;
  border-radius: 35px;
  border: 5px solid #151515;
  padding: 10px;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  align-items: center;
  justify-content: center;
`;

export const Copyright = styled.View`
  height: auto;
  border-top-width: 3px;
  border-top-color: #151515;
  width: 100%;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

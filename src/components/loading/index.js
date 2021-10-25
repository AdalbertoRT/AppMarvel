import React from 'react';
import {ActivityIndicator} from 'react-native';
import {LoadingComponent, LoadingText} from './styles';

const Loading = () => {
  return (
    <LoadingComponent>
      <ActivityIndicator size="large" color="#ec1d24" />
      <LoadingText className="loadingText">Carregando Heróis</LoadingText>
    </LoadingComponent>
  );
};

export default Loading;

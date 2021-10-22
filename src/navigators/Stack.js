import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Details from '../pages/details';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const handleHome = () => {
  const navigation = useNavigation();
  navigation.navigate('Home');
};

export default () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Details}
      options={{
        title: 'MARVEL Heroes',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'MarvelRegular',
          color: '#FFF',
          fontSize: 50,
        },
        headerStyle: {
          backgroundColor: '#ec1d24',
        },
      }}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={props => {
        const {hero} = props.route.params;
        return {
          title: hero.name,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ec1d24',
          },
          headerTitleStyle: {
            color: '#FFF',
            fontWeight: 'bold',
          },
          headerTintColor: '#FFF',
        };
      }}
    />
  </Stack.Navigator>
);

import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Details from '../pages/details';
import search from '../assets/icons/search.png';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'MARVEL',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'MarvelRegular',
          color: '#FFF',
          fontSize: 50,
        },
        headerStyle: {
          backgroundColor: '#ec1d24',
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('clicou!')}>
            <Image source={search} style={{width: 50, height: 50}} />
          </TouchableOpacity>
        ),
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

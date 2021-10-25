import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Details from '../pages/details';
import EditedHeroes from '../pages/edited-heroes';
import {useNavigation} from '@react-navigation/native';
import FilterPage from '../pages/filter';

const Stack = createNativeStackNavigator();

const handleHome = () => {
  const navigation = useNavigation();
  navigation.navigate('Home');
};

export default () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => (
          <View style={{paddingVertical: 5}}>
            <Text
              style={{
                fontFamily: 'MarvelRegular',
                fontSize: 40,
                color: '#FFF',
              }}>
              MARVEL
            </Text>
            <Text
              style={{
                fontFamily: 'MarvelRegular',
                fontSize: 18,
                color: '#FFF',
                textAlign: 'center',
              }}>
              Heroes
            </Text>
          </View>
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'MarvelRegular',
          color: '#FFF',
          fontSize: 40,
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
    <Stack.Screen
      name="EditedHeroes"
      component={EditedHeroes}
      options={{
        title: 'My Edited Heroes',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ec1d24',
        },
        headerTitleStyle: {
          color: '#FFF',
          fontWeight: 'bold',
        },
        headerTintColor: '#FFF',
      }}
    />
    <Stack.Screen
      name="Filter"
      component={FilterPage}
      options={{
        title: 'Results',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ec1d24',
        },
        headerTitleStyle: {
          color: '#FFF',
          fontWeight: 'bold',
        },
        headerTintColor: '#FFF',
      }}
    />
  </Stack.Navigator>
);

import React, {useEffect, useLayoutEffect} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Formik} from 'formik';
import close from '../../assets/icons/close.png';
import search from '../../assets/icons/search.png';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchHero} from '../../store/heroes';

const ModalSearch = ({visible, setVisible, filterPage = false}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSearch = name => {
    dispatch(fetchHero(name));
    // setHeroes([]);
    // setFilter(true);
    // navigation.navigate('Home');
    navigation.dispatch(
      navigation.replace('Filter', {
        name: name,
      }),
    );
    // navigation.push('Filter', {name});
    // );
    //navigation.navigate('Filter', {name});

    // setVisible(!visible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => setVisible(!visible)}>
          <Image source={close} style={{width: 50, height: 50}} />
        </TouchableOpacity>
        <View style={styles.modalView}>
          <Text style={styles.title}>Find the hero</Text>
          <Formik
            initialValues={{name: ''}}
            validate={values => {
              const errors = {};
              if (values.name === '') {
                errors.name = 'Enter a valid name!';
              }
              return errors;
            }}
            onSubmit={values => handleSearch(values.name)}>
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <View style={styles.form}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter the name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}

                <View style={styles.buttons}>
                  <TouchableHighlight
                    style={styles.buttonSend}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Image source={search} style={{width: 50, height: 50}} />
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.buttonCancel}
                    onPress={() => setVisible(!visible)}>
                    <Text style={styles.btnText}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
  },
  modalView: {
    borderColor: '#ec1d24',
    borderWidth: 5,
    backgroundColor: '#151515',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontFamily: 'MarvelRegular',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  form: {
    width: '100%',
    height: 'auto',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
  },
  buttons: {width: '100%', flexDirection: 'row', marginTop: 10},
  buttonSend: {
    flex: 1,
    borderRadius: 5,
    elevation: 1,
    marginRight: 5,
    backgroundColor: '#ec1d24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancel: {
    flex: 1,
    borderRadius: 5,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    borderColor: '#ec1d24',
    borderWidth: 5,
  },
  btnText: {
    color: '#ec1d24',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  close: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  error: {
    color: '#ec1d24',
    textAlign: 'center',
  },
});

export default ModalSearch;

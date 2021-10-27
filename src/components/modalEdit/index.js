import React, {useEffect, useState, useLayoutEffect} from 'react';
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
import {getData, storeData} from '../../utils/asyncStorage';
import {useNavigation} from '@react-navigation/native';

const ModalEdit = ({visible, setVisible, hero}) => {
  const [editedHero, setEditedHero] = useState([]);
  const navigation = useNavigation();
  const date = new Date();

  const getEditedHeroes = async () => {
    const response = await getData();
    setEditedHero(response);
  };

  useEffect(() => {
    getEditedHeroes();
  }, []);

  useEffect(() => {
    // if (editedHero) {
    storeData(editedHero);
    // console.log('Heroi editado: ', editedHero);
    // }
  }, [editedHero]);

  const handleStore = (name, description) => {
    const newHero = {...hero};
    newHero.name = name;
    newHero.description = description;
    newHero.modified = date.toISOString();
    // if (editedHero) {
    setEditedHero(eh => [...eh, newHero]);
    navigation.navigate('EditedHeroes');
    // }
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
        <View style={styles.modalView}>
          <Text style={styles.title}>Edit the Hero</Text>
          <Formik
            initialValues={{name: hero.name, description: hero.description}}
            validate={values => {
              const errors = {};
              if (values.name === '') {
                errors.name = 'Enter a valid name!';
              }
              if (values.description === '') {
                errors.description = 'Enter a valid description!';
              }
              return errors;
            }}
            onSubmit={values => handleStore(values.name, values.description)}>
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
                <TextInput
                  multiline={true}
                  numberOfLines={16}
                  style={styles.textArea}
                  placeholder="Enter the description"
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                />
                {errors.description && (
                  <Text style={styles.error}>{errors.description}</Text>
                )}

                <View style={styles.buttons}>
                  <TouchableHighlight
                    style={styles.buttonSend}
                    onPress={() => {
                      handleSubmit(values.name, values.description);
                    }}>
                    <Text style={styles.btnSaveText}>Save</Text>
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
      <TouchableOpacity
        style={styles.close}
        onPress={() => setVisible(!visible)}>
        <Image source={close} style={{width: 50, height: 50}} />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
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
    maxHeight: '90%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 18,
    paddingVertical: 0,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 16,
    textAlignVertical: 'top',
    maxHeight: '70%',
  },
  buttons: {width: '100%', flexDirection: 'row', marginTop: 20},
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
  btnSaveText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
    top: 18,
    right: 20,
  },
  error: {
    color: '#ec1d24',
    textAlign: 'center',
  },
});

export default ModalEdit;

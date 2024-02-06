import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Alert, StyleSheet, Pressable, Text,Image, View, Modal } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        visible = {modalVisible}
        onRequestClose={() =>{
          setModalVisible(!modalVisible);
          Alert.alert("Bạn đã tắt modal bằng nút back của thiết bị!");
        }}
        >
          <View style={styles.modalMother}> 
          <View style={styles.modalScreen}>
            <Text style={styles.textModal}>
              Hello World!
            </Text>
            <Image
              style = {{
                width: 150, height: 150
              }}
              source={require('./assets/react_native.jpg')}/>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style= {styles.button}>
              <Text style={styles.textButton}>Ẩn Modal</Text>
            </Pressable>
          </View>
          </View>
          
      </Modal>
      <Pressable 
        onPress={() => setModalVisible(true)}
        style={styles.pressableButton}>
        <Text style={styles.textPress}>Mở Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalMother: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalScreen: {
    backgroundColor: '#fff',
    // border
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    // shadow
    shadowColor: 'black',
    elevation: 30,
    // height, width
    width: 250,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textModal:{
    color: 'grey',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'darkturquoise',
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  textButton: {
    textAlign: 'center',
    lineHeight: 45,
    color: 'white',
  },
  pressableButton:{
    backgroundColor: 'green',
    height: 60,
    width: 100,
    borderRadius: 10,
  },
  textPress: {
    color: 'white',
    lineHeight: 55,
    textAlign: 'center',
  },
});

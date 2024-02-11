import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { Image, 
  FlatList, FlatListComponent, SafeAreaView ,StyleSheet, 
  Text, View, Pressable, Modal, ScrollView } from 'react-native';

// data flatlist
const DATA = [
  {
    id: '1',
    name: 'Miyah Myles',
    position: 'Data Entry Clerk',
    photo: require('./assets/avatar_1.jpg'),
  },
  {
    id: '2',
    name: 'June Cha',
    position: 'Sales manager',
    photo: require('./assets/avatar_2.jpg'),
  },
  {
    id: '3',
    name: 'Iida Niskanen',
    position: 'Sales manager',
    photo: require('./assets/avatar_3.jpg'),
  },
  {
    id: '4',
    name: 'Renee Sims',
    position: 'Medical Assistant',
    photo: require('./assets/avatar_4.jpg'),
  },
  {
    id: '5',
    name: 'Jonathan Nun~ez',
    position: 'Clerical',
    photo: require('./assets/avatar_5.jpg'),
  },
  {
    id: '6',
    name: 'Sasha Ho',
    position: 'Administrative Assistant',
    photo: require('./assets/avatar_6.jpg'),
  },
  {
    id: '7',
    name: 'Abdullah Hadley',
    position: 'Marketing',
    photo: require('./assets/avatar_7.jpg'),
  },
  {
    id: '8',
    name: 'Thomas Stock',
    position: 'Product Designer',
    photo: require('./assets/avatar_8.jpg'),
  },
  {
    id: '9',
    name: 'Sasha Ho',
    position: 'Clerical',
    photo: require('./assets/avatar_9.jpg'),
  },
  {
    id: '10',
    name: 'Renee Sims',
    position: 'Medical Assistant',
    photo: require('./assets/avatar_10.jpg'),
  },
];

const FlatListDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nameCalling, setNameCalling] =  useState('');
  const [photoCalling, setPhotoCalling] =useState('');

  const Item = ({name,photo,position}) => (
    <View style={styles.item}>
      <Image
        style={{
          width: 60, height: 60,
          borderRadius: 30,
        }}
        source={photo}
        />
      <View style={styles.itemInfor}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
      </View>
      <Pressable
        onPress={()=> 
          {setModalVisible(true);
           setNameCalling(name); 
           setPhotoCalling(photo);
          }}>
        <Text style={styles.pressCall}>Call</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(!modalVisible)}>
          <View style={styles.containerCalling}>
            <View style={styles.modalCalling}>
            <View style={styles.detailCalling}>
              <Image
                style={{
                  width: 60, height: 60,
                  borderRadius: 30,
                  marginBottom: 20,
                }}
                source={photoCalling}
              />
              <Text style={styles.callingName}>{nameCalling}</Text>
              <Text style={styles.contextCalling}>Calling...</Text>
            </View>
                <Pressable
                    onPress={() => setModalVisible(false)}>
                      <Image 
                      style={{
                        height: 60, width: 60,
                      }}
                      source={require('./assets/phone.png')}/>
                </Pressable>
            </View>
          </View>
      </Modal>

      <FlatList
        data={DATA}
        renderItem={({item}) => 
            <Item name={item.name} 
                photo={item.photo}
                position={item.position}
                />
          }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const StatusB = () => {
  return(
    <ScrollView>

    </ScrollView>
  )
}

export default StatusB;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#DCDCDC',
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
  },
  containerCalling:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCalling: {
    backgroundColor: '#22333b',
    // height, width
    width: '100%',
    height: '100%',
    // padding
    padding: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
  }, 
  detailCalling:{
    alignItems:'center',
  },
  callingName:{
    color: 'white',
    fontSize: 24,
  }, 
  contextCalling:{
    fontSize: 14,
    color: 'grey',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemInfor:{
    alignItems: 'center',
  },
  title: {
    color:'#696969',
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    color:'#696969',
  },
  pressCall: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

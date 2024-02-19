import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Pressable } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mother}>
      <TextInput 
        value={name}
        onChangeText={setName}
        style = {styles.textInp}
        placeholder='Nhập họ và tên'/>
      <TextInput 
        value={phone}
        onChangeText={setPhone}
        placeholder='Nhập số điện thoại'
        style = {styles.textInp}/>
      <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder='Nhập mật khẩu'
        style = {styles.textInp}/>

      <View style={styles.inforInput}>
        <View>
          <Text>Họ và tên: {name}</Text>
        </View>
        <View>
          <Text>Số điện thoại: {phone}</Text>
        </View><View>
          <Text>Đã nhập password: {password === ''? 'false':'true'}</Text>
        </View>
      </View>
      <View style={styles.container}>
      {/* điều chỉnh style của đoạn văn bằng cách sử dụng css trong reactnative */}
      <Text style={styles.baseText}>
        Em vào đời bằng <Text style={colorText('red')}>vang đỏ</Text> anh vào đời bằng <Text style={colorText('yellow')}>nước trà</Text></Text>
      <Text style={styles.baseText}>Bằng cơn mưa thơm 
      <Text style={{
        fontSize: 22,
        fontStyle: 'italic',
        fontWeight: 'bold',
      }}> mùi đất</Text> và 
      <Text style={{
        fontSize: 10,
        fontStyle: 'italic',
      }}> bằng hoa dại mọc trước nhà</Text></Text>
      <Text style={{
        fontStyle:'italic',
        marginTop: 10,
        color: 'grey',
        fontSize: 16,
      }}>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ</Text>
      <Text style={styles.baseText}>
        Lý trí em là{' '}
        <Text
        style={{
          textDecorationLine: 'underline',
          letterSpacing: 20,
          fontWeight: 'bold',
        }}>
          {' '}
          công cụ{' '}</Text>
          còn trái tim anh là
        <Text
        style={{
          textDecorationLine: 'underline',
          letterSpacing: 20,
          fontWeight: 'bold',
        }}>
          {' '}động cơ
          {' '}
        </Text>
      </Text>
      <Text style={{
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'right',
      }}>Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình</Text>
      <Text style={{
        fontFamily: 'Cochin',
        color: 'brown',
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình</Text>
      <Text style={{
        fontFamily: 'Cochin',
        color: 'black',
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold',
      }}>Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text> em vào đời bằng <Text style={colorText('yellow')}>nắng xanh</Text></Text>
      <Text style={{
        fontFamily: 'Cochin',
        color: 'black',
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold',
      }}>Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text> và con đường đó giờ <Text style={colorText('white')}>vắng anh</Text></Text>
      {/* <StatusBar style="auto" /> */}
      </View>
    </View>
    
  );
}
// cách để thay đổi size của component mà không cần phải viết riêng cho mỗi dòng
const colorText = (color) => ({
  color: color,
  fontWeight: 'bold',
})

const styles = StyleSheet.create({
  mother: {
    marginTop: 45,
  },
  container: {
    // flex: 1,
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
    padding: 15,
  },
  inforInput:{
    marginTop: 20,
    marginLeft: 20,
  },
  baseText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
  textInp:{
    height:50,
    width: '90%',
    borderWidth:0.5,
    borderRadius: 7,
    alignSelf: 'center',
    marginBottom:15,
    paddingLeft: 14,
  }
});

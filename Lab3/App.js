import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.mother}>
      <TextInput 
        style = {styles.textInp}
        placeholder='Nhập họ và tên'/>
      <TextInput 
        placeholder='Nhập số điện thoại'
        style = {styles.textInp}/>
      <TextInput 
        placeholder='Nhập mật khẩu'
        style = {styles.textInp}/>

      <View style={styles.container}>
      {/* điều chỉnh style của đoạn văn bằng cách sử dụng css trong reactnative */}
      <Text style={styles.baseText}>Em vào đời bằng vang đỏ anh vào đời bằng nước trà</Text>
      <Text style={styles.baseText}>Bằng cơn mưa thơm mùi đất và bằng hoa dại mọc trước nhà</Text>
      <Text>Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ</Text>
      <Text style={styles.baseText}>Lý trí em là công cụ còn trái tim anh là động cơ</Text>
      <Text style={styles.baseText}>Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình</Text>
      <Text style={styles.boldText}>Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình</Text>
      <Text style={styles.boldText}>Em vào đời bằng mây trắng em vào đời bằng nắng xanh</Text>
      <Text style={styles.boldText}>Em vào đời bằng đại lộ và con đường đó giờ vắng anh</Text>
      {/* <StatusBar style="auto" /> */}
      </View>
    </View>
    
  );
}
// cách để thay đổi size của component mà không cần phải viết riêng cho mỗi dòng
const sizeText = (size) => ({
  fontSize: size,
})
const styles = StyleSheet.create({
  mother: {
    marginTop:25,
  },
  container: {
    // flex: 1,
    backgroundColor: 'blue',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
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

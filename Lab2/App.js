import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {result_bai2()}
    </View>
  );
}

// learn how to link external link of js file
// function
const class1 = [
  {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
  },
  {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
  }
];
const class2 = [
  {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
  },
  {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
  },
]

const result_bai1 = () => {
  let totalStudent = class1.concat(class2);
  let validStudent = totalStudent.filter( (a) => a.status == 'pass');
  
  // câu hỏi: việc sắp xếp này có phải lưu vào hai mảng khác vói hai kiểu sắp xếp khác không?
  // test cách đổi chỗ hai số gọn hơn
  // let a = 10;
  // let b = 12;
  // [a,b] = [b,a];
  // console.log(a,b);
  // top avgPoint
  console.log(validStudent);
  let copyValidStudent = [...validStudent];
  const avgPointStudent = copyValidStudent.sort((a,b) => -a.avgPoint + b.avgPoint);
  console.log(`Danh sách học sinh có điểm cao nhất từ trên xuống:`)

  // kiểm tra lại cách gọi object và in object đó ra console
  for (let i=0;i<avgPointStudent.length;i++){
    console.log(`Học sinh thứ ${i+1}`);
    console.log(avgPointStudent[i]);  
  }
  // top TraningPoint
  for(let i = 0; i< validStudent.length;i++){
    for (let j = i+1; j< validStudent.length;j++){
      if (validStudent[i].avgTraningPoint < validStudent[j].avgTraningPoint){
        [validStudent[i],validStudent[j]] = [validStudent[j],validStudent[i]];
      }
    }
  }
  console.log("Danh sách học sinh theo điểm rèn luyện \n");
  const avgTraningPointStudent = copyValidStudent.sort((a,b) => -a.avgTraningPoint + b.avgTraningPoint);
  for (let i=0;i<avgTraningPointStudent.length;i++){
    console.log(`Học sinh thứ ${i+1}`);
    console.log(avgTraningPointStudent[i]);  
  }
  console.log(`Ong vàng là: `,avgTraningPointStudent[0]);
}

// Dữ liệu đầu vào được cung cấp
const oldData = [
  {code: 'ab', name: 'Son môi'},
  {code: 'ac', name: 'Sửa rửa mặt'},
  {code: null, name: null},
  {code: null, name: ''},
];

// Xử lý dữ liệu rỗng đã
const validData = oldData.filter((a)=> a.code !== null && a.name !== null);
const result_bai2 = () =>{
  console.log(validData);
  const parseArrayToObject = ({array = [], keyID = ''}) => 
    Object.fromEntries(
      array?.map(item => [keyID ? item?.[keyID] : item, item]) || [],
    );
}
// Dữ liệu đã được xử lý bằng các phương thức của mảng
const newData = {
  ab: {code: 'ab',name: 'Son môi'},
  ac: {code: 'ac', name: 'Sữa rửa mặt'},
};



// Lấy thông tin mỹ phẩm có mã "ab" newData['ab]
// Kết quả: {code:'ab', name: 'Son môi'}



// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {result_bai3()}
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
  
  console.log(`Danh sách học sinh có điểm cao nhất từ trên xuống:`);
  // kiểm tra lại cách gọi object và in object đó ra console
  printvalue(avgPointStudent);

  // top TraningPoint  
  console.log("Danh sách học sinh theo điểm rèn luyện \n");
  const avgTraningPointStudent = copyValidStudent.sort((a,b) => -a.avgTraningPoint + b.avgTraningPoint);
  printvalue(avgTraningPointStudent);
  console.log(`Ong vàng là: `,avgTraningPointStudent[0]);
}

const printvalue = (arrValue) =>{
  for (let i=0;i<arrValue.length;i++){
    console.log(`Học sinh thứ ${i+1}`);
    console.log(arrValue[i]);  
  }
}

// Dữ liệu đầu vào được cung cấp
const oldData = [
  {code: 'ab', name: 'Son môi'},
  {code: 'ac', name: 'Sửa rửa mặt'},
  {code: null, name: null},
  {code: null, name: ''},
];

const result_bai2 = () =>{
  // Xử lý dữ liệu rỗng
  const validData = oldData.filter((a)=> a.code !== null && a.name !== null);
  // console.log(validData);
  // i just try to fix => i have to update this again
  const exam =  validData.map(({code,name})=>({[code]: {code,name}}));
  const newData = {...exam[0],...exam[1]};
  // Dữ liệu đã được xử lý bằng các phương thức của mảng
  console.log(newData);
  
  // Lấy thông tin mỹ phẩm có mã "ab" newData['ab]
  console.log(newData['ab']);
}

const result_bai3 = () =>{
  // 3 promise được cung cấp
  const firstPromise = new Promise((resolve,reject)=>{
    console.log("ahihi bài 1")
    setTimeout(() => {
      resolve('foo');
    }, 1000);
  });

  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject('Error: Some bug');
      // resolve('ahaha')
    },2000);
  });

  const getList = async () =>
    await fetch('https://64d8a86c5f9bf5b879ce6dd9.mockapi.io/api/v1/moviesNow');

  // firstPromise
  //   .then(result => console.log(result));
  Promise.all([firstPromise,secondPromise,getList()])
    .then(result=> console.log(result))
    .catch(error => console.log(error,"bài 3"))
    .finally(()=> console.log("đã chạy"))
  //   Hãy viết một chương trình bất đồng bộ như nhau. Bạn được cung cấp 3 promise, 
  // công việc của bạn là phải chờ 3 promise này thực hiện xong.
  // Yêu cầu thứ nhất, nếu một promise thất bại, thì phải lập tức dừng không chạy các 
  // promise khác nữa, và log ra màn hình lỗi của promise. Nếu tất cả promise hoàn 
  // thành, log ra màn hình thông báo thành công.
  // Yêu cầu thứ hai, chương trình sẽ luôn chạy bất kề promise nào thất bại hay thành 
  // công. Nếu hoàn thành xong tất cả promise log ra màn hình thông báo thành công 
  // cho người dùng
  // console.log("bài 3");
}



// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

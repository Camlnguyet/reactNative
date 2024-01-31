

// for in
const dumpProps = (obj,objName) =>{
    let result ="";
    for (const i in obj){
        result += `${objName}.${i} = ${obj[i]}\n`;
    }
    console.log(result);
}
const myCar = {make:"Ford", model:"Mustang"};
dumpProps(myCar,"car");

// optional chaining to prevent crashing app
const array1 = null;
array1?.forEach((e) => console.log(e));
// => there's nothing happen

// promise 
let promise = new Promise(
    function(resolve, reject) {
        // setTimeout(() => resolve("done!"),1000);
        // reject();
    }
);
// finally sẽ thực hiện trước hay sau hàm then/catch (?)
// resolve sẽ invoke then
promise
    .finally(() => console.log("Hoàn thành promise"))
    .then(result => console.log("Thành công", result))
    .catch(error => console.log("Thất bại"))


// tạo một hàm async
async function makeAPICall() {
    console.log('Bắt đầu gọi API.');
    // tạo một promise gọi api
    const dataPromise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Nhận data từ API.");
            // resolve('Gọi API thành công.');
            // resolve();
            reject("Timeout")
        },2000);
    });
    return (dataReceived = await dataPromise);
}
makeAPICall()
    // add handle cho status thành công
    .then(result => console.log("Gọi API thành công"))
    // add handle cho status thất bại
    .catch(error => console.log(`Có lỗi xảy ra: ${error}.`))

// try...catch
try {
    console.log('Bắt đầu chọn.');
    lalala;
    console.log("cuối try không được chạy");
} catch (err) {
    console.log(err);
}
//throw
let json = '{ "age" : 30}'
try{
    let user = JSON.parse(json);
    // sử dụng throw để bắt lỗi ngay từ đầu thay vì phải để chương trình chạy có lỗi mới nhảy vào catch
    // sử dụng throw để khi xuất hiện lỗi (logic//syntax)
    // thì try sẽ dừng lại ngay => nhảy vào catch ngay
    if (!user.name) {
        throw new SyntaxError("Dữ liệu không tồn tại: không có name");
    }
    console.log(user.name);
} catch(err){
    console.log("JSON Error: "+err.message);

}
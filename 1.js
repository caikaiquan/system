// var reg = /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/;

// console.log(reg.test('192.10.1.1'));
// console.log(reg.test('192.-1.1.1'));
// console.log(reg.test('256.10.1.1'));

let obj = { name:'123',age:18}
for(let key in obj){
    console.log(key,obj[key]);
}
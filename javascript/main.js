// // var a = 1;
// // 0.56
// // 'asdfasdf'
// // true false
// // []
// // {}
// // null
// // undefined

// // var b;
// // b = 12;
// // b = "asdfsfd";
// // b = true;
// // b = [2, 4, 5];

// // console.log(b);

// // const a;

// // a = 34;

// // console.log(a);

// // int a =12;
// // String b = "asdfasdf"
// // float b =0.454

// // console.log(a);

// // var a = 1;
// // var b = 2;
// // var c = a % b;
// // console.log(a <= b);

// // if (a <= b || a !== 0 || b !== 0) {
// // if (!a) {
// //   console.log("True");
// // } else {
// //   console.log("False");
// // }

// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// // let a = 0;
// // while (a < 10) {
// //   console.log(a);
// //   a++;
// // }
// // let a = 11;
// // do {
// //   console.log(a);
// // } while (a < 10);

// // function add(a, b) {
// //   if (b === 0) {
// //     return;
// //   }
// //   let res = a / b;
// //   return res;
// // }

// // function temp() {
// //   return 10;
// // }

// // console.log(add(1, temp));

// // const add = (a, b) => a + b;

// // const result = add(1, 1);

// // add(10, 5);
// // add();

// // const a =1;
// // const b = 2
// let arr = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   true,
//   false,
//   null,
//   undefined,
//   "asdfasdf",
//   "d",
//   9.0,
//   [1, 2, 3, 4, 5],
//   // add(),
//   {
//     name: "asdfasdf",
//     username: "asdf",
//   },
// ];

// arr[15] = "asdfasdf";

// console.log(arr[14].username);

// // console.log(arr[13][2]);
// console.log(arr);
// arr.push(13);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// const obj = {
//   name: "jhone",
//   email: "jhone@gmail.com",
//   phone: 98123435123,
//   // myFun: add(),
//   arr: [1, 3, 4, 5, 6, 7],
//   address: {
//     country: "Nepal",
//     city: "Itahari",
//   },
// };

// obj.password = "ajsdflasdf";

// // console.log(obj.name, obj.email, obj.address.country);
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10, 11, 12];

// let arr3 = arr1;
// // console.log(arr3.length);
// let init = arr3.length;
// // console.log(init);

// let condition = arr3.length + arr2.length;
// // console.log(condition);

// let count = 0;

// for (let i = init; i < condition; i++) {
//   arr3[i] = arr2[count];
//   count++;
// }
// console.log(arr3);

// // arr3 = arr2;
// // console.log(arr3);

// // setTimeout
// // setInterval

// // const myFun = () => {};

// // const timeOut = setTimeout(() => {
// //   myFun();
// // }, 2000);

// // if (isLogin) {
// //   clearTimeout(timeOut);
// // }

// try {
//   let sec = 0;
//   let min = 0;
//   let hrs = 0;
//   const intervel = setInterval(() => {
//     // console.log("Intervel");
//     // if (sec === 5) {
//     //   clearInterval(intervel);
//     //   return;
//     // }

//     if (sec === 10) {
//       sec = 0;
//       min++;
//     }
//     sec++;
//     console.log("Min: " + min + " Sec: " + sec);
// minText.innterHTML = min;
// hrsText.innterHTML = hrs;
// isSecureContext.innterHTML = sec;
//   }, 1000);
// } catch (err) {
//   console.log(err);
// } finally {
// }

// clearInterval();

// const fetchAPI = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       // JSON.parse(res);
//       console.log(res.json());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// fetchAPI();

// const a = "1"
// parseInt(a)

// JSON.stringify(data);

// const user = {
//   id: 1,
//   name: "Jhon",
//   email: "jhon@gmail.com",
//   role: "user",
// };

// localStorage.setItem("user", JSON.stringify(user));

// const getUser = localStorage.getItem("user");
// console.log(JSON.parse(getUser));

// const handleDelete = () => {
//   localStorage.removeItem("user");
// };

// const handleUpdate = () => {
//   handleDelete();
//   localStorage.setItem(asdf);
// };

// const handleStart = () => {};
// const handleReset = () => {};

// login.innterHTML = "SignIn"

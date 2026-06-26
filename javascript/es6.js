// const name = "jhon";
// const address = "Itahari";
// const phone = "9812345678";

// console.log(
//   "Welcome " + name + ". " + "Lives in " + address + ". " + "contact: " + phone,
// );

// console.log(`Welcome ${name}. Lives in ${address}. Contact: ${phone}`);

// const arr = [1, 2, 3, 4, 5, 6, 78, 9];

// const [a, b, d, e, f] = arr;

// console.log(a, b, d, e, f);

// const obj = {
//   name: "Jhon",
//   email: "jhon@gmail.com",
//   role: "user",
//   phone: "9812345678",
// };

// const { name, email, role, phone } = obj;

// const { name, email, phone, role } = obj;

// // console.log(name);

// const fun = (a, b = 0) => {
//   console.log(a + b);
// };

// fun(2, 8);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];

// const arr3 = [...arr1, ...arr2, 11, 12, 13, 14];

// console.log(arr3);

// const arr = [1, 2, 3, 4, 5, 6, 78, 9];
// const [a, b, d, e, f, ...res] = arr;

// console.log(res);

// const obj = {
//   id: 12,
//   name: "Jhon",
//   email: "jhon@gmail.com",
//   role: "user",
//   phone: "9812345678",
//   password: "asdjfashdflasjd",
// };

// const { password, id, ...others } = obj;

// console.log(others);

const arr = [1, 2, 3, 4, 5, 6, 78, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
arr.map((element, index) => {
  console.log(`Index: ${index} : Element: ${element}`);
});

const api = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
  },
];

api.map((items, index) => {
  <div>
    <h1>{items.title}</h1>
    <p>{items.body}</p>
  </div>;
});

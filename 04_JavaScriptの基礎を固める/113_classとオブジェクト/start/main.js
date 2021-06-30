
// const hoge = 'hoge';

// {
  // console.log(hoge);
  //↑巻き上げが発生しないのであれば、ここで'hoge'が出力されるはずだが、
  //宣言が巻き上げられているので、ReferenceErrorが返る
  // const hoge = 'hoge2';
// }

// console.log(this);

// let user = {
//   firstName: "太郎",
//   lastName: "田中"
// }

// function getFullName(firstName, lastName) {
//   console.log(this);
//   let fullName = `${lastName}${firstName}`;
//   console.log(fullName);
// }

// const user = {
//   firstName: "太郎",
//   lastName: "田中"
// }

// function getFullName(firstName, lastName) {
//   console.log(this.firstName, this.lastName);
//   return lastName + firstName;
// }

// getFullName(user.firstName, user.lastName);


// const getFullName = function (firstName, lastName) {
//   console.log(this);
// return `${lastName}${firstName}`;
// }

// const userName = getFullName(user.firstName, user.lastName);
// console.log(fullName);

//   let user = {
//     firstName: "花子",
//     lastName: "鈴木",
//     getFullName: function () {
//       console.log(this);
//       // const that = this;
//       window.setTimeout(function () {
//         console.log(this);
//       }.bind(this))
//       return `${this.lastName} ${this.firstName} `;
//     }
//   }

// const userName = user.getFullName();
// console.log(userName);

// const user = {
//     firstName: "花子",
//     lastName: "鈴木",
//   getFullName: function () {
//     console.log(this)
//       return `${this.lastName} ${this.firstName} `;
//     }
//   }
//   const userName = user.getFullName();
//   console.log(userName);               


const user = {
  firstName: "太郎",
  lastName: "田中"
}

function getFullName(firstName, lastName) {
  console.log(this)
  return `${lastName}${firstName}`;
}

const userName = getFullName(user.firstName, user.lastName);
console.log(userName);

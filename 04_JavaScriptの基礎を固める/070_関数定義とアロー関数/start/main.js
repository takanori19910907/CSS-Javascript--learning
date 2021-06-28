
// 関数式
// function hello(name) {
//   console.log('hello' + name)
// }

// 関数宣言: 呼び出しより下に書くとエラーが発生する
// const hello = function(name) {
//   console.log('hello' + name)
// }

// アロー関数
//// 引数が１つの場合は()を省略化
// const hello = name => {
//   console.log('hello' + name)
// }

//// 処理内容が１行の場合は{}を省略化

const hello = name => console.log('hello' + name)

hello('taro');

const array = [1, 2, 3, 4, 5, 6];

array.forEach(value => console.log(value));

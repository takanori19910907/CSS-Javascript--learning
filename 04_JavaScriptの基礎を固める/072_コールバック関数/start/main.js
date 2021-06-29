
// 関数に関数を関数式を渡す例
//// hello関数を実行し、処理の中でgetName関数を実行
// function hello(callBack, lastName) {
//   console.log(' hello ' + callBack(lastName));
// }

// hello関数から呼び出され文字列をhello関数に返す
// function getName() {
//   return 'Code Mafia';
// }

// ①hello関数を呼び出す時にgetName関数を引数として渡す
// hello(getName);

// 関数に無名関数を渡す例
//// helloの処理の中で無名関数が実行される(無名関数からの返り値をログとして表示)
// function hello(callBack, lastName) {
//   console.log(' hello ' + callBack(lastName));
// }

// hello関数の呼び出しの引数として無名関数を渡す
// hello(function (name) { return 'code' + name; }, 'Mafia')


function doSomething(a, b, callBack) {
  const result = callBack(a, b);
    console.log(result);
}

function plus(a, b) {
  return a + b;
}
  
function multiply(a, b) {
  return a * b;
}

doSomething(2, 2, multiply);

doSomething(2, 3, plus);
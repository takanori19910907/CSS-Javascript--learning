const str = 'animation';
const strArry = str.split('');


// 課題: 『animation』という文字列を <a><n>...と加工する


function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

// forEachで配列要素１つずつtag関数を呼び出して文字列に加工を加える
function reduce(callBack, arry,  defaultValue) {
  let accu = defaultValue;
  arry.forEach(curr => {
    accu = callBack(accu, curr);         //ここではcallBack関数の返り値をaccuとして再代入し、次の繰り返し処理で再利用している
  })
  return accu
}

// reduce関数を呼び出してtag関数、配列、accuの初期値となる空文字を渡す
const result = reduce(tag, strArry, "" );
console.log(result);
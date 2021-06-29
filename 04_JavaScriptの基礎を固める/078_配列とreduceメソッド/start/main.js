const arry = [1,2,3,4,5];

arry.reduce(
  function (accu, curr) {
  console.log(accu, curr);
    // return accu * curr;
  }, 10);

const str = "animation";
const strArry = str.split('');
console.log(strArry);


// accu(前回のループで帰ってきた値) + curr(オブジェクトから受け取った値)
const result = strArry.reduce((accu, curr) => {
  // return accu + '<' + curr + '>';
  return `${accu} <${curr}> `;
}, "");

console.log(result)
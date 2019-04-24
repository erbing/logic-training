/**
 * @param  {} a
 * @param  {} b
 * @param  {} c
 */
var a = [0, 1];
var b = [3, 4, 5];

var c = [6, 7];

const test = (...lists) => {
  // let resArr = [];
  // lists.map(list => {
  //   console.log(list);
  // });
};

const getArranging = (a, b, c) => {
  // TODO - 返回参数的排列组合
  let resArr = [];

  // let item = [1, 2, 3, 4];
  // let add = item.reduce((prev, cur, index, item) => {
  //   console.log(prev, cur, index);
  //   return prev + cur;
  // });

  Array.from([a, b, c], item => {
    // if (Object.prototype.toString.call(item) == '[object Array]') {
    //   Object.prototype.toString.call(item) == '[object Array]'  === Array.isArray(item)
    //   for (let i = 0; i < item.length; i++) {
    //     const e = item[i];
    //     getArranging(e);
    //   }
    // } else {
    //   resArr.push(a);
    // }
  });
  return resArr;
};

let ret = getArranging(a, b, c);
console.log(ret);

let rets = test(a, b);
console.log(rets);

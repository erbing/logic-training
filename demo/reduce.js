/**
 * demo one
 *
 **/
/**
 * demo two  最简单的用法
 **/
let items = [1, 2, 2, 2, 2, 2];
let reducer = (per, cur) => per + cur;
let total = items.reduce(reducer, 0);
console.log(total);

/**
 * demo two  测试要不要初始值的时候的差异
 **/

var arr = [1, 2, 3, 4];
var sum = arr.reduce((pre, cur, index, arr) => {
  console.log(pre, cur, index);
  return pre + cur;
}, 0);
console.log(sum);

/**
 * demo three  测试要不要初始值的时候的差异
 **/
var arr = [1, 2, 3, 4];
var sum = arr.reduce((pre, cur) => pre + cur, 0);
var mul = arr.reduce((pre, cur) => pre * cur, 1);
console.log(sum);
console.log(mul);

/**
 * demo four  reduce 的高级用法一、选择出当前数组 重复项最多的一个 数字
 **/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 213, 2, 321, 2, 3, 13, 2, 1, 3, 14];

let newArr = arr.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {});

console.log(newArr);

/**
 * demo four  reduce 的高级用法二、数组去重
 **/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 213, 2, 321, 2, 3, 13, 2, 1, 3, 14];
let newArr = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    return pre.concat(cur);
  } else {
    return pre;
  }
}, []);
console.log(newArr);

/**
 * demo five  reduce 的高级用法三、将二维数组 改成 一维数组
 **/
let arr = [[0, 1], [2, 3], [4, 5]];
let newArr = arr.reduce((pre, cur) => {
  return pre.concat(cur);
}, []);
console.log(newArr); // [0, 1, 2, 3, 4, 5]

/**
 * demo six  reduce 的高级用法四、将多维数组 改成 一维数组
 **/
let arr = [[0, 1], [2, 3], [4, [5, 6, 7]]];

let getArr = arr => {
  let newArr = arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? getArr(cur) : cur);
    // return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
  }, []);
  return newArr;
};

console.log(getArr(arr), 'xxx');

// 实现方法二
let newArr = arr.toString().split(',');

/**
 * demo seven  reduce 的高级用法五、对象里的属性求和
 **/
var result = [
  {
    subject: 'math',
    score: 10,
  },
  {
    subject: 'chinese',
    score: 20,
  },
  {
    subject: 'english',
    score: 30,
  },
];

let allScores = result.reduce((pre, cur) => {
  return pre + cur.score;
}, 0);
console.log(allScores);

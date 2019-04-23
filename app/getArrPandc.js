/*
*
* 打印出：
[[0,0,0,0],[0,0,0,1],[0,0,1,0],[0,0,1,1],[0,1,0,0],[0,1,0,1],[0,1,1,0],[0,1,1,1],
[1,0,0,0],[1,0,0,1],[1,0,1,0],[1,0,1,1],[1,1,0,0],[1,1,0,1],[1,1,1,0],[1,1,1,1]]
*
*/

const getArr = size => {
  let resArr = [];
  for (let i = 0; i < size ** 2; i++) {
    let e = i.toString(2);
    if (e.length < 4) e = Array(size - e.length + 1).join(0) + e;
    let eArr = e.split('').map(item => Number(item));
    resArr.push([eArr]);
  }
  return resArr;
};

let arr = getArr(4); //    给定组合长度为4
console.log(arr);

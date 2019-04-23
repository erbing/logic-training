/*
 * 根据传入的数字，返回其中包含的最大的连续五位数
 * e.g.
 * maxFiveDigits(283910356876)   // =>91035
 * maxFiveDigits(123456) //  => 23456
 */
const maxFiveDigits = nums => {
  //TODO:完成该函数
  let num = nums + '';
  if (num.length <= 5) return num;
  let temp = 0;
  for (let i = 0; i < num.length - 4; i++) {
    const e = num.substr(i, 5); // substring[start, end)? slice[start, end)? substr(start, length)
    temp = e >= temp ? e : temp;
  }
  return Number(temp);
};

export default maxFiveDigits;

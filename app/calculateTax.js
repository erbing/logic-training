/*
 * 根据2019年 新个税政策计算，每月个人应缴纳 个人所得税
 * e.g.
 * // 年收入
 * const yearIncome = [36000, 144000, 300000, 420000, 660000, 960000]
 * // 对应不同阶段的税率
 * const newTax = [3, 10, 20, 25, 30, 35, 45]
 *
 * 是否有 专项扣除
 * const  deduct = []
 *
 * calculateTax(salary, deductType)
 *
 * salary: 月薪
 * deductType： 专项扣除类型，如果无 则为 0
 */

// 专项扣除 amount 代表每月 金额

const deduct = [
  {
    name: '子女教育',
    type: 1,
    amount: 1000,
  },
  {
    name: '继续教育',
    type: 2,
    amount: 400,
  },
  {
    name: '住房贷款利息',
    type: 3,
    amount: 1000,
  },
  {
    name: '住房租金',
    type: 4,
    amount: 1500,
  },
  {
    name: '赡养老人',
    type: 5,
    amount: 2000,
  },
  {
    name: '大病医疗',
    type: 6,
    amount: 6000,
  },
];

const calculateTax = (salary, deductType) => {
  // todo
};

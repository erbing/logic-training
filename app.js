// 常规 sort 排序方式
import sortArray from './arraySort/index'
import findMax from './findMax/index'

const appDOM = document.getElementById("app")
const arr = [1,12,3,43,5,6,3,3,42,6,3,1,2,3,43,5,6,3,3,41,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3,1,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,31,2,3,43,5,6,3,3,45,64,3]

// appDOM.innerHTML = sortArray(arr)

appDOM.innerHTML = findMax(arr)
const findMax = (arr) => {
    let newObj = {}
    if(!arr.length) return '数组不能为空噢~'
    if (arr.length == 1) return arr[0]
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(!newObj[e]) newObj[e] = 0
        newObj[e] = newObj[e] + 1
    }
    let objKeys = Object.keys(newObj)
    let objVaule = Object.values(newObj)
    let maxIndex = objVaule.indexOf(Math.max(...objVaule))
    let maxRepeatValue = objKeys[maxIndex]
    return objVaule
}

export default findMax
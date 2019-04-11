const arrSort = (arr) => {
    let newArr = []
    console.log(new Date().getTime())
    newArr = arr.sort( (a,b) => a - b )
    console.log(new Date().getTime())
    return newArr
}

export default arrSort
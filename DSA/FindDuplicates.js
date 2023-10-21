const findDuplicateEle = (inputArr) => {
    let duplicateEleArr = [];
    let uniqueArr = [];
    for(let i=0; i<inputArr.length; i++)
    {
        if(!uniqueArr.includes(inputArr[i]))
            uniqueArr.push(inputArr[i])
        else
            duplicateEleArr.push(inputArr[i])
    }
    return duplicateEleArr;
}
console.log(findDuplicateEle([1,2,3,5,3,1,9]));
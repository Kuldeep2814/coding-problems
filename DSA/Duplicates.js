const removeDuplicateEle = (data) => {
    let uniqueArr = [];
    for(let i=0; i<data.length; i++)
    {
        if(!uniqueArr.includes(data[i]))
            uniqueArr.push(data[i])
    }
    return uniqueArr;
}
console.log(removeDuplicateEle([1,2,3,5,3,1,9]));
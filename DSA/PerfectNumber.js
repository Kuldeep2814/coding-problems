const isPerfectNum = (inputNum) => {
    let result = true;
    let factSum = 0;
    for(let i=1; i<inputNum; i++)
    {
        if(inputNum % i == 0)
            factSum = factSum+i;
    }
    return (factSum == inputNum) ? true : false;
}
console.log(isPerfectNum(6));
console.log(isPerfectNum(10));
console.log(isPerfectNum(28));
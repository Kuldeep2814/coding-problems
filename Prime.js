// Find all repeated numbers from an array

const inputData = [1,2,4,5,6,1,3,7,9,10]

const findUniqueNos = (inputData) => {
    let uniqueNumbers = []
    inputData.map(number => {
     let counts = uniqueNumbers.filter(uniqueNo => uniqueNo == number)
     if(counts.length != 1) uniqueNumbers.push(number)
    })
    return uniqueNumbers
  }
  console.log(findUniqueNos(inputData));
function getPhoneNumber(s) {
    // Write your code here
    const getPhoneMap = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };
    
    const words = s.split(' ');
    let result = '';
    
    for (let word of words){
        
        if (word === 'double' || words === 'triple'){
            const nextWord = words[words.indexOf(word) + 1];
            const digit = getPhoneMap[nextWord[0]];
            const repeatCount = word === 'double' ? 2 : 3;
            result += digit.repeat(repeatCount);
        } else {
            result += getPhoneMap[word];
        }
    }
    
    return result;
}


console.log(getPhoneNumber("two one nine six eight one six four six zero"));
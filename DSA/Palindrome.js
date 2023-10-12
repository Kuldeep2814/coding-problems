function palindrome(data){
    let start = 0;
    let end = data.length-1;
    let result = true;
    while(end>start){
        if(data[start]!==data[end]){
            return false;
        }
        start++;
        end--;
    }
    return result;
}

let item = "level";
console.log(palindrome(item));
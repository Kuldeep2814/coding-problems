let data = [40, 30, 12, 25];

for(i=0; i<data.length; i++){
    for(j=0; j<data.length; j++){
        if(data[j]>data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data);
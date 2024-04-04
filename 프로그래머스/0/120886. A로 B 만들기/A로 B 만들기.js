function solution(before, after) {
    let sortedArr1 = '';
    let sortedArr2 = '';
    let result = 0;
    let cnt = 0;
    
    sortedArr1 = before.split("").sort();
    sortedArr2 = after.split("").sort();
    
    console.log(sortedArr1);
    console.log(sortedArr2);
    for(let i = 0; i < sortedArr1.length; i++){
        if ( sortedArr1[i] === sortedArr2[i] ){
            cnt++;
        } 
    }
    if ( cnt === sortedArr1.length ){
        result = 1;
    }
    return result;
}
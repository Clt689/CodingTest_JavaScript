function solution(array, n) {
    let count = 0;
    
    for(let i=0; i < array.length; i++){
        if ( n == array[i] ){
            count++;
        }
    }
    return count;
}
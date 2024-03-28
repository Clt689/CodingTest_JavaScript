function solution(array) {
    let arr = '';
    let result = 0;
    for(let i=0; i < array.length; i++){
        arr += array[i];
    }
    for(let i=0; i < arr.length; i++){
        if( Number(arr[i]) === 7){
            result++;
        }
    }
    return result;
}
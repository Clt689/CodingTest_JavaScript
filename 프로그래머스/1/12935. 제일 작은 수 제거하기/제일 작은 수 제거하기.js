function solution(arr) {
    let minNum = arr[0];
    let minIndex = 0;
    let newArr = [];
    if ( arr.length >= 2){
        for(let i=0; i < arr.length; i++){
            if ( arr[i] < minNum){
                minNum = arr[i];
                minIndex = i;
            }
        }
        console.log(minIndex);
        for(let i=0; i < arr.length; i++){
            if ( i === minIndex ){
                continue;
            }
            else{
                newArr.push(arr[i]);
            }
        }
    }
    else if ( arr.length <= 1){
        newArr[0] = -1;
    }

    return newArr;
}
function solution(array) {
    let count = 0;
    while (true){
    for(let i = 0; i < array.length; i++){
        if( array[i] > array[i+1] ){
            var tmp = array[i+1];
            array[i+1] = array[i];
            array[i] = tmp;
        }
    }
        count++;
        if(count === array.length){
            break;
        }
    }
        console.log(array);
    return array[Math.floor(array.length/2)];
}

// 1. 정렬
// 2. 가운데 값 꺼내기
function solution(sizes) {
    let size = 0;
    let arr = [];
    let widthArr = [];
    let heightArr = [];
    for(let i=0; i < sizes.length; i++){
        arr.push(sizes[i].sort((a,b) => b - a));
    }
    for(let i=0; i < arr.length; i++){
        widthArr.push(arr[i][0]);
        heightArr.push(arr[i][1]);
    }
    widthArr.sort((a,b) => a - b);
    heightArr.sort((a,b) => a - b);
    size = widthArr[widthArr.length - 1] * heightArr[heightArr.length - 1]
    return size;
}
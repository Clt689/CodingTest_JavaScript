function solution(wallpaper) {
    let result = [];
    let xArr = [], yArr = [];
    for(let i=0; i < wallpaper.length; i++){
        for(let j=0; j < wallpaper[i].length; j++){
            if ( wallpaper[i][j] === '#'){
                xArr.push(i);
                yArr.push(j);
            }
        }
    }
    xArr.sort((a,b) => a - b);
    yArr.sort((a,b) => a - b);
    result[0] = xArr[0];
    result[1] = yArr[0];
    result[2] = xArr.pop() + 1;
    result[3] = yArr.pop() + 1;
    return result;
}
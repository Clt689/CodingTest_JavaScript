function solution(dots) {
    let answer = 1;
    let max_Xpoint = -256;
    let max_Ypoint = -256;
    let min_Xpoint = dots[0][0];
    let min_Ypoint = dots[0][1];
    for(let i=0; i < dots.length; i++){
        if( dots[i][0] > max_Xpoint ){
            max_Xpoint = dots[i][0];
        }
        else if( dots[i][1] > max_Ypoint ){
            max_Ypoint = dots[i][1];
        }
        else if( dots[i][0] < min_Xpoint ){
            min_Xpoint = dots[i][0];
        }
        else if( dots[i][1] < min_Ypoint ){
            min_Ypoint = dots[i][1];
        }
        console.log(dots[i][1]);
    }
    console.log(max_Xpoint, min_Xpoint, max_Ypoint, min_Ypoint);
    answer = (max_Xpoint - min_Xpoint) * (max_Ypoint - min_Ypoint);
    return answer;
}
function solution(board) {
    // 위험 지역을 표시할 새로운 2차원 배열
    let dangerArr = Array.from(Array(board.length), () => Array(board.length).fill(0));
    console.log(dangerArr);
    const length = board.length;
    
    for(let i=0; i<length; i++) {
        for(let j=0; j<length; j++) {            
            if(board[i][j] === 1) {
                dangerArr[i][j] = 1;

                if(i > 0) {   
                    dangerArr[i-1][j-1] = 1;
                    dangerArr[i-1][j] = 1;
                    dangerArr[i-1][j+1] = 1;   
                    
                    dangerArr[i][j-1] = 1;
                    dangerArr[i][j] = 1;
                    dangerArr[i][j+1] = 1;  
                }
                
                if(i + 1 < length) {
                    dangerArr[i][j-1] = 1;
                    dangerArr[i][j] = 1;
                    dangerArr[i][j+1] = 1;  
                    
                    dangerArr[i+1][j-1] = 1;
                    dangerArr[i+1][j] = 1;
                    dangerArr[i+1][j+1] = 1;
                }
            }
        }
    }
    
    // 안전지대 
    let safe = 0
    
    for(let x=0; x<length; x++) {
        for(let y=0; y<length; y++) {
            if(dangerArr[x][y] === 0) {
                safe++;
            }
        }
    }
    
    return safe;
}
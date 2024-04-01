function solution(keyinput, board) {
    let answer = [0, 0];
    for(let i=0; i < keyinput.length; i++){
        if(keyinput[i] === "left" && answer[0] > -parseInt(board[0]/2) ){
            answer[0] += -1;
        }
        else if (keyinput[i] === "right" && answer[0] < parseInt(board[0]/2) ){
            answer[0] += 1;
        }
        else if (keyinput[i] === "down" && answer[1] > -parseInt(board[1]/2) ){
            answer[1] += -1;
        }
        else if (keyinput[i] === "up" && answer[1] < parseInt(board[1]/2) ){
            answer[1] += 1;
        }
    }
    
    console.log(answer);
    
    if( answer[0] > parseInt(board[0]/2) ){
        answer[0] = parseInt(board[0]/2);
    }
    else if( answer[0] < -parseInt(board[0]/2) ){
        answer[0] = -parseInt(board[0]/2);
    }
    else if( answer[1] > parseInt(board[1]/2) ){
        answer[1] = parseInt(board[1]/2);
    }
    else if( answer[1] < -parseInt(board[1]/2) ){
        answer[1] = -parseInt(board[1]/2);
    }
    return answer;
}
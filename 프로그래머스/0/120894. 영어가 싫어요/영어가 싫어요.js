function solution(numbers) {
    let answer = "";
    let check_arr = '';
    for(let i=0; i < numbers.length; i++){
        check_arr += numbers[i];
        
        if(check_arr === 'one'){
            answer += "1";
            check_arr = '';
        }
        else if(check_arr === 'two'){
            answer += "2";
            check_arr = '';
        }
        else if(check_arr === 'three'){
            answer += "3";
            check_arr = '';
        }
        else if(check_arr === 'four'){
            answer += "4";
            check_arr = '';
        }
        else if(check_arr === 'five'){
            answer += "5";
            check_arr = '';
        }
        else if(check_arr === 'six'){
            answer += "6";
            check_arr = '';
        }
        else if(check_arr === 'seven'){
            answer += "7";
            check_arr = '';
        }
        else if(check_arr === 'eight'){
            answer += "8";
            check_arr = '';
        }
        else if(check_arr === 'nine'){
            answer += "9";
            check_arr = '';
        }
        else if(check_arr === 'zero'){
            answer += "0";
            check_arr = '';
        }
    }
    return Number(answer);
}
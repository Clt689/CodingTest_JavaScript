function solution(food) {
    let answer = [0];
    for(let i = food.length-1; i > 0; i--){
        if ( food[i] % 2 === 0 ){
            for(let j=1; j <= food[i]/2; j++){
                answer.push(i);
                answer.unshift(i);
            }
        }
        else{
            for(let j=1; j <= (food[i]-1)/2; j++){
                answer.push(i);
                answer.unshift(i);
            }
        }
    }
    return answer.join('');
}
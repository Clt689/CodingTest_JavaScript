function solution(k, score) {
    let answer = [];
    let legend = [];
    for(let i=0; i < score.length; i++){
        legend.push(score[i]);
        legend.sort((a, b) => b - a);
        if ( legend.length > k ){    // k일 다음부터는,
            legend.slice(k-1);
            answer.push(legend[k-1]);
        }
        else{
            answer.push(legend[legend.length-1]);
        }
    }
    return answer;
}
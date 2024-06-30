function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    one.name = 1; one.count = 0;
    two.name = 2; two.count = 0;
    three.name = 3; three.count = 0;
    for(let i=0; i < answers.length; i++){
        if ( answers[i] === one[i % one.length] ){
            one.count++;
        }
        if ( answers[i] === two[i % two.length] ){
            two.count++;
        }
        if ( answers[i] === three[i % three.length] ){
            three.count++;
        }
    }
    let countArr = [one.count, two.count, three.count];
    let max = Math.max(...countArr);
    let index = countArr.indexOf(max) + 1;
    let answer = [];
    for(let i=0; i <= 2; i++){
        if ( max === countArr[i] ){
            answer.push(i+1);
        }
    }
    return answer;
}
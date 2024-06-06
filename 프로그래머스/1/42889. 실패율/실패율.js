function solution(N, stages) {
    let answer = [];
    let data = [];
    let stagesCount = 0;
    let reachedCount = 0;
    let failureRate = 0;

    for(let i = 1; i < N+1; i++) {
        for(let j = 0; j < stages.length; j++) {
            if(i === stages[j]) {
                stagesCount++;
            }
            if(i <= stages[j]) {
                reachedCount++;
            }
        }
            failureRate = stagesCount / reachedCount;
            data.push({stageNum: i, failureRate: failureRate}); // 객체로 구성한 부분
        
            stagesCount = 0;
            reachedCount = 0;
    }
    
    data.sort((a, b) => b.failureRate - a.failureRate);
    data.map((x) => answer.push(x.stageNum));

    return answer;
}
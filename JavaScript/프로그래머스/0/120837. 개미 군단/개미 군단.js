function solution(hp) {
    let sum = 0;
    
    const generalAnt = parseInt(hp / 5);
    const soldierAnt = parseInt((hp % 5) / 3);
    const workAnt = (hp % 5) % 3;
    
    sum = generalAnt + soldierAnt + workAnt;
    return sum;
}
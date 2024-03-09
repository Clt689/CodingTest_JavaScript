function solution(hp) {
    var answer = 0;
    var topAnt, midAnt, botAnt = 0; 
    topAnt = parseInt(hp/5);
    midAnt = parseInt( (hp - topAnt*5) / 3);
    botAnt = hp - (topAnt*5 + midAnt*3);
    return topAnt + midAnt + botAnt;
}
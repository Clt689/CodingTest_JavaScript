var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z' };


function solution(letter) {
    let currentMorse = '';
    let answer = '';
    for (let i=0; i < letter.length; i++){
        const item = letter[i];
        if (item === ' '){
            answer = answer + morse[currentMorse];
            currentMorse = '';
        } else {
            currentMorse += item;
        }
    }
    answer = answer + morse[currentMorse];
    currentMorse = '';
    return answer;
}
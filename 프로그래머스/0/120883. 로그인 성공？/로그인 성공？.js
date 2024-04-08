function solution(id_pw, db) {
    let answer = 'fail';
    for(let i=0; i < db.length; i++){
        if ( id_pw[0] === db[i][0] ){
            for(let j=0; j < 2; j++){
                if ( id_pw[1] === db[i][j] ){
                    answer = "login";
                    break;
                }
                else {
                    answer = "wrong pw";
                }
            }
        }
    }
    return answer;
}
function solution(age) {
    var answer = '';
    var engAge = ['a','b','c','d','e','f','g','h','i','j'];
    var lastNum = 0, middleNum = 0, firstNum = 0;
    if (age > 0 && age < 10){
        answer = engAge[age];
    }
    else if (age >= 10 && age < 100){
        middleNum = parseInt(age/10);
        lastNum = age % 10;
        answer = engAge[middleNum] + engAge[lastNum];
    }
    else if (age >= 100 && age < 1000){
        firstNum = parseInt(age/100);
        middleNum = parseInt( ((age%100) - (age%10)) / 10);
        lastNum = age % 10;
        answer = engAge[firstNum] + engAge[middleNum] + engAge[lastNum];
    }
    else if (age === 1000){
        answer = "baaa";
    }
    return answer;
}
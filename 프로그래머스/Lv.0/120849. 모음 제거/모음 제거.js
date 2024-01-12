function solution(my_string) {
    var answer = '';
        answer = my_string.replace(/['a','e','i','o','u']/g, '');
    return answer;
}
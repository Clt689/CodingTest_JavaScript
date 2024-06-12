const solution = (N, data) => {
	let sum = 0;
	for(let i=0; i < N; i++){
		if ( data[i][1] === '+'){
			sum += ( Number(data[i][0]) + Number(data[i][2]) );
		}
		else if ( data[i][1] === '-'){
			sum += ( data[i][0] - data[i][2] );
		}
		else if ( data[i][1] === '*'){
			sum += ( data[i][0] * data[i][2] );
		}
		else if ( data[i][1] === '/'){
			sum += parseInt( data[i][0] / data[i][2] );
		}
	}
	console.log(sum);
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = 0;
  let count = 0;
	const data = [];

  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      data.push(line.split(' ').map((el) => el));
      count += 1;
    }
    if (N === count) {
      rl.close();
    }
  }

  solution(N, data);
  process.exit();
})();
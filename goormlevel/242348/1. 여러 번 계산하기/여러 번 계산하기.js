const solution = (N, data) => {
	for(let i=0; i < N; i++){
		console.log(Number(data[i][0]) + Number(data[i][1]) );
	}
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = 0;
  let count = 0;
	const data = [];
	const aData = [];
	const bData = [];

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
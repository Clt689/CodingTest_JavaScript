// Run by Node.js
const readline = require('readline');

const solution = (T, data) => {
	let area = data[0][0] * data[0][1];
	for(let i=1; i < T; i++){
		if ( area < data[i][0] * data[i][1] ){
			area = data[i][0] * data[i][1];
		}
	}
	console.log(area);
}

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let T = 0;
  let count = 0;
	const data = [];

  for await (const line of rl) {
    if (!T) {
      T = +line;
    } else {
      data.push(line.split(' ').map((el) => el));
      count += 1;
    }
    if (T === count) {
      rl.close();
    }
  }
	
	solution(T, data);
	process.exit();
})();

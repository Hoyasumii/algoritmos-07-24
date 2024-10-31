const data: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(data: Array<number>): number {
  if (data.length === 0) return 0;
  return data[0] + sum(data.slice(1));
}

console.log(sum(data))

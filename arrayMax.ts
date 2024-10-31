const data: Array<number> = [4, 20, 9, 74, 23, 100];

function arrayMax(data: Array<number>, max: number = data[0]): number {
  if (data.length === 0) return max;

  if (data[0] > max) {
    return arrayMax(data.slice(1), data[0]);
  }

  return arrayMax(data.slice(1), max);
}

console.log(arrayMax(data))
// console.log(Array.from([1, 2, 3], [4]))
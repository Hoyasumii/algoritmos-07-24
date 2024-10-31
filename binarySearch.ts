import { arrayRange } from "@/core";

function binarySearch(
  value: number,
  data: Array<number>,
): number | undefined {
  
  let low: number = 0;
  let high: number = data.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (data[mid] === value) {
      return mid;
    } else if (data[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return undefined;
}

let value = 50_500_000;
const values: Array<number> = Array.from({length: 200_000_000}, (_, index) => index);
console.log("gerado")

console.time("Data");
console.log(binarySearch(value, values));
console.timeEnd("Data");

console.time("Timing");
console.log(values.find((item) => item === value));
console.timeEnd("Timing");


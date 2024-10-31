const data: Array<string> = ["Alan", "Alberto", "Williany", "Lucas", "Daniel", "Marcos"];

function speak(name: string) {
  console.log(`Hello, ${name}`);
}

function bye(name: string) {
  console.log(`Bye, ${name}`);
}

function exec(data: Array<string>) {
  if (data.length == 0) return;

  speak(data[0]);
  exec(data.slice(1));
  bye(data[0]);
}

// console.log(data.slice(1))
exec(data);
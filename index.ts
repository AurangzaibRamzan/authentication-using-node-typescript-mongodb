// lib/app.ts
import express from 'express';

const app = express();

function greeter(person: string): string {
  return `Hello, ${person}`;
}

app.get('/', (req, res) => {
  res.send(greeter('ali'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

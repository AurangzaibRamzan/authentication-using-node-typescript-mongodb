// lib/app.ts
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

function greeter(person: string): string {
  return `Hello, ${person}`;
}

app.get('/', (req, res) => {
  res.send(greeter('ali'));
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});

import express from 'express';
const app = express();
const port = 3001;

// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

type User = {
  id: number
  name: string
  email: string
};

const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  // { id: 3, name: "User3", email: "user3@test.local" }
]

//一覧取得
app.get('/users', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(users))
})
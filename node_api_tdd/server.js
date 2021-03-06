/* 

  Node API TDD

  Here's a basic book API. Familiarise yourself with the code.
  You can run the server `node server.js` and check the root
  is loading 200/OK and /books returns a list of books.

  1. There are some tests in place to save us doing the work.
     Stop the server and run the tests with `npm test`

  2. There's a 'deprecated' warning in your logs. Fix this.

  3. Add a 'year' property onto each book. Use correct TDD
     practice (update the test, watch it fail, update server.js
     to make it pass).

  4. Beast mode: add some tests to yesterday's challenge. Can you
     figure out a way to test POST?
  
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 3000;

let books = [{
    id: 0,
    title: 'Eloquent JavaScript 2nd Edition',
    year: '1990'
  },
  {
    id: 1,
    title: 'JavaScript: The Good Parts',
    year: '2000'
  }
];

function getLastId() {
  let id = 0
  for (let book of books) {
    if (book.id > id) {
      id = book.id
    }
  }
  return id
}
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/books", (req, res) => {
  res.send(books);
});

app.post("/books", (req, res) => {
  const newBook = req.body.book
  newBook.id = getLastId() + 1
  books.push(newBook)
  res.redirect("/books")
})

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
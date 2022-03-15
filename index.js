
const express = require('express')
const mysqlx = require('@mysql/xdevapi');

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function getAllTable(table) {
  mysqlx.getSession('mysqlx://root:lovecats4life@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql(`SELECT * FROM ${table}`).execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function getRooms(type) {
  mysqlx.getSession('mysqlx://root:lovecats4life@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql(`SELECT Room_availability FROM rooms WHERE Room_type=${type}`).execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function getAvailable(name, table) {
  mysqlx.getSession('mysqlx://root:lovecats4life@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql(`SELECT available FROM ${table} WHERE name=${name}`).execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function getDefault(name, table) {
  mysqlx.getSession('mysqlx://root:lovecats4life@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql(`SELECT default FROM ${table} WHERE name=${name}`).execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function updateAvailable(name, qty, table) {
  mysqlx.getSession('mysqlx://root:lovecats4life@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql(`UPDATE ${table} SET available=${qty} WHERE name=${name}`).execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function updateDefault(name, qty, table) {
  mysqlx.getSession('mysqlx://root:lovecats4life@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql(`UPDATE ${table} SET default=${qty} WHERE name=${name}`).execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

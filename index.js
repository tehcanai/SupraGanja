
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

function getRooms() {
    mysqlx.getSession('mysqlx://root:password@localhost:33060/hotel_inventory')
        .then(session => {
            return session.sql("SELECT * FROM rooms").execute()
            .then(res => {
                console.log(res.fetchAll());
            })
    })
    .catch(err => {
      console.log(err);
    })
}

function getToiletries() {
  mysqlx.getSession('mysqlx://root:password@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql("SELECT * FROM toiletries").execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function getPantry() {
  mysqlx.getSession('mysqlx://root:password@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql("SELECT * FROM pantry").execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}

function getAppliance() {
  mysqlx.getSession('mysqlx://root:password@localhost:33060/hotel_inventory')
      .then(session => {
          return session.sql("SELECT * FROM appliances").execute()
          .then(res => {
              console.log(res.fetchAll());
          })
  })
  .catch(err => {
    console.log(err);
  })
}
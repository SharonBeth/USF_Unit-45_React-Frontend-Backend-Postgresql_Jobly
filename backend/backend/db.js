"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "development") {
  db = new Client({
    host: "localhost",
    user: "testing1",
    port: 5432,
    password: "testingpassword1",
    database: "jobly"
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri()
  });
}

db.connect();

//This confirms that I connected successfully to the database & was able to retreive a sample-set of data.
db.query(`Select * FROM users`, (err, res) => {
  if (!err) {
      console.log(res.rows);
  } else {
      console.log(err.message);
  }
  db.end;
})
module.exports = db;
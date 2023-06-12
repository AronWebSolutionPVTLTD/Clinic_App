const mysql = require("mysql");
const connection = require("../connection");

module.exports = {
  create_device(req, res) {
    const { name, status } = req.body;
    const query = `INSERT into devices (Name,Status) VALUES ('${name}','${status}')`;
    connection.query(query, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
  get_devices(req, res) {
    const query = "SELECT * from devices";
    connection.query(query, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
};

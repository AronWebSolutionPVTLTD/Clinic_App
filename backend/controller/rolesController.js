const mysql = require("mysql");
const connection = require("../connection");
module.exports = {
  create_role(req, res) {
    const { rolename, status } = req.body;
    const query = `INSERT INTO roles (RoleName,Status) VALUES ('${rolename}','${status}')`;
    connection.query(query, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
  get_roles(req, res) {
    const query = "SELECT * from roles";
    connection.query(query, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
};

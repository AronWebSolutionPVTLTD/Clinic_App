const mysql = require("mysql");
const connection = require("../connection");
module.exports = {
  create_room(req, res) {
    const { roomname, status } = req.body;
    const query = `INSERT into rooms(RoomName,Status) VALUES ('${roomname}','${status}') `;
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
  get_rooms(req, res) {
    const query = "SELECT * from rooms";
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
};

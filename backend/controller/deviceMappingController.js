const mysql = require("mysql");
const connection = require("../connection");
module.exports = {
  create_mapping(req, res) {
    const { roomid, deviceid, status } = req.body;
    const query = `INSERT into roomdevicemapping(RoomId,DeviceId,Status) VALUES ('${roomid}','${deviceid}','${status}')`;
    connection.query(query, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
};

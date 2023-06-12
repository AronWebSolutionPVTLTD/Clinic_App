const mysql = require("mysql");
const connection = require("../connection");

module.exports = {
  create_patientFlow(req, res) {
    const { roomid, technicianid, technicianentrytime, activitystatus } =
      req.body;
    const query = `INSERT into patientflowactivity(RoomId,TechnicianId,TechnicianEntryTime, ActivityStatus) VALUES ('${roomid}','${technicianid}','${technicianentrytime}','${activitystatus}')`;
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
  update_patientFlow(req, res) {
    const {
      id,
      technicianexittime,
      doctorid,
      doctorwaitingmins,
      priority,
      doctorreadytime,
      doctorentrytime,
      doctorexittime,
      janitorentrytime,
      janitorexittime,
      activitystatus,
    } = req.body;
    const query = `UPDATE patientflowactivity SET TechnicianExitTime = "${technicianexittime}", DoctorId = "${doctorid}", DoctorWaitingMins="${doctorwaitingmins} ", Priority="${priority}",DoctorReadyTime="${doctorreadytime}",DoctorEntryTime="${doctorentrytime}",DoctorExitTime="${doctorexittime}",JanitorEntryTime="${janitorentrytime}",JanitorExitTime="${janitorexittime}" , ActivityStatus="${activitystatus}"
      WHERE ActivityId="${id}"`;
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
};

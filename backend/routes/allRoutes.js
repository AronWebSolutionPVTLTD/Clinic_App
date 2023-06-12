const express = require("express");
const router = express.Router();
const roles = require("../controller/rolesController");
const rooms = require("../controller/roomsContoller");
const users = require("../controller/usersController");
const devices = require("../controller/deviceController");
const mapping = require("../controller/deviceMappingController");
const patientflow = require("../controller/patientActivity");

// *********   ROLES *****************
router.post("/create_role", roles.create_role);
router.get("/get_roles", roles.get_roles);

// *********   ROOMS *****************
router.post("/create_room", rooms.create_room);
router.get("/get_rooms", rooms.get_rooms);

// *********   USERS *****************
router.post("/create_user", users.create_user);
router.get("/get_users", users.get_users);

// *********   DEVICES *****************
router.post("/create_device", devices.create_device);
router.get("/get_devices", devices.get_devices);

// *********   DEVICES MAPPING *****************
router.post("/create_mapping", mapping.create_mapping);
// ********* Patient Activity **********
router.post("/create_flow", patientflow.create_patientFlow);
router.put("/update_flow", patientflow.update_patientFlow);

module.exports = router;

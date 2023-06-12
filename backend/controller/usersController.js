const mysql = require("mysql");
const connection = require("../connection");
const validator = require("email-validator");
module.exports = {
  create_user(req, res) {
    const {
      firstname,
      lastname,
      email,
      password,
      roleid,
      specialization,
      phone,
      image,
      searchattributes,
      usertype,
      status,
      lastlogindate,
    } = req.body;
    if (validator.validate(email)) {
      const query = `INSERT into users(FirstName,LastName,Email,Password,RoleId,Specialization,Phone,Image,SearchAttributes,UserType,Status,LastLoginDate) VALUES('${firstname}','${lastname}','${email}','${password}','${roleid}','${specialization}','${phone}','${image}','${searchattributes}','${usertype}','${status}','${lastlogindate}')`;
      connection.query(query, (err, result) => {
        if (err) {
          return res.status(400).send(err);
        } else {
          return res.status(200).send(result);
        }
      });
    } else {
      return res.status(400).send("Invalid Email");
    }
  },
  get_users(req, res) {
    const query =
      "SELECT UserId,FirstName,LastName,Email,RoleId,Specialization ,Phone,Image,SearchAttributes,UserType,Status,LastLoginDate  from users";
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.status(200).send(result);
      }
    });
  },
};

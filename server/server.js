const express = require("express");
const app = express();
var cors = require("cors");
const mysql = require("mysql");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ag",
});

app.get("/api/get", (req, res) => {
  res.end("express");
});
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const insert = "SELECT * FROM ag.admin where username=? and password= ?";
  db.query(insert, [username, password], (err, result) => {
    if (err) res.send({ err: err });

    if (result.length > 0) {
      res.send(result);
    } else res.send({ message: "wrong credentials" });
  });
});

app.post("/addPeople", (req, res) => {
  const group = req.body.group;
  const email = req.body.email;
  const done = req.body.main;
  if (done) {
    db.query(`insert into ag.groups(name) values(?)`, group);
  }
  const insert = "insert into ag.members values(?,?)";
  db.query(insert, [group, email]);
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testinguet6@gmail.com",
    pass: "test!123",
  },
});

var mailOptions = {
  from: "testinguet6@gmail.com",
  to: "",
  subject: "Special Announcement",
  text: "",
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
};

app.get("/getGroups", (req, res) => {
  const insert = "SELECT * FROM ag.groups;";
  db.query(insert, (err, result) => {
    res.send(result);
  });
});

app.post("/sendMessage", (req, res) => {
  const name = req.body.name;
  mailOptions.text=req.body.message;
  // console.log(req.body.name,req.body.message)
  const insert = "SELECT mumber_email FROM ag.members where group_name=?;";
  var people = [];
  db.query(insert, name, (err, result, fields) => {
    var i = 0;

    while (result[i]) {
      people.push(result[i].mumber_email);
      i++;
    }
    
    
    var i,fLen;
    fLen = people.length;
    for (i = 0; i < fLen; i++) {
        mailOptions.to=people[i];
         transporter.sendMail(mailOptions);
    }
    mailOptions.to='';
    mailOptions.text='';
  });
});

app.listen(process.env.PORT || 3001);

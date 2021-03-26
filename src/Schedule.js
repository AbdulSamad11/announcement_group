import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Schedule() {
  let history = useHistory();
  const [render, setrender] = useState(1);
  const [Gname, setGname] = useState();
  const location = useLocation();
  const [message, setmessage] = useState();
  const [min, setmin] = useState("*");
  const [hour, sethour] = useState("*");
  const [day, setday] = useState("*");
  const [month, setmonth] = useState("*");
  const send = () => {
    axios
      .post("http://localhost:3001/sendMessageSch", {
        message: message,
        name: Gname,
        date: min+' '+hour+' '+day+' '+month,
      })
      .then((response) => {
        alert(response.data.message);
      });
    document.getElementById("msg").value = "";
      history.push("/announce");
  };
  if (render) {
    if (location.state) {
      setGname(location.state.params.name);
      setrender(0);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "unset", flexDirection: "row" }}>
        <input
          onChange={(e) => {
            setmin(e.target.value);
          }}
          placeholder="min(0-59)"
          style={{
            height: "30px",
            width: "77px",
            display: "unset",
            flexDirection: "row",
          }}
        ></input>
        <span style={{ fontSize: "40px", marginTop: "15px" }}>{" / "}</span>
        <input
          onChange={(e) => {
            sethour(e.target.value);
          }}
          placeholder="hour(0-23)"
          style={{
            height: "30px",
            width: "82px",
            display: "unset",
            flexDirection: "row",
          }}
        ></input>
        <span style={{ fontSize: "40px", marginTop: "15px" }}>{" / "}</span>
        <input
          onChange={(e) => {
            setday(e.target.value);
          }}
          placeholder="day(1-31)"
          style={{
            height: "30px",
            width: "77px",
            display: "unset",
            flexDirection: "row",
          }}
        ></input>
        <span style={{ fontSize: "40px", marginTop: "15px" }}>{" / "}</span>
        <input
          onChange={(e) => {
            setmonth(e.target.value);
          }}
          placeholder="month(0-11)"
          style={{
            height: "30px",
            width: "91px",
            display: "unset",
            flexDirection: "row",
          }}
        ></input>
      </div>
      <h1>Making a Announcement</h1>
      <textarea
        placeholder="Enter your message"
        onChange={(e) => {
          setmessage(e.target.value);
        }}
        style={{ marginTop: "20px" }}
        id="msg"
        rows="8"
        cols="70"
      ></textarea>
      <button className="but" onClick={send}>
        send
      </button>
    </div>
  );
}

export default Schedule;

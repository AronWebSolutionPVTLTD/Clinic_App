import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page2() {
  const [selectTime, setSelectTime] = useState(false);
  //timer
  const initialTimer = 0;
  const [timer, setTimer] = useState(initialTimer);
  const [isRunning, setIsRunning] = useState(true);


  useEffect(() => {
    let countdown;
    if (isRunning) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(countdown);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const navigate = useNavigate();

  const handle_selectTime = () => {
    setSelectTime(true);
  };

  const handle_tech = (event) => {
    event.preventDefault();
    localStorage.setItem("dr_name", event.target.textContent);
    localStorage.setItem("dr_pic",  event.target.title);
    localStorage.setItem("dr_position",  event.target.id);
    setIsRunning(false);
    if (selectTime === true) {
      navigate("/page3");
    }
  };
  localStorage.setItem("Technician_timer", formatTime(timer));
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <title>Page-2</title>
      <header className="site-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="site-logo">
                <a>
                  <img src="images/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-6 text-end">
              <p className="header-text">Room No. 01</p>
            </div>
          </div>
        </div>
      </header>
      <main className="main_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 doctors_row">
              <div className="row">
                <div className="col-md-4">
                  <h1 className="text-white">Technician inside the room</h1>
                </div>
                <div className="col-md-6">
                  <div className="technician_card">
                    <div className="technician_img">
                      <img src={localStorage.getItem("dr_tech_pic")} />
                    </div>
                    <div className="technician_content">
                      <h4>{localStorage.getItem("dr_tech_name")}</h4>
                      <div className="tech_availability">
                        <img src="images/clock.png" className="clock_icon" />
                        <p>{formatTime(timer)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech_time_sec text-white mt-5">
                <h3 className="time_wait_title mb-4">Set Wait For</h3>
                <div className="tech_time_cols mb-4">
                  <p>Ready In</p>
                  <form className="time_box_wrapper">
                    <div className="time_box">
                      <input type="radio" id="ten_min" name="wait_time" />
                      <label htmlFor="ten_min" onClick={handle_selectTime}>
                        10 mins
                      </label>
                    </div>
                    <div className="time_box">
                      <input type="radio" id="priority" name="wait_time" />
                      <label htmlFor="priority" onClick={handle_selectTime}>
                        Priority
                      </label>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="tech_card" id="M.D." value="Dr. Matthew Neale" title="images/tech-card-1.png" onClick={handle_tech} >
                      <div className="tech_card_img">
                        <img src="images/tech-card-1.png" alt="" />
                      </div>
                      <div className="tech_card_content text-center">
                        <h4>Dr. Matthew Neale</h4>
                        <p>M.D.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="tech_card" id="O.D." value="Dr. Josh McAdams" title="images/tech-card-2.png" onClick={handle_tech}>
                      <div className="tech_card_img">
                        <img src="images/tech-card-2.png" alt="" />
                      </div>
                      <div className="tech_card_content text-center">
                        <h4>Dr. Josh McAdams</h4>
                        <p>O.D.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav_btns_wrapper">
                <button className="nav_btn">
                  <img src="images/back-btn.png" />
                </button>
                <button className="nav_btn">
                  <img src="images/cross-btn.png" />
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar_main">
                <div className="sidebar_col_wrapper">
                  <div className="sidebar_card">
                    <div className="sidebar_card_img">
                      <img src="images/dr-1.png" />
                      <div className="sidebar_card_content">
                        <h3 className="card_title">Dr. Matthew Neale</h3>
                        <span className="card_caption">M.D.</span>
                      </div>
                    </div>
                    <div className="card_bottom_content">
                      <p className="bottom_title">Next Room</p>
                      <div className="bottom_content_rooms">
                        <span className="active-room">12</span>
                        <span>10</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar_card">
                    <div className="sidebar_card_img">
                      <img src="images/dr-2.png" />
                      <div className="sidebar_card_content">
                        <h3 className="card_title">Dr. Matthew Neale</h3>
                        <span className="card_caption">M.D.</span>
                      </div>
                    </div>
                    <div className="card_bottom_content">
                      <p className="bottom_title">Next Room</p>
                      <div className="bottom_content_rooms">
                        <span className="active-room">12</span>
                        <span>10</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page2;

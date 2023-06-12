import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function Page3() {

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
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

    const navigate = useNavigate();
    const handle_start=()=>{
        setIsRunning(false);
        navigate("/page4");
    }
    localStorage.setItem("Patient_timer",formatTime(timer))
    let time = localStorage.getItem("Technician_timer")

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/style.css" />
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
              <div className="priority_sec">
                <div className="priority_header">
                  <h2 className="priority_title">On Priority</h2>
                  <div className="priority_time">
                    <h4>Patient Waiting from</h4>
                    <div className="tech_availability">
                      <img src="images/clock.png" className="clock_icon" />
                      <p>{formatTime(timer)}</p>
                    </div>
                  </div>
                </div>
                <div className="priority_row">
                  <div className="priority_col_lg">
                    <div className="tech_card">
                      <div className="tech_card_img">
                        <img src={localStorage.getItem("dr_pic")} alt="" />
                      </div>
                      <div className="tech_card_content text-center">
                        <h4>{localStorage.getItem("dr_name")}</h4>
                        <p>{localStorage.getItem("dr_position")}</p>
                      </div>
                    </div>
                    <div className="cmn_btn_wrapper">
                      <button className="cmn_btn" onClick={handle_start}>Start Visit</button>
                    </div>
                  </div>
                  <div className="priority_col_sm">
                    <div className="tech_time">
                      <p className="tech_tm_hd">Technician Time</p>
                      <div className="time_icon_text">
                        <img src="images/clock.png" className="clock_icon" />
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Page3;
